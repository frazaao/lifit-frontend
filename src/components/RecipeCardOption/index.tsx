import RecipeDomain from "@/services/app/domain/recipes/types/RecipeDomain";
import {
    Box,
    Button,
    Flex,
    Heading,
    Icon,
    Image,
    Text,
} from "@chakra-ui/react";
import { Check, CheckCircle, CheckCircle2, Flame } from "lucide-react";

interface RecipeCardOptionProps {
    recipe?: RecipeDomain;
    isSelected?: boolean;
    onSelect?: (recipeId: number | null) => void;
}

export default function RecipeCardOption({
    recipe,
    isSelected = false,
    onSelect = () => {},
}: RecipeCardOptionProps) {
    return (
        <>
            <Box
                data-testid="RecipeCardOption"
                as={Button}
                variant="unstyled"
                whiteSpace="normal"
                shadow="base"
                rounded="lg"
                overflow="hidden"
                h="190px"
                w="148px"
                flexShrink="0"
                onClick={() => onSelect(recipe?.id || null)}
                {...(isSelected && {
                    borderWidth: "3px",
                    borderColor: "brand.green",
                })}
                position="relative"
            >
                {isSelected && (
                    <Icon
                        as={Check}
                        bg="brand.green"
                        rounded="full"
                        color="brand.white"
                        position="absolute"
                        top="2"
                        right="2"
                        p="1"
                        w="8"
                        h="8"
                    />
                )}
                {recipe ? (
                    <>
                        <Image
                            src={recipe.imageUrl}
                            alt={recipe.title}
                            w="full"
                            h="94px"
                            objectFit="cover"
                        />

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
                                <Icon
                                    as={Flame}
                                    color="brand.red"
                                    strokeWidth={3}
                                />
                                <Text color="brand.text" fontWeight="bold">
                                    {recipe.calories} kcal
                                </Text>
                            </Flex>
                        </Flex>
                    </>
                ) : (
                    <Flex
                        align="center"
                        justify="center"
                        h="full"
                        w="full"
                        bg="linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)),url(/images/no-recipe-image.png)"
                    >
                        <Heading
                            fontSize="xl"
                            textAlign="center"
                            color="brand.white"
                        >
                            Não informar receita
                        </Heading>
                    </Flex>
                )}
            </Box>
        </>
    );
}
