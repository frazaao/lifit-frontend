"use client";

import AttendanceDaysToNumberEnum from "@/services/app/domain/scheduleManagements/enums/AttendanceDaysToNumberEnum";
import SchedulesService from "@/services/app/domain/schedules/services/SchedulesService";
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Flex,
    Heading,
    Icon,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { ChevronLeft, ChevronRight, Cog, Plus } from "lucide-react";
import Link from "next/link";
import Calendar from "react-calendar";
import { TileArgs } from "react-calendar/dist/cjs/shared/types";
import "./styles.css";

export default function SchedulePage() {
    const { data, isLoading } = useQuery({
        queryFn: () => SchedulesService.getLoggedUserSchedule(),
        queryKey: ["SchedulesService.getLoggedUserSchedule"],
    });

    function setTileDisabled({ date }: TileArgs): boolean {
        const dateIsOnUnavailableDays = data?.unavailabilities?.find(
            (unavailability) => {
                const startDate = new Date(unavailability.startDate);
                startDate.setHours(0, 0, 0);

                const endDate = new Date(unavailability.endDate);
                endDate.setHours(23, 59, 59);
                return startDate <= date && endDate >= date;
            }
        );

        if (dateIsOnUnavailableDays) return true;

        const dateIsOnAttendaceDays = data?.scheduleManagements?.find(
            (scheduleManagement) => {
                const weekDay = AttendanceDaysToNumberEnum[date.getDay()];

                return weekDay === scheduleManagement.attendanceDay;
            }
        );
        if (!dateIsOnAttendaceDays) return true;

        return false;
    }

    console.log(data);

    return (
        <>
            <Card w="full" mx="4" my="4">
                <CardHeader
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Heading fontSize="xl">Agenda</Heading>

                    <Flex>
                        <Button
                            as={Link}
                            href="/admin/dashboard/schedule/unavailabilities"
                            variant="ghost"
                            color="brand.green"
                            lineHeight="1"
                        >
                            <Icon as={Plus} mr="1" /> Adicionar
                            indisponibilidade
                        </Button>

                        <Button
                            as={Link}
                            href="/admin/dashboard/schedule/management"
                            variant="ghost"
                            color="brand.green"
                            lineHeight="1"
                        >
                            <Icon as={Cog} mr="1" /> Configurar agenda
                        </Button>
                    </Flex>
                </CardHeader>
                <CardBody>
                    <Calendar
                        view="month"
                        className="calendar"
                        locale="pt-BR"
                        // value={date}
                        // onChange={(value) =>
                        //     setValue("date", new Date(value?.toString()!))
                        // }
                        tileDisabled={setTileDisabled}
                        // tileContent={setTileContentInCalendarWithAppointments}
                        nextLabel={<Icon as={ChevronRight} />}
                        prevLabel={<Icon as={ChevronLeft} />}
                    />
                </CardBody>
            </Card>
        </>
    );
}
