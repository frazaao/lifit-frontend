"use client";

import Logo from "@/components/Logo";
import ReceptionSlider from "@/components/ReceptionSlider";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

const carouselItems = [
    {
        image: "/images/eating-food.svg",
        title: "Se alimente bem",
        description:
            "Acesse receitas prontas que melhor se adaptam ao seu dia a dia.",
    },
    {
        image: "/images/running.svg",
        title: "Tenha hábitos saudáveis",
        description:
            "Alertas dinâmicos para te lembrar diariamente de hábitos saudáveis.",
    },
    {
        image: "/images/medical.svg",
        title: "Acompanhamento médico",
        description:
            "Tenha o acompanhamento de perto de um especialista na área.",
    },
];

export default function AppPage() {
    return (
        <>
            <Flex
                direction="column"
                justify="space-between"
                align="center"
                w="full"
                h="100vh"
                px="10"
                py="20"
            >
                <Box mb="12">
                    <Logo />
                </Box>

                <ReceptionSlider items={carouselItems} />

                <Text
                    as={Link}
                    display="block"
                    w="full"
                    mt="8"
                    href="/app/register"
                >
                    <Button
                        w="full"
                        h="16"
                        fontSize="xl"
                        bg="brand.green"
                        color="brand.white"
                    >
                        Criar uma conta
                    </Button>
                </Text>

                <Box mt="2" fontSize="lg">
                    Já possui uma conta?
                    <Text
                        as={Link}
                        color="brand.purple"
                        fontWeight="bold"
                        ml="1"
                        href="/app/login"
                    >
                        Fazer login
                    </Text>
                </Box>
            </Flex>
        </>
    );
}
