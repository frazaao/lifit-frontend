"use client";

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
        });

    const { data, isLoading } = useQuery({
        queryFn: () =>
            BodyRegistriesService.listByUserIdPaginated(params.id, filters),
        queryKey: ["ListBodyRegistriesByUserId", params.id],
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
