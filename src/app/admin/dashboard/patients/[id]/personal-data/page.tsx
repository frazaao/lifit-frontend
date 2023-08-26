"use client";

import PatientProfilesService from "@/services/app/domain/patientProfiles/services/PatientProfilesService";
import {
    Box,
    Card,
    CardBody,
    Flex,
    Heading,
    Stack,
    Text,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

interface PersonalDataPageProps {
    params: {
        id: string;
    };
}

export default function PersonalDataPage({ params }: PersonalDataPageProps) {
    const { data: patient } = useQuery({
        queryFn: () => PatientProfilesService.find(params.id),
        queryKey: ["FindPatient", params.id],
    });

    return (
        <Flex align="center" justify="center" p="8">
            <Card w="full" maxW="900px" size="lg">
                <CardBody>
                    <Stack spacing="8">
                        <Flex w="full">
                            <Box flex="1">
                                <Heading color="brand.heading" fontSize="md">
                                    Gênero
                                </Heading>
                                <Text color="brand.text" fontSize="sm">
                                    {patient?.gender === "FEMININO"
                                        ? "Feminino"
                                        : "Masculino"}
                                </Text>
                            </Box>

                            <Box flex="1">
                                <Heading color="brand.heading" fontSize="md">
                                    Objetivo da dieta
                                </Heading>
                                <Text color="brand.text" fontSize="sm">
                                    {patient?.dietObjective || "-"}
                                </Text>
                            </Box>
                        </Flex>

                        <Flex w="full">
                            <Box flex="1">
                                <Heading color="brand.heading" fontSize="md">
                                    Alergias
                                </Heading>
                                <Text color="brand.text" fontSize="sm">
                                    {patient?.allergies || "-"}
                                </Text>
                            </Box>

                            <Box flex="1">
                                <Heading color="brand.heading" fontSize="md">
                                    Aversões
                                </Heading>
                                <Text color="brand.text" fontSize="sm">
                                    {patient?.aversions || "-"}
                                </Text>
                            </Box>
                        </Flex>

                        <Flex w="full">
                            <Box flex="1">
                                <Heading color="brand.heading" fontSize="md">
                                    Preferências
                                </Heading>
                                <Text color="brand.text" fontSize="sm">
                                    {patient?.preferences || "-"}
                                </Text>
                            </Box>

                            <Box flex="1">
                                <Heading color="brand.heading" fontSize="md">
                                    Doenças de saúde
                                </Heading>
                                <Text color="brand.text" fontSize="sm">
                                    {patient?.healthDeseases || "-"}
                                </Text>
                            </Box>
                        </Flex>

                        <Flex w="full">
                            <Box flex="1">
                                <Heading color="brand.heading" fontSize="md">
                                    Comentários adicionais
                                </Heading>
                                <Text color="brand.text" fontSize="sm">
                                    {patient?.additionalComments || "-"}
                                </Text>
                            </Box>
                        </Flex>
                    </Stack>
                </CardBody>
            </Card>
        </Flex>
    );
}
