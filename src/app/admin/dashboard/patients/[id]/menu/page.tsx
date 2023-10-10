"use client";

import RecipeCardOption from "@/components/RecipeCardOption";
import MenusService from "@/services/app/domain/menus/services/MenusService";
import RecipeDomain from "@/services/app/domain/recipes/types/RecipeDomain";
import {
    Button,
    Card,
    CardBody,
    Flex,
    Heading,
    Icon,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Spinner,
    Stack,
    Text,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { Edit2, MoreHorizontal } from "lucide-react";
import Link from "next/link";

interface MenuPageProps {
    params: {
        id: string;
    };
}

interface RecipeByMealType {
    [key: string]: RecipeDomain[];
}

export default function MenuPage({ params }: MenuPageProps) {
    const { data: menu, isLoading } = useQuery({
        queryFn: () => MenusService.findByPatientProfileId(params.id),
        queryKey: ["MenusByPatientProfileId", params.id],
    });

    const recipesByMealType = menu?.recipes?.reduce<
        RecipeByMealType | undefined
    >((acc, item) => {
        if (!item.mealType?.title || !acc) {
            return acc;
        }
        if (acc[item.mealType?.title]) {
            acc[item.mealType?.title].push(item);
            return acc;
        }
        acc[item.mealType?.title] = [item];
        return acc;
    }, {});

    if (isLoading) {
        return (
            <>
                <Flex align="center" justify="center" p="8">
                    <Spinner />
                </Flex>
            </>
        );
    }

    return (
        <>
            <Flex align="center" justify="center" p="8">
                <Card w="full" maxW="900px" size="lg">
                    <CardBody>
                        <Flex align="center" justify="space-between">
                            <Heading fontSize="xl">
                                Cardápio #{menu?.id} associado à esse paciente
                            </Heading>

                            <Flex>
                                <Button
                                    as={Link}
                                    // TODO: Assotiate the correct link to edit the menu
                                    href="#"
                                    alignItems="center"
                                    variant="ghost"
                                    color="brand.purple"
                                    gap="1"
                                    _hover={{
                                        bg: "brand.background",
                                    }}
                                >
                                    <Text>Editar</Text>
                                    <Icon as={Edit2} />
                                </Button>

                                {/* <Menu>
                                    <MenuButton
                                        _hover={{
                                            color: "brand.purple",
                                            bg: "brand.background",
                                        }}
                                        rounded="md"
                                    >
                                        <IconButton
                                            aria-label="Mais opções"
                                            variant="ghost"
                                        >
                                            <Icon as={MoreHorizontal} />
                                        </IconButton>
                                    </MenuButton>

                                    <MenuList>
                                        <MenuItem>Teste</MenuItem>
                                    </MenuList>
                                </Menu> */}
                            </Flex>
                        </Flex>

                        <Stack spacing="4" mt="4">
                            {recipesByMealType &&
                                Object.keys(recipesByMealType).map(
                                    (mealType) => (
                                        <Stack
                                            key={mealType}
                                            spacing="2"
                                            border="1px"
                                            borderColor="brand.gray"
                                            p="4"
                                            rounded="md"
                                        >
                                            <Heading
                                                color="brand.heading"
                                                fontSize="md"
                                            >
                                                Refeição:{" "}
                                                <Text
                                                    as="span"
                                                    fontWeight="normal"
                                                    color="brand.text"
                                                >
                                                    {mealType}
                                                </Text>
                                            </Heading>

                                            <Flex gap="6">
                                                {recipesByMealType[
                                                    mealType
                                                ].map((recipe) => (
                                                    <RecipeCardOption
                                                        key={recipe.id}
                                                        recipe={recipe}
                                                    />
                                                ))}
                                            </Flex>
                                        </Stack>
                                    )
                                )}
                        </Stack>
                    </CardBody>
                </Card>
            </Flex>
        </>
    );
}
