"use client";

import { Box, Button, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { Gauge, MoveVertical, PersonStanding } from "lucide-react";
import Link from "next/link";

import useController from "./useController";

interface BodyRegistryCardProps {
    date?: Date;
    href?: string;
    bodyMassIndex?: number | string;
    height?: number | string;
    weight?: number | string;
}

export default function BodyRegistryCard({
    date = new Date(),
    href = "#",
    bodyMassIndex = 0,
    height = 0,
    weight = 0,
}: BodyRegistryCardProps) {
    const {} = useController();

    return (
        <>
            <Box
                data-testid="BodyRegistryCard"
                border="1px"
                rounded="lg"
                borderColor="brand.background"
                px="4"
                py="2"
            >
                <Flex align="center" justify="space-between">
                    <Heading fontSize="md">
                        {date.toLocaleDateString("pt-BR")}
                    </Heading>

                    <Button
                        as={Link}
                        href={href}
                        size="sm"
                        bg="brand.purple"
                        color="brand.white"
                    >
                        Ver registro
                    </Button>
                </Flex>

                <Flex align="center" justify="space-between" mt="2">
                    <Flex align="center">
                        <Icon as={PersonStanding} color="brand.purple" />
                        <Text fontSize="sm" color="brand.text">
                            {bodyMassIndex}
                        </Text>
                    </Flex>

                    <Flex align="center">
                        <Icon as={MoveVertical} color="brand.purple" />
                        <Text fontSize="sm" color="brand.text">
                            {height}m
                        </Text>
                    </Flex>

                    <Flex align="center">
                        <Icon as={Gauge} color="brand.purple" />
                        <Text fontSize="sm" color="brand.text">
                            {weight}kg
                        </Text>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}
