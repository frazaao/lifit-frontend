"use client";

import MealRegistryCard from "@/components/MealRegistryCard";
import MealRegistriesService from "@/services/app/domain/mealRegistries/services/MealRegistriesService";
import {
    Box,
    Button,
    Flex,
    Heading,
    Icon,
    Spinner,
    Stack,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import AddMealRegistryForm from "./AddMealRegistryForm";
import ShowMealRegistry from "./ShowMealRegistry";

export default function MealRegistriesPage() {
    const router = useRouter();
    const params = useSearchParams();
    const pathname = usePathname();

    const addMealRegistryIsOpen = params.get("create") === "true";

    function setAddMealRegistryIsOpen(isOpen: boolean) {
        if (isOpen) {
            router.push(pathname + "?create=true");
        } else {
            router.push(pathname);
        }
    }

    const showMealRegistryIsOpen = params.get("show") === "true";

    function setShowMealRegistryIsOpen(
        isOpen: boolean,
        registryId?: string | number
    ) {
        if (isOpen) {
            router.push(pathname + "?show=true&id=" + registryId);
        } else {
            router.push(pathname);
        }
    }

    const { data, isLoading, refetch } = useQuery({
        queryFn: () => MealRegistriesService.list(),
        queryKey: ["ListMealRegistries"],
    });

    return (
        <>
            <AddMealRegistryForm
                isOpen={addMealRegistryIsOpen}
                onClose={() => setAddMealRegistryIsOpen(false)}
                refetch={() => refetch()}
            />

            <ShowMealRegistry
                isOpen={showMealRegistryIsOpen}
                onClose={() => setShowMealRegistryIsOpen(false)}
            />

            <Button
                as={Link}
                href="/app/platform/registries"
                position="fixed"
                top="2"
                left="2"
                rounded="3xl"
                shadow="base"
                bg="brand.purple"
                color="brand.white"
            >
                <Icon as={ChevronLeft} />
                Voltar
            </Button>
            <Stack
                bg="brand.white"
                shadow="dark-lg"
                p="4"
                pt="64px"
                h="calc(100vh - 78px)"
            >
                <Flex justify="space-between" align="center" pb="4">
                    <Heading fontSize="xl">Refeições</Heading>

                    <Button
                        onClick={() => setAddMealRegistryIsOpen(true)}
                        size="sm"
                        bg="brand.green"
                        color="brand.white"
                    >
                        Adicionar registro
                    </Button>
                </Flex>

                {isLoading ? (
                    <Flex w="full" h="full" align="center" justify="center">
                        <Spinner />
                    </Flex>
                ) : (
                    <Stack display="block" spacing="6" overflowY="auto" pb="4">
                        {data?.map((registry) => (
                            <MealRegistryCard
                                key={registry.id}
                                recipe={registry.recipe}
                                createdAt={new Date(registry.date)}
                                weight={registry.weight!}
                                mealType={registry.mealType!}
                                onClick={() =>
                                    setShowMealRegistryIsOpen(true, registry.id)
                                }
                            />
                        ))}
                    </Stack>
                )}
            </Stack>
        </>
    );
}
