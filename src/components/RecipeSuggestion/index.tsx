"use client";

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import useController from "./useController";
import Link from "next/link";
import Image from "next/image";

export default function RecipeSuggestion() {
    const {} = useController();

    return (
        <>
            <Box
                as={Link}
                href="/app/platform/recipes/1"
                data-testid="RecipeSuggestion"
                position="relative"
                rounded="2xl"
                overflow="hidden"
                height="300px"
                shadow="base"
            >
                <Image
                    // position="absolute"
                    // inset="0"
                    src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1453&q=80"
                    alt="teste"
                    // zIndex="0"
                    // objectFit="cover"
                    height={300}
                    width={400}
                    style={{
                        inset: 0,
                        position: "absolute",
                        zIndex: 0,
                        objectFit: "cover",
                        height: "100%",
                        width: "100%",
                    }}
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
                    <Heading pr="4">Para o café da manhã</Heading>
                    <Text pr="4" pb="4" fontWeight="medium">
                        Ovos mechidos com requeijão
                    </Text>
                </Flex>
            </Box>
        </>
    );
}
