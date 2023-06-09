"use client";

import RecipesService from "@/services/app/domain/recipes/services/RecipesService";
import {
    Box,
    Button,
    Divider,
    Flex,
    Heading,
    Icon,
    List,
    ListItem,
    Spinner,
    Text,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { ChevronLeft, Flame, Soup, UtensilsCrossed } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface RecipePageProps {
    params: {
        id: string;
    };
}

export default function RecipePage({ params }: RecipePageProps) {
    const { data: recipe, isLoading } = useQuery({
        queryFn: () => RecipesService.find(params.id),
        queryKey: ["FindRecipe", params.id],
    });

    const router = useRouter();

    function back() {
        router.back();
    }

    if (isLoading) {
        return (
            <Flex w="full" h="full" align="center" justify="center">
                <Spinner />
            </Flex>
        );
    }

    return (
        <>
            <Box as="main">
                <Box position="relative">
                    {recipe?.imageUrl && (
                        <Image
                            src={recipe?.imageUrl}
                            alt={recipe?.title}
                            width={390}
                            height={306}
                            style={{ width: "100%", height: "310px" }}
                        />
                    )}
                    <Button
                        position="absolute"
                        top="2"
                        left="2"
                        rounded="3xl"
                        onClick={back}
                        shadow="base"
                    >
                        <Icon as={ChevronLeft} />
                        Voltar
                    </Button>
                </Box>

                <Box px="6">
                    <Flex align="center" mt="2" gap="4">
                        <Heading
                            fontSize="xl"
                            overflow="hidden"
                            maxH="80px"
                            textOverflow="ellipsis"
                        >
                            {recipe?.title}
                        </Heading>
                        <Flex
                            borderRadius="lg"
                            w="full"
                            align="center"
                            justify="center"
                            border="1px"
                            borderColor="rgba(0,0,0,0.2)"
                            px="2"
                            py="1"
                            flexWrap="nowrap"
                            fontSize="lg"
                            gap="1"
                        >
                            <Icon
                                as={Flame}
                                color="brand.red"
                                strokeWidth={3}
                            />
                            <Text
                                color="brand.text"
                                fontWeight="bold"
                                whiteSpace="nowrap"
                            >
                                {recipe?.calories} kcal
                            </Text>
                        </Flex>
                    </Flex>

                    <Divider my="2" borderColor="gray.400" />

                    <Box>
                        <Flex color="brand.green" align="center" gap="2">
                            <Icon as={UtensilsCrossed} strokeWidth={2} />
                            <Heading fontSize="xl">Ingredientes</Heading>
                        </Flex>

                        <List pl="8" color="brand.text">
                            {recipe?.ingredients.map((ingredient) => (
                                <ListItem
                                    key={ingredient.ingredient}
                                    listStyleType="circle"
                                >
                                    {ingredient.amount} {ingredient.unitType} -{" "}
                                    {ingredient.ingredient}
                                </ListItem>
                            ))}
                        </List>
                    </Box>

                    <Box mt="6">
                        <Flex color="brand.green" align="center" gap="2">
                            <Icon as={Soup} />
                            <Heading fontSize="xl">Modo de preparo</Heading>
                        </Flex>

                        <Text color="brand.text">
                            {recipe?.preparationMethod}
                        </Text>
                    </Box>
                </Box>
            </Box>
        </>
    );
}
