"use client";

import RecipeDomain from "@/services/app/domain/recipes/types/RecipeDomain";
import {
    Box,
    Card,
    CardBody,
    Flex,
    Heading,
    Icon,
    Text,
} from "@chakra-ui/react";
import { ChevronRight, Flame } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import useController from "./useController";

interface RecipeCardProps {
    recipe: RecipeDomain;
    href?: string;
}

export default function RecipeCard({ recipe, href = "#" }: RecipeCardProps) {
    // const {} = useController();

    return (
        <>
            <Card
                data-testid="RecipeCard"
                w="140px"
                h="210px"
                minW="140px"
                rounded="lg"
                overflow="hidden"
            >
                {recipe.imageUrl && (
                    <Image
                        src={recipe.imageUrl}
                        alt={recipe.title}
                        width={200}
                        height={200}
                    />
                )}
                <CardBody
                    py="2"
                    px="3"
                    w="full"
                    h="full"
                    display="flex"
                    flexDirection="column"
                    gap="1"
                >
                    <Heading
                        fontSize="md"
                        overflow="hidden"
                        maxH="40px"
                        textOverflow="ellipsis"
                    >
                        {recipe.title}
                    </Heading>
                    <Flex
                        borderRadius="lg"
                        w="full"
                        align="center"
                        justify="center"
                        border="1px"
                        borderColor="rgba(0,0,0,0.2)"
                    >
                        <Icon as={Flame} color="brand.red" strokeWidth={3} />
                        <Text color="brand.text" fontWeight="bold">
                            {recipe.calories} kcal
                        </Text>
                    </Flex>

                    <Flex
                        color="brand.green"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Text
                            as={Link}
                            href={href}
                            display="flex"
                            fontSize="sm"
                        >
                            Acessar receita
                        </Text>
                        <Icon as={ChevronRight} />
                    </Flex>
                </CardBody>
            </Card>
        </>
    );
}
