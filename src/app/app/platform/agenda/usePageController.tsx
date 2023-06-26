import appointmentZodSchema, {
    AppointmentZodSchema,
} from "@/services/app/domain/appointments/schemas/AppointmentZodSchema";
import AppointmentsService from "@/services/app/domain/appointments/services/AppointmentsService";
import NutritionistProfilesService from "@/services/app/domain/nutritionistProfiles/services/NutritionistProfilesService";
import PatientProfilesService from "@/services/app/domain/patientProfiles/services/PatientProfilesService";
import AttendanceDaysToNumberEnum from "@/services/app/domain/scheduleManagements/enums/AttendanceDaysToNumberEnum";
import ScheduleManagementDomain from "@/services/app/domain/scheduleManagements/types/ScheduleManagementDomain";
import DateUtils from "@/utils/Date/DateUtils";
import { Box, useToast } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useEffect } from "react";
import {
    TileArgs,
    TileContentFunc,
    TileDisabledFunc,
} from "react-calendar/dist/cjs/shared/types";
import { useForm } from "react-hook-form";

export default function usePageController() {
    const { data: myPatientProfile, isLoading: myPatientProfileIsLoading } =
        useQuery({
            queryFn: PatientProfilesService.findMyProfile,
            queryKey: ["MyPatientProfile"],
        });

    const { data: myNutritionist, isLoading: myNutritionistIsLoading } =
        useQuery({
            queryFn: NutritionistProfilesService.findMyNutritionist,
            queryKey: ["MyNutritionist"],
        });

    const {
        data: appointments,
        isLoading: appointmentsIsLoading,
        refetch: refetchAppointments,
    } = useQuery({
        queryFn: AppointmentsService.list,
        queryKey: ["ListAppointments", myPatientProfile],
    });

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
        setError,
        reset,
    } = useForm<AppointmentZodSchema>({
        resolver: zodResolver(appointmentZodSchema),
        mode: "all",
        defaultValues: {
            date: new Date(),
        },
    });

    const toast = useToast();
    const date = watch("date");
    const myAppointments = appointments?.filter(
        (appointment) => appointment.patientProfileId === myPatientProfile?.id
    );

    const myAppointmentToday = myAppointments?.find(
        (appointment) =>
            new Date(appointment.date).toLocaleDateString() ===
            date.toLocaleDateString()
    );

    const attendanceData = myNutritionist?.schedule?.scheduleManagements?.find(
        (scheduleManagement) => {
            const weekDay = AttendanceDaysToNumberEnum[date.getDay()];

            return weekDay === scheduleManagement.attendanceDay;
        }
    );

    function getAttendanceHours(
        attendanceData: ScheduleManagementDomain | undefined
    ) {
        if (!attendanceData) {
            return [];
        }

        let attendanceHours = [];
        for (
            let i = DateUtils.timeToDate(attendanceData.attendanceStartTime);
            i < DateUtils.timeToDate(attendanceData.attendanceEndTime);
            i = DateUtils.addMinutes(i, attendanceData.attendanceDuration)
        ) {
            if (
                attendanceData.breakStartTime &&
                attendanceData.breakEndTime &&
                DateUtils.timeToDate(attendanceData?.breakStartTime) <=
                    DateUtils.timeToDate(i.toLocaleTimeString()) &&
                DateUtils.timeToDate(attendanceData?.breakEndTime) >=
                    DateUtils.timeToDate(i.toLocaleTimeString())
            ) {
                continue;
            }
            attendanceHours.push(i.toLocaleTimeString());
        }

        return attendanceHours;
    }

    async function submitForm(values: AppointmentZodSchema) {
        try {
            await AppointmentsService.create(values);
            reset();
            refetchAppointments();
            toast({
                title: "Sucesso!",
                description: "Agendamento realizado com sucesso!",
                status: "success",
                position: "top-right",
            });
        } catch (e) {
            if (e instanceof AxiosError) {
                if (e.response?.data.errors.date) {
                    setError("date", {
                        message: e.response?.data.errors.date[0],
                    });
                }

                if (e.response?.data.errors.additional_comments) {
                    setError("additionalComments", {
                        message: e.response?.data.errors.additional_comments[0],
                    });
                }

                if (e.response?.data.errors.start_time) {
                    setError("startTime", {
                        message: e.response?.data.errors.start_time[0],
                    });
                }
            } else {
                toast({
                    title: "Houve um erro ao realizar agendamento",
                    description:
                        "Ocorreu um erro ao realizar o seu agendamento! Caso o erro persista, entre em contato com a equipe de suporte",
                    status: "error",
                    position: "top-right",
                });
            }
        }
    }

    function setTileDisabled({ date }: TileArgs): boolean {
        const dayIHaveAppointment = myAppointments?.find(
            (appointment) =>
                new Date(appointment.date).toLocaleDateString() ===
                date.toLocaleDateString()
        );

        if (dayIHaveAppointment) return false;

        const dateIsOnUnavailableDays =
            myNutritionist?.schedule?.unavailabilities?.find(
                (unavailability) => {
                    const startDate = new Date(unavailability.startDate);
                    startDate.setHours(0, 0, 0);

                    const endDate = new Date(unavailability.endDate);
                    endDate.setHours(23, 59, 59);
                    return startDate <= date && endDate >= date;
                }
            );

        if (dateIsOnUnavailableDays) return true;

        const dateIsOnAttendaceDays =
            myNutritionist?.schedule?.scheduleManagements?.find(
                (scheduleManagement) => {
                    const weekDay = AttendanceDaysToNumberEnum[date.getDay()];

                    return weekDay === scheduleManagement.attendanceDay;
                }
            );
        if (!dateIsOnAttendaceDays) return true;

        return false;
    }

    function setTileContentInCalendarWithAppointments({
        date,
        view,
    }: TileArgs): React.ReactNode {
        if (view !== "month") return;

        const appointmentsInCalendar =
            myAppointments?.filter(
                (appointment) =>
                    new Date(appointment.date).toLocaleDateString() ===
                    date.toLocaleDateString()
            ) || [];

        if (appointmentsInCalendar.length > 0) {
            return (
                <>
                    <Box
                        w="4"
                        h="1"
                        rounded="full"
                        bg="brand.green"
                        position="absolute"
                        top="75%"
                        left="50%"
                        transform="translateX(-50%)"
                    />
                </>
            );
        }
    }

    useEffect(() => {
        if (errors.date?.message) {
            toast({
                title: errors.date?.message,
                status: "error",
                duration: 3000,
                position: "top-right",
            });
            setError("date", {});
        }
    }, [errors.date?.message]);

    return {
        myPatientProfileIsLoading,
        myNutritionistIsLoading,
        appointmentsIsLoading,
        handleSubmit,
        submitForm,
        date,
        setValue,
        setTileContentInCalendarWithAppointments,
        setTileDisabled,
        myAppointmentToday,
        errors,
        register,
        attendanceHours: getAttendanceHours(attendanceData),
    };
}
