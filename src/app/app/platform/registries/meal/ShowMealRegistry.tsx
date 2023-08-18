import RecipeCard from "@/components/RecipeCard";
import RecipeCardOption from "@/components/RecipeCardOption";
import MealRegistriesService from "@/services/app/domain/mealRegistries/services/MealRegistriesService";
import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerOverlay,
    Flex,
    Heading,
    Spinner,
    Stack,
    Text,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

interface RegistriesPageProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ShowMealRegistry({
    isOpen = false,
    onClose = () => {},
}: RegistriesPageProps) {
    const mealRegistryId = useSearchParams().get("id");

    const { data, isLoading } = useQuery(["MealRegistry", mealRegistryId], () =>
        MealRegistriesService.find(mealRegistryId || "")
    );

    if (isLoading) {
        return (
            <Flex h="full" w="full" align="center" justify="center">
                <Spinner />
            </Flex>
        );
    }

    return (
        <>
            <Drawer isOpen={isOpen} onClose={onClose} placement="bottom">
                <DrawerOverlay />

                <DrawerContent shadow="dark-lg">
                    <DrawerBody>
                        <Box pt="4">
                            <Flex align="center" justify="space-between" pb="8">
                                <Flex direction="column" align="flex-start">
                                    <Heading fontSize="xl">
                                        Registro de dados corporais
                                    </Heading>
                                    {data?.createdAt && (
                                        <Text
                                            fontWeight="bold"
                                            color="brand.text"
                                            fontSize="sm"
                                        >
                                            {`${new Date(
                                                data?.createdAt
                                            ).toLocaleDateString(
                                                "pt-BR"
                                            )} - ${new Date(
                                                data.createdAt
                                            ).toLocaleTimeString("pt-BR", {
                                                timeStyle: "short",
                                            })}`}
                                        </Text>
                                    )}
                                </Flex>

                                <Button
                                    variant="outline"
                                    borderColor="brand.red"
                                    color="brand.red"
                                    size="sm"
                                    onClick={onClose}
                                >
                                    Fechar
                                </Button>
                            </Flex>

                            <Stack spacing="8" pb="10">
                                <Flex gap="4" align="flex-start">
                                    <Box flex="1">
                                        <Heading fontSize="md">
                                            Tipo da refeição
                                        </Heading>
                                        <Text color="brand.text">
                                            {data?.mealType?.title}
                                        </Text>
                                    </Box>
                                    <Box flex="1">
                                        <Heading fontSize="md">
                                            Peso do prato
                                        </Heading>
                                        <Text color="brand.text">
                                            {data?.weight}g
                                        </Text>
                                    </Box>
                                </Flex>

                                <Flex gap="4" align="flex-start">
                                    <Box flex="1">
                                        <Heading fontSize="md">
                                            Data da refeição
                                        </Heading>
                                        <Text color="brand.text">
                                            {new Date(
                                                data?.date || ""
                                            ).toLocaleDateString("pt-BR")}
                                        </Text>
                                    </Box>

                                    <Box flex="1">
                                        <Heading fontSize="md">
                                            Hora da refeição
                                        </Heading>
                                        <Text color="brand.text">
                                            {new Date(
                                                data?.date || ""
                                            ).toLocaleTimeString("pt-BR", {
                                                timeStyle: "short",
                                            })}
                                        </Text>
                                    </Box>
                                </Flex>

                                <Flex gap="4" align="flex-start">
                                    <Box flex="1">
                                        <Heading fontSize="md">Receita</Heading>
                                        <RecipeCardOption
                                            recipe={data?.recipe}
                                        />
                                    </Box>

                                    <Box flex="1">
                                        <Heading fontSize="md">
                                            Comentário adicional
                                        </Heading>
                                        <Text color="brand.text">
                                            {data?.additionalComments}
                                        </Text>
                                    </Box>
                                </Flex>
                            </Stack>
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
}
