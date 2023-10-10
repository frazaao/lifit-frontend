"use client";

import ShowBodyRegistry from "@/app/app/platform/registries/body/ShowBodyregistry";
import BodyRegistryTableRow from "@/components/BodyRegistryTableRow";
import Pagination from "@/components/Pagination";
import useSearchParams from "@/hooks/useSearchParams";
import BodyRegistriesFiltersDomain from "@/services/app/domain/bodyRegistries/filters/types/BodyRegistriesFiltersDomain";
import BodyRegistriesService from "@/services/app/domain/bodyRegistries/services/BodyRegistriesService";
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
import {
    useRouter,
    useSearchParams as useNextSearchParams,
} from "next/navigation";

interface BodyRegistriesPageProps {
    params: {
        id: string;
    };
}

export default function BodyRegistriesPage({
    params,
}: BodyRegistriesPageProps) {
    const { filters, setFilters } =
        useSearchParams<BodyRegistriesFiltersDomain>({
            page: 1,
            perPage: 10,
            order: "DESC",
            columnOrder: "id",
            patientProfileId: Number(params.id),
        });

    const { data, isLoading } = useQuery({
        queryFn: () => BodyRegistriesService.listPaginated(filters),
        queryKey: ["ListBodyRegistriesByUserId", params.id, filters],
    });

    const router = useRouter();
    const showBodyRegistryIsOpen = useNextSearchParams().get("show") === "true";

    return (
        <>
            <Flex align="center" justify="center" p="8">
                <Card w="full" maxW="900px" size="lg">
                    <CardBody>
                        <Flex>Filters</Flex>

                        {showBodyRegistryIsOpen && (
                            <ShowBodyRegistry
                                isOpen={showBodyRegistryIsOpen}
                                onClose={() =>
                                    router.push(
                                        "/admin/dashboard/patients/" +
                                            params.id +
                                            "/body-registries"
                                    )
                                }
                            />
                        )}

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
                                <Tbody>
                                    {data?.data?.map((registry) => (
                                        <BodyRegistryTableRow
                                            key={registry.id}
                                            registry={registry}
                                            href={`?show=true&id=${registry.id}`}
                                        />
                                    ))}
                                </Tbody>
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
