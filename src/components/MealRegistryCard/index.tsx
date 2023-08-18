import MealTypeDomain from "@/services/app/domain/mealTypes/types/MealTypeDomain";
import RecipeDomain from "@/services/app/domain/recipes/types/RecipeDomain";
import {
    Box,
    Button,
    Flex,
    Heading,
    Icon,
    Image,
    Stack,
    Text,
} from "@chakra-ui/react";
import {
    Calendar,
    CalendarDays,
    Clock4,
    Flame,
    Gauge,
    Utensils,
    Watch,
} from "lucide-react";
import Link from "next/link";
import useController from "./useController";

interface MealRegistryCardProps {
    recipe?: RecipeDomain;
    createdAt: Date;
    weight: number;
    mealType: MealTypeDomain;
    onClick?: () => void;
}

export default function MealRegistryCard({
    recipe,
    createdAt = new Date(),
    weight = 0,
    mealType,
    onClick = () => {},
}: MealRegistryCardProps) {
    const {} = useController();

    return (
        <>
            <Box
                data-testid="MealRegistryCard"
                h="220px"
                overflow="hidden"
                border="1px"
                borderColor="brand.background"
                rounded="lg"
                px="6"
                py="4"
            >
                <Flex gap="6" align="stretch" h="full">
                    <Box flex="1" shadow="base" rounded="lg" overflow="hidden">
                        {recipe ? (
                            <>
                                {recipe.imageUrl && (
                                    <Image
                                        src={recipe.imageUrl}
                                        alt={recipe.title}
                                        w="full"
                                        h="94px"
                                        objectFit="cover"
                                    />
                                )}

                                <Flex
                                    px="4"
                                    pt="2"
                                    pb="3"
                                    direction="column"
                                    justify="space-between"
                                    gap="2"
                                >
                                    <Heading
                                        fontSize="md"
                                        overflow="hidden"
                                        maxH="40px"
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
                                    >
                                        <Icon
                                            as={Flame}
                                            color="brand.red"
                                            strokeWidth={3}
                                        />
                                        <Text
                                            color="brand.text"
                                            fontWeight="bold"
                                        >
                                            {recipe?.calories} kcal
                                        </Text>
                                    </Flex>
                                </Flex>
                            </>
                        ) : (
                            <Flex
                                w="full"
                                h="full"
                                align="center"
                                justify="center"
                                bg="linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)),url(/images/no-recipe-image.png)"
                            >
                                <Heading
                                    fontSize="md"
                                    textAlign="center"
                                    color="brand.white"
                                >
                                    Sem receita informada
                                </Heading>
                            </Flex>
                        )}
                    </Box>

                    <Flex
                        direction="column"
                        flex="1"
                        fontSize="sm"
                        justify="space-between"
                    >
                        <Stack>
                            <Flex align="center" justify="flex-start" gap="2">
                                <Icon as={CalendarDays} />
                                <Text>
                                    {createdAt.toLocaleDateString("pt-BR")}
                                </Text>
                            </Flex>

                            <Flex align="center" justify="flex-start" gap="2">
                                <Icon as={Clock4} />
                                <Text>
                                    {createdAt.toLocaleTimeString("pt-BR")}
                                </Text>
                            </Flex>

                            <Flex align="center" justify="flex-start" gap="2">
                                <Icon as={Gauge} />
                                <Text>{weight}</Text>
                            </Flex>

                            <Flex align="center" justify="flex-start" gap="2">
                                <Icon as={Utensils} />
                                <Text>{mealType.title}</Text>
                            </Flex>
                        </Stack>

                        <Button
                            onClick={onClick}
                            size="sm"
                            bg="brand.purple"
                            color="brand.white"
                        >
                            Ver registro
                        </Button>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}
