import {
    Flex,
    Icon,
    Stack,
    Heading,
    Text,
    Button,
    CircularProgress,
    Box,
    CircularProgressLabel,
} from "@chakra-ui/react";
import useController from "./useController";
import Link from "next/link";

interface GamificationWidgetProps {
    value: number;
    valueLabel: string;
    missingAmount: number;
    experienceAmount: number;
    title: string;
    href: string;
}

export default function GamificationWidget({
    value = 0,
    valueLabel = "0",
    missingAmount = 0,
    experienceAmount = 0,
    title = "",
    href = "",
}: GamificationWidgetProps) {
    const {} = useController();

    return (
        <>
            <Flex
                data-testid="GamificationWidget"
                bg="brand.white"
                px="6"
                py="4"
                align="center"
                gap="3"
                rounded="lg"
                shadow="base"
            >
                <Box position="relative" w="70px" h="70px">
                    <CircularProgress
                        size="70px"
                        value={value}
                        color="brand.green"
                        position="absolute"
                        inset="0"
                    />
                    <CircularProgressLabel
                        fontSize="xl"
                        color="brand.text"
                        zIndex="1"
                    >
                        {valueLabel}
                    </CircularProgressLabel>
                </Box>

                <Stack flex="1" spacing="1">
                    <Heading as="h3" size="md" color="brand.heading">
                        {title}
                    </Heading>
                    <Text fontSize="sm" color="brand.text" fontWeight="medium">
                        <Text as="span" color="brand.green" fontWeight="bold">
                            +{missingAmount}
                        </Text>{" "}
                        registro para ganhar{" "}
                        <Text as="span" color="brand.green" fontWeight="bold">
                            +{experienceAmount}
                        </Text>{" "}
                        de experiência
                    </Text>
                    <Button
                        as={Link}
                        href={href}
                        size="sm"
                        w="full"
                        bg="brand.green"
                        _hover={{ brightness: "0.85" }}
                        _focus={{ brightness: "0.85" }}
                        color="white"
                        letterSpacing="0.65px"
                    >
                        Fazer registro
                    </Button>
                </Stack>
            </Flex>
        </>
    );
}
