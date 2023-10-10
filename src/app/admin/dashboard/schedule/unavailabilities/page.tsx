"use client";

import ScheduleManagementsService from "@/services/app/domain/scheduleManagements/services/ScheduleManagementsService";
import UnavailabilitysService from "@/services/app/domain/unavailabilities/services/UnavailabilitysService";
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
import CreateScheduleUnavailability from "./create";

export default function ScheduleUnavailabilitiesPage() {
    const { data, isLoading } = useQuery({
        queryFn: () => UnavailabilitysService.list(),
        queryKey: ["UnavailabilitysService.list"],
    });

    const [createModalIsOpen, setCreateModalIsOpen] = useState(false);

    return (
        <>
            {createModalIsOpen && (
                <CreateScheduleUnavailability
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

                        <Heading size="md">
                            Configuração de indisponibilidades
                        </Heading>
                    </Flex>

                    <Button
                        onClick={() => setCreateModalIsOpen(true)}
                        variant="ghost"
                        color="brand.green"
                        lineHeight="1"
                    >
                        + Adicionar indisponibilidade
                    </Button>
                </CardHeader>

                <CardBody>
                    <Table>
                        <Thead>
                            <Tr>
                                <Th>#</Th>
                                <Th>Início da indisponibilidade</Th>
                                <Th>Término da indisponibilidade</Th>
                            </Tr>
                        </Thead>

                        <Tbody>
                            {data?.map((unavailability) => (
                                <Tr key={unavailability.id}>
                                    <Td>{unavailability.id}</Td>
                                    <Td>
                                        {unavailability.startDate &&
                                            `${new Date(
                                                unavailability.startDate
                                            ).toLocaleDateString(
                                                "pt-BR"
                                            )} ${new Date(
                                                unavailability.startDate
                                            ).toLocaleTimeString("pt-BR")}`}
                                    </Td>
                                    <Td>
                                        {unavailability.endDate &&
                                            `${new Date(
                                                unavailability.endDate
                                            ).toLocaleDateString(
                                                "pt-BR"
                                            )} ${new Date(
                                                unavailability.endDate
                                            ).toLocaleTimeString("pt-BR")}`}
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
