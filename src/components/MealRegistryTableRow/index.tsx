import MealRegistryDomain from "@/services/app/domain/mealRegistries/types/MealRegistryDomain";
import useController from "./useController";
import {
    Calendar,
    Clock3,
    Gauge,
    MoveVertical,
    PersonStanding,
    Utensils,
} from "lucide-react";
import { Button, Flex, Icon, Image, Td, Text, Tr } from "@chakra-ui/react";
import Link from "next/link";

interface MealRegistryTableRowProps {
    registry: MealRegistryDomain;
    href?: string;
}

export default function MealRegistryTableRow({
    registry,
    href = "#",
}: MealRegistryTableRowProps) {
    const {} = useController();

    return (
        <>
            <Tr
                data-testid="MealRegistryTableRow"
                rounded="lg"
                border="1px solid"
                borderColor="brand.background"
            >
                <Td
                    border="inherit"
                    rounded="inherit"
                    borderRight="none"
                    borderRightRadius="none"
                    px="3"
                >
                    #{registry.id}
                </Td>
                <Td
                    px="3"
                    border="inherit"
                    borderRight="none"
                    borderLeft="none"
                    maxW="200px"
                    display="flex"
                    alignItems="center"
                    gap="1"
                    overflow="hidden"
                    textOverflow="ellipsis"
                >
                    <Image
                        src={
                            registry.recipe?.imageUrl ||
                            "/images/no-recipe-image.png"
                        }
                        alt={registry.recipe?.title}
                        w="40px"
                        h="40px"
                        objectFit="cover"
                        rounded="lg"
                        {...(!registry.recipe?.imageUrl && {
                            filter: "brightness(0.3)",
                        })}
                    />

                    <Text
                        wordBreak="break-all"
                        whiteSpace="nowrap"
                        overflow="hidden"
                        textOverflow="ellipsis"
                    >
                        {registry.recipe?.title || "Sem receita informada"}
                    </Text>
                </Td>

                <Td
                    px="3"
                    border="inherit"
                    borderRight="none"
                    borderLeft="none"
                >
                    <Flex align="center" gap="1">
                        <Icon as={Calendar} />
                        <Text>
                            {new Date(registry.date || "").toLocaleDateString(
                                "pt-BR"
                            )}
                        </Text>
                    </Flex>
                </Td>

                <Td
                    px="3"
                    border="inherit"
                    borderRight="none"
                    borderLeft="none"
                >
                    <Flex align="center" gap="1">
                        <Icon as={Clock3} />
                        <Text>{registry.time.slice(0, 5)}</Text>
                    </Flex>
                </Td>

                <Td
                    px="3"
                    border="inherit"
                    borderRight="none"
                    borderLeft="none"
                >
                    <Flex align="center" gap="1">
                        <Icon as={Gauge} />
                        <Text>{registry.weight}g</Text>
                    </Flex>
                </Td>

                <Td
                    px="3"
                    border="inherit"
                    borderRight="none"
                    borderLeft="none"
                >
                    <Flex align="center" gap="1">
                        <Icon as={Utensils} />
                        <Text>{registry.mealType?.title}</Text>
                    </Flex>
                </Td>

                <Td
                    px="3"
                    border="inherit"
                    borderRadius="inherit"
                    borderLeft="none"
                    borderLeftRadius="none"
                >
                    <Button
                        color="brand.white"
                        bg="brand.purple"
                        as={Link}
                        href={href}
                        _hover={{
                            filter: "brightness(0.9)",
                        }}
                    >
                        Ver registro
                    </Button>
                </Td>
            </Tr>
        </>
    );
}
