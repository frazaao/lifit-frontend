"use client";

import RecipeCard from "@/components/RecipeCard";
import MealTypesService from "@/services/app/domain/mealTypes/services/MealTypesService";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

export default function MenusPage() {
    const { data: mealTypes } = useQuery({
        queryFn: MealTypesService.list,
        queryKey: ["MealTypesList"],
    });

    return (
        <>
            {mealTypes?.map((mealType) => (
                <Box key={mealType.id} p="4" pb="0" pr="0">
                    <Heading color="brand.green">{mealType.title}</Heading>
                    <Flex overflowX="auto" w="full" h="full" gap="3" pb="3">
                        {mealType.recipes?.map((recipe) => (
                            <RecipeCard
                                key={recipe.id}
                                recipe={recipe}
                                href={`/app/platform/menus/recipe/${recipe.id}`}
                            />
                        ))}
                    </Flex>
                </Box>
            ))}
        </>
    );
}
