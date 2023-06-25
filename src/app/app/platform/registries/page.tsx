"use client";

import {
    Box,
    Button,
    Card,
    CardBody,
    Flex,
    Heading,
    Icon,
    Stack,
    Text,
} from "@chakra-ui/react";
import { PersonStanding, UtensilsCrossed } from "lucide-react";
import Link from "next/link";

export default function RegistriesPage() {
    return (
        <Stack p="4" spacing="4">
            <Heading fontSize="2xl">
                Selecione o tipo de registros que deseja acessar
            </Heading>

            <Card>
                <CardBody>
                    <Box>
                        <Heading fontSize="xl">
                            Registros de dados coroporais
                        </Heading>
                        <Flex align="center" justify="space-between" gap="2">
                            <Box w="full" h="10rem">
                                <Icon
                                    as={PersonStanding}
                                    color="brand.green"
                                    size="55"
                                    w="full"
                                    h="full"
                                />
                            </Box>
                            <Text fontSize="sm" color="brand.text">
                                Registre medidas corporais importantes, como
                                peso, medidas e dados de saúde, para um
                                acompanhamento preciso. Mantenha-se informado e
                                avance em direção a uma vida mais saudável.
                            </Text>
                        </Flex>
                        <Button
                            as={Link}
                            href="/app/platform/registries/body"
                            w="full"
                            bg="brand.green"
                            color="brand.white"
                        >
                            Acessar registros
                        </Button>
                    </Box>
                </CardBody>
            </Card>

            <Card>
                <CardBody>
                    <Box>
                        <Heading fontSize="xl">Registros de refeições</Heading>
                        <Flex align="center" justify="space-between" gap="2">
                            <Box w="full" h="10rem">
                                <Icon
                                    as={UtensilsCrossed}
                                    color="brand.green"
                                    size="55"
                                    w="full"
                                    h="full"
                                />
                            </Box>
                            <Text fontSize="sm" color="brand.text">
                                A seção de registros de refeições permite que
                                você mantenha um diário alimentar completo.
                                Registre suas refeições para uma análise
                                detalhada e orientação personalizada de seu
                                nutricionista.
                            </Text>
                        </Flex>
                        <Button
                            as={Link}
                            href="/app/platform/registries/meal"
                            w="full"
                            bg="brand.green"
                            color="brand.white"
                        >
                            Acessar registros
                        </Button>
                    </Box>
                </CardBody>
            </Card>
        </Stack>
    );
}
