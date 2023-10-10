"use client";

import ShowMealRegistry from "@/app/app/platform/registries/meal/ShowMealRegistry";
import MealRegistryTableRow from "@/components/MealRegistryTableRow";
import Pagination from "@/components/Pagination";
import useSearchParams from "@/hooks/useSearchParams";
import MealRegistriesFiltersDomain from "@/services/app/domain/mealRegistries/filters/types/MealRegistriesFiltersDomain";
import MealRegistriesService from "@/services/app/domain/mealRegistries/services/MealRegistriesService";
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

interface MealRegistriesPageProps {
    params: {
        id: string;
    };
}

export default function MealRegistriesPage({
    params,
}: MealRegistriesPageProps) {
    const { filters, setFilters } =
        useSearchParams<MealRegistriesFiltersDomain>({
            page: 1,
            perPage: 5,
            order: "DESC",
            columnOrder: "id",
            patientProfileId: Number(params.id),
        });

    const { data, isLoading } = useQuery({
        queryFn: () => MealRegistriesService.listPaginated(filters),
        queryKey: ["ListBodyRegistries", params.id, filters],
    });

    const router = useRouter();
    const showMealRegistryIsOpen = useNextSearchParams().get("show") === "true";

    return (
        <>
            <Flex align="center" justify="center" p="8">
                <Card w="full" maxW="900px" size="lg">
                    <CardBody>
                        <Flex>Filters</Flex>

                        {showMealRegistryIsOpen && (
                            <ShowMealRegistry
                                isOpen={showMealRegistryIsOpen}
                                onClose={() =>
                                    router.push(
                                        "/admin/dashboard/patients/" +
                                            params.id +
                                            "/meal-registries"
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
                                    {data?.data.map((registry) => (
                                        <MealRegistryTableRow
                                            key={registry.id}
                                            href={
                                                "?show=true&id=" + registry.id
                                            }
                                            registry={registry}
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
