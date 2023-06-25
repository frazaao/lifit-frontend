"use client";

import BodyRegistryCard from "@/components/BodyRegistryCard";
import BodyRegistriesService from "@/services/app/domain/bodyRegistries/services/BodyRegistriesService";
import { Button, Flex, Heading, Icon, Stack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { ChevronLeft } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import AddBodyRegistryForm from "./AddBodyRegistryForm";
import ShowBodyRegistry from "./ShowBodyregistry";

export default function BodyRegistriesPage() {
    const router = useRouter();
    const params = useSearchParams();
    const pathname = usePathname();

    console.log(pathname);

    const addBodyRegistryIsOpen = params.get("create") === "true";
    function setAddBodyRegistryIsOpen(isOpen: boolean) {
        if (isOpen) {
            router.push(pathname + "?create=true");
        } else {
            router.push(pathname);
        }
    }

    const showBodyRegistryIsOpen = params.get("show") === "true";
    function setShowBodyRegistryIsOpen(
        isOpen: boolean,
        registryId?: string | number
    ) {
        if (isOpen) {
            router.push(pathname + "?show=true&id=" + registryId);
        } else {
            router.push(pathname);
        }
    }

    function back() {
        router.back();
    }

    const { data: bodyRegistries, refetch: refetchRegistries } = useQuery({
        queryKey: ["ListBodyRegistries"],
        queryFn: () => BodyRegistriesService.list(),
    });

    return (
        <>
            <AddBodyRegistryForm
                isOpen={addBodyRegistryIsOpen}
                onClose={() => setAddBodyRegistryIsOpen(false)}
                refetch={refetchRegistries}
            />

            <ShowBodyRegistry
                isOpen={showBodyRegistryIsOpen}
                onClose={() => setShowBodyRegistryIsOpen(false)}
            />

            <Button
                position="fixed"
                top="2"
                left="2"
                rounded="3xl"
                onClick={back}
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
                    <Heading fontSize="xl">Dados corporais</Heading>

                    <Button
                        onClick={() => setAddBodyRegistryIsOpen(true)}
                        size="sm"
                        bg="brand.green"
                        color="brand.white"
                    >
                        Adicionar registro
                    </Button>
                </Flex>

                <Stack spacing="4" overflowY="auto">
                    {bodyRegistries?.map((registry) => (
                        <BodyRegistryCard
                            key={registry.id}
                            date={
                                registry.registryDate
                                    ? new Date(registry.registryDate)
                                    : new Date()
                            }
                            href={
                                "/app/platform/registries/body?show=true&id=" +
                                registry.id
                            }
                            height={registry.height / 100}
                            weight={registry.weight / 100}
                            bodyMassIndex={registry.bodyMassIndex?.toFixed(2)}
                        />
                    ))}
                </Stack>
            </Stack>
        </>
    );
}
