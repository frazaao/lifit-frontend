"use client";

import { Box, Flex, Heading, Spinner, Text, Image } from "@chakra-ui/react";
import useController from "./useController";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import MealTypesService from "@/services/app/domain/mealTypes/services/MealTypesService";
import _ from "lodash";

export default function RecipeSuggestion() {
    const {} = useController();

    const { data: mealTypes, isLoading } = useQuery({
        queryFn: MealTypesService.list,
        queryKey: ["ListMealTypes"],
    });

    const activeMealType =
        mealTypes?.find((mealType) => {
            const isAfterStartTime =
                new Date()
                    .toLocaleTimeString("pt-BR")
                    .localeCompare(mealType.startTime) === 1;

            const isBeforeEndTime =
                new Date()
                    .toLocaleTimeString("pt-BR")
                    .localeCompare(mealType.endTime) === -1;

            return isAfterStartTime && isBeforeEndTime;
        }) || mealTypes?.at(0);

    const suggestedRecipe = _.shuffle(activeMealType?.recipes)[0] || undefined;

    if (isLoading) {
        return (
            <Flex
                data-testid="RecipeSuggestion"
                position="relative"
                rounded="2xl"
                overflow="hidden"
                height="300px"
                width="full"
                shadow="base"
                align="center"
                justify="center"
                bg="brand.white"
            >
                <Spinner />
            </Flex>
        );
    }

    return (
        <>
            <Box
                as={Link}
                href={`/app/platform/menus/recipe/${suggestedRecipe?.id}`}
                data-testid="RecipeSuggestion"
                position="relative"
                rounded="2xl"
                overflow="hidden"
                height="300px"
                shadow="base"
            >
                <Image
                    src={suggestedRecipe?.imageUrl || "/Lifit.svg"}
                    alt="teste"
                    inset="0"
                    position="absolute"
                    zIndex="0"
                    objectFit="cover"
                    height="full"
                    width="full"
                />

                <Flex
                    position="absolute"
                    zIndex="2"
                    bg="linear-gradient(360deg, #000000 8.09%, rgba(0, 0, 0, 0) 48.82%)"
                    w="100%"
                    inset="0"
                    color="white"
                    direction="column"
                    justify="flex-end"
                    align="flex-end"
                >
                    <Heading px="4">Para o {activeMealType?.title}</Heading>
                    <Text px="4" pb="4" fontWeight="medium">
                        {suggestedRecipe?.title}
                    </Text>
                </Flex>
            </Box>
        </>
    );
}
