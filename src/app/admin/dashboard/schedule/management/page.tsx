"use client";

import ScheduleManagementsService from "@/services/app/domain/scheduleManagements/services/ScheduleManagementsService";
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Flex,
    Heading,
    Icon,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import CreateScheduleManagement from "./create";

export default function ScheduleSettingsPage() {
    const { data, isLoading } = useQuery({
        queryFn: () => ScheduleManagementsService.list(),
        queryKey: ["ScheduleManagementsService.list"],
    });

    const [createModalIsOpen, setCreateModalIsOpen] = useState(false);

    return (
        <>
            {createModalIsOpen && (
                <CreateScheduleManagement
                    isOpen={createModalIsOpen}
                    onClose={() => setCreateModalIsOpen(false)}
                />
            )}
            <Card w="full" mx="4" my="4">
                <CardHeader
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Flex align="center" gap="4">
                        <Button
                            variant="link"
                            color="brand.green"
                            as={Link}
                            href="/admin/dashboard/schedule"
                        >
                            <Icon as={ChevronLeft} />
                            Voltar
                        </Button>
                        <Heading size="md">Configuração de agenda</Heading>
                    </Flex>

                    <Button
                        onClick={() => setCreateModalIsOpen(true)}
                        variant="ghost"
                        color="brand.green"
                        lineHeight="1"
                    >
                        + Adicionar dia de atendimento
                    </Button>
                </CardHeader>

                <CardBody>
                    <Table>
                        <Thead>
                            <Tr>
                                <Th>Dia de atendimento</Th>
                                <Th>Horário de início das consultas</Th>
                                <Th>Horário de término das consultas</Th>
                                <Th>Duração das consultas</Th>
                            </Tr>
                        </Thead>

                        <Tbody>
                            {data?.map((scheduleManagement) => (
                                <Tr key={scheduleManagement.id}>
                                    <Td>{scheduleManagement.attendanceDay}</Td>
                                    <Td>
                                        {scheduleManagement.attendanceStartTime}
                                    </Td>
                                    <Td>
                                        {scheduleManagement.attendanceEndTime}
                                    </Td>
                                    <Td>
                                        {scheduleManagement.attendanceDuration}
                                        min
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </CardBody>
            </Card>
        </>
    );
}
