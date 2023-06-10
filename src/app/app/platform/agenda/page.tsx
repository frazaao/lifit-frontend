"use client";

import FormControl from "@/components/FormControl";
import useAuth from "@/hooks/useAuth";
import AppointmentStatusEnum from "@/services/app/domain/appointments/enums/AppontmentStatusEnum";
import appointmentZodSchema, {
    AppointmentZodSchema,
} from "@/services/app/domain/appointments/schemas/AppointmentZodSchema";
import AppointmentsService from "@/services/app/domain/appointments/services/AppointmentsService";
import PatientProfilesService from "@/services/app/domain/patientProfiles/services/PatientProfilesService";
import {
    Box,
    Button,
    Divider,
    Flex,
    Heading,
    Select,
    Spinner,
    Stack,
    Text,
    Textarea,
    useToast,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useEffect } from "react";
import Calendar from "react-calendar";
import { useForm } from "react-hook-form";
import "./styles.css";

export default function AgendaPage() {
    const { user } = useAuth();

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
        setError,
    } = useForm<AppointmentZodSchema>({
        resolver: zodResolver(appointmentZodSchema),
        mode: "all",
        defaultValues: {
            date: new Date(),
        },
    });

    const { data: myPatientProfile, isLoading: myPatientProfileIsLoading } =
        useQuery({
            queryFn: PatientProfilesService.findMyProfile,
            queryKey: ["MyPatientProfile"],
        });

    const { data: appointments, isLoading: appointmentsIsLoading } = useQuery({
        queryFn: AppointmentsService.list,
        queryKey: ["ListAppointments", myPatientProfile],
    });

    const date = watch("date");
    const toast = useToast();

    async function submitForm(values: AppointmentZodSchema) {
        try {
            await AppointmentsService.create(values);
            toast({
                title: "Sucesso!",
                description: "Agendamento realizado com sucesso!",
                status: "success",
                position: "top-right",
            });
        } catch (e) {
            if (e instanceof AxiosError && e.status === 422) {
                if (e.response?.data.errors.date) {
                    setError("date", {
                        message: e.response?.data.errors.date[0],
                    });
                }

                if (e.response?.data.errors.start_time) {
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

    const myAppointments = appointments?.filter(
        (appointment) => appointment.patientProfileId === myPatientProfile?.id
    );

    const myAppointmentToday = myAppointments?.find(
        (appointment) =>
            new Date(appointment.date).toLocaleDateString() ===
            date.toLocaleDateString()
    );

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

    if (myPatientProfileIsLoading && appointmentsIsLoading) {
        return (
            <>
                <Flex w="full" h="full" align="center" justify="center">
                    <Spinner />
                </Flex>
            </>
        );
    }

    return (
        <>
            <Flex
                as="form"
                onSubmit={handleSubmit(submitForm)}
                direction="column"
                justify="space-between"
                h="full"
                bg="brand.background"
            >
                <Box p="2" shadow="base" rounded="2xl" m="4" bg="white">
                    <Calendar
                        view="month"
                        className="calendar"
                        locale="pt-BR"
                        value={date}
                        onChange={(value) =>
                            setValue("date", new Date(value?.toString()!))
                        }
                    />
                </Box>

                {myAppointmentToday ? (
                    <Box
                        shadow="0 4px 12px rgba(0,0,0,0.25)"
                        px="4"
                        bg="white"
                        overflowY="auto"
                    >
                        <Heading
                            fontSize="lg"
                            color="brand.green"
                            mt="5"
                            mb="3"
                        >
                            Agendamento
                        </Heading>

                        <Text mb="4" color="brand.green">
                            Você já possui um agendamento no dia selecionado
                        </Text>

                        <Divider borderColor="gray.400" mb="3" />

                        <Stack mb="8">
                            <Flex align="center" gap="2" lineHeight="1">
                                <Heading fontSize="md" fontWeight="normal">
                                    Data:
                                </Heading>
                                <Text color="brand.text">
                                    {new Date(
                                        myAppointmentToday.date
                                    ).toLocaleDateString()}
                                </Text>
                            </Flex>

                            <Flex align="center" gap="2" lineHeight="1">
                                <Heading fontSize="md" fontWeight="normal">
                                    Horário:
                                </Heading>
                                <Text color="brand.text">
                                    {myAppointmentToday.startTime}
                                </Text>
                            </Flex>

                            <Flex align="center" gap="2" lineHeight="1">
                                <Heading fontSize="md" fontWeight="normal">
                                    Comentário sobre a consulta:
                                </Heading>
                                <Text color="brand.text">
                                    {myAppointmentToday.additionalComments ||
                                        "Sem comentários"}
                                </Text>
                            </Flex>

                            <Flex align="center" gap="2" lineHeight="1">
                                <Heading fontSize="md" fontWeight="normal">
                                    Status do agendamento:
                                </Heading>
                                <Text color="brand.text">
                                    {
                                        AppointmentStatusEnum[
                                            myAppointmentToday.status
                                        ]
                                    }
                                </Text>
                            </Flex>
                        </Stack>
                    </Box>
                ) : (
                    <Box
                        shadow="0 4px 12px rgba(0,0,0,0.25)"
                        px="4"
                        bg="white"
                        overflowY="auto"
                    >
                        <Heading
                            fontSize="lg"
                            color="brand.green"
                            mt="5"
                            mb="3"
                        >
                            Agendar consulta
                        </Heading>

                        <Divider borderColor="gray.400" mb="3" />

                        <Box mb="4">
                            <FormControl
                                label="Horário"
                                error={errors.startTime?.message}
                            >
                                <Select {...register("startTime")}>
                                    <option value="10:00:00">10:00</option>
                                    <option value="21:00:00">21:00</option>
                                </Select>
                            </FormControl>
                        </Box>

                        <Box mb="4">
                            <FormControl
                                label="Comentários sobre a consulta"
                                error={errors.additionalComments?.message}
                            >
                                <Textarea
                                    {...register("additionalComments")}
                                    resize="none"
                                    placeholder="Adicione comentários que desejar para seu médico sobre a consulta"
                                />
                            </FormControl>
                        </Box>

                        <input
                            type="hidden"
                            {...register("nutritionistProfileId")}
                            value="0"
                        />

                        <input
                            type="hidden"
                            {...register("patientProfileId")}
                            value="0"
                        />

                        <input
                            type="hidden"
                            {...register("status")}
                            value="REQUESTED"
                        />

                        <Button
                            type="submit"
                            w="full"
                            size="lg"
                            bg="brand.green"
                            color="brand.white"
                            mb="4"
                            fontSize="xl"
                            _hover={{ brightness: 0.9 }}
                            _focus={{ brightness: 0.9 }}
                            _active={{ brightness: 0.9 }}
                        >
                            Confirmar consulta
                        </Button>
                    </Box>
                )}
            </Flex>
        </>
    );
}
