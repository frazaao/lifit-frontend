"use client";

import Pagination from "@/components/Pagination";
import useSearchParams from "@/hooks/useSearchParams";
import AppointmentsFiltersDomain from "@/services/app/domain/appointments/filters/types/AppointmentsFiltersDomain";
import AppointmentsService from "@/services/app/domain/appointments/services/AppointmentsService";
import PatientProfilesService from "@/services/app/domain/patientProfiles/services/PatientProfilesService";
import {
    Card,
    CardBody,
    CardFooter,
    Flex,
    Spinner,
    Table,
    Tbody,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

interface AppointmentsPageProps {
    params: {
        id: string;
    };
}

export default function AppointmentsPage({ params }: AppointmentsPageProps) {
    const { data: patientProfile, isLoading: isLoadingPatientProfile } =
        useQuery({
            queryFn: () => PatientProfilesService.find(params.id),
            queryKey: ["PatientProfilesService.find", params.id],
        });

    const { filters, setFilters } = useSearchParams<AppointmentsFiltersDomain>({
        page: 1,
        perPage: 10,
        order: "DESC",
        patientProfileId: patientProfile?.id,
    });

    const { data, isLoading } = useQuery({
        queryFn: () => AppointmentsService.listPaginated(filters),
        queryKey: [
            "AppointmentsService.listPaginated",
            patientProfile,
            filters,
        ],
    });

    return (
        <>
            <Flex align="center" justify="center" p="8">
                <Card w="full" maxW="900px" size="lg">
                    <CardBody>
                        <Flex>Filters</Flex>

                        {isLoading ? (
                            <Flex
                                w="full"
                                align="center"
                                justify="center"
                                minH="300px"
                            >
                                <Spinner />
                            </Flex>
                        ) : (
                            <Table
                                variant="unstyled"
                                w="full"
                                __css={{
                                    borderCollapse: "separate",
                                    borderSpacing: "0 1rem",
                                }}
                            >
                                <Tbody></Tbody>
                            </Table>
                        )}
                    </CardBody>

                    <CardFooter justify="flex-end">
                        {data && (
                            <Pagination
                                pagination={data}
                                onSetPage={(page) =>
                                    setFilters({ ...filters, page })
                                }
                            />
                        )}
                    </CardFooter>
                </Card>
            </Flex>
        </>
    );
}
