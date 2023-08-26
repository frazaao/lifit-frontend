"use client";

import PatientProfileDomain from "@/services/app/domain/patientProfiles/types/PatientProfileDomain";
import {
    Avatar,
    Button,
    Flex,
    Heading,
    Icon,
    IconButton,
    Stack,
    Text,
} from "@chakra-ui/react";
import { Calendar, Mail, MoreHorizontal, Phone, Send } from "lucide-react";
import useController from "./useController";

interface PatientProfileHeaderProps {
    patientProfile?: PatientProfileDomain;
}

export default function PatientProfileHeader({
    patientProfile,
}: PatientProfileHeaderProps) {
    const {} = useController();

    return (
        <>
            <Flex
                data-testid="PatientProfileHeader"
                w="full"
                maxH="170px"
                bg="center / cover no-repeat url(/images/patient-profile-header.jpeg)"
                position="relative"
                zIndex="1"
                align="center"
                px="120px"
                py="4"
                gap="10"
                _after={{
                    background:
                        "linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.44) 100%);",
                    content: "''",
                    position: "absolute",
                    inset: "0",
                    zIndex: "-1",
                    opacity: "0.8",
                }}
            >
                <Avatar
                    src={patientProfile?.user?.avatar}
                    size="2xl"
                    mb="-72px"
                />
                <Stack flex="1" w="100%" spacing="4">
                    <Flex justify="space-between">
                        <Heading color="brand.white">
                            {patientProfile?.user?.name}
                        </Heading>

                        <Flex gap="2">
                            <Button
                                color="brand.white"
                                bg="brand.green"
                                size="sm"
                                gap="1"
                                transition="all .2s ease-in-out"
                                _hover={{
                                    filter: "brightness(0.9)",
                                }}
                            >
                                Enviar mensagem <Icon as={Send} />
                            </Button>

                            <IconButton
                                aria-label="Mais opções"
                                variant="outline"
                                color="brand.white"
                                borderColor="brand.green"
                                size="sm"
                                transition="all .2s ease-in-out"
                                _hover={{
                                    bg: "brand.green",
                                }}
                            >
                                <Icon as={MoreHorizontal} />
                            </IconButton>
                        </Flex>
                    </Flex>

                    <Stack color="brand.white">
                        <Flex align="center" gap="1">
                            <Icon as={Mail} />
                            <Text>{patientProfile?.user?.email}</Text>
                        </Flex>

                        <Flex align="center" gap="1">
                            <Icon as={Phone} />
                            <Text>{patientProfile?.phoneNumber}</Text>
                        </Flex>

                        <Flex align="center" gap="1">
                            <Icon as={Calendar} />
                            <Text>
                                {new Date(
                                    patientProfile?.birthDate || ""
                                ).toLocaleDateString("pt-BR")}
                            </Text>
                        </Flex>
                    </Stack>
                </Stack>
            </Flex>
        </>
    );
}
