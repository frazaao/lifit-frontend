"use client";

import useAuth from "@/hooks/useAuth";
import PatientProfilesService from "@/services/app/domain/patientProfiles/services/PatientProfilesService";
import {
    Avatar,
    Box,
    Button,
    Drawer,
    DrawerContent,
    DrawerOverlay,
    Flex,
    Heading,
    Icon,
    Spinner,
    Stack,
    Text,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { Calendar, Mail, Phone } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import EditProfile from "./edit";

export default function ProfilePage() {
    const { user } = useAuth();

    const {
        data: patientProfile,
        isLoading,
        refetch: refetchPatientProfile,
    } = useQuery({
        queryFn: PatientProfilesService.findMyProfile,
        queryKey: ["PatientProfileFindMyProfile"],
    });

    const [editProfileDrawerIsOpen, setEditProfileDrawerIdOpen] =
        useState(false);

    if (isLoading) {
        return (
            <Flex h="100%" w="100%" align="center" justify="center">
                <Spinner />
            </Flex>
        );
    }

    return (
        <>
            <Drawer
                isOpen={editProfileDrawerIsOpen}
                placement="bottom"
                onClose={() => setEditProfileDrawerIdOpen(false)}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <EditProfile
                        onClose={() => setEditProfileDrawerIdOpen(false)}
                        user={user!}
                        patientProfile={patientProfile}
                        refetch={refetchPatientProfile}
                    />
                </DrawerContent>
            </Drawer>
            <Stack px="10" spacing="2" py="10">
                <Flex justify="space-between" align="center">
                    <Heading fontSize="lg">Meu perfil</Heading>

                    <Button
                        color="white"
                        bg="brand.green"
                        size="sm"
                        onClick={() => setEditProfileDrawerIdOpen(true)}
                    >
                        Editar
                    </Button>
                </Flex>

                <Stack align="center" spacing="0" gap="1">
                    <Avatar size="2xl" name={user?.name} src={user?.avatar} />

                    <Heading fontSize="md">{user?.name}</Heading>

                    <Box as="hr" w="30px" borderColor="gray.400" />

                    <Flex align="center" gap="1" color="brand.text">
                        <Icon as={Mail} />
                        <Text fontSize="xs">{user?.email}</Text>
                    </Flex>

                    <Flex align="center" gap="1" color="brand.text">
                        <Icon as={Phone} />
                        <Text fontSize="xs">{patientProfile?.phoneNumber}</Text>
                    </Flex>

                    <Flex align="center" gap="1" color="brand.text">
                        <Icon as={Calendar} />
                        <Text fontSize="xs">
                            {new Date(
                                patientProfile?.birthDate?.toString() || ""
                            ).toLocaleDateString("pt-BR")}
                        </Text>
                    </Flex>
                </Stack>

                <Stack spacing="4">
                    <Stack>
                        <Heading fontSize="sm">Alergias</Heading>
                        <Text fontSize="xs" color="brand.text">
                            {patientProfile?.allergies || "Sem alergias"}
                        </Text>
                    </Stack>

                    <Stack>
                        <Heading fontSize="sm">Aversões</Heading>
                        <Text fontSize="xs" color="brand.text">
                            {patientProfile?.aversions || "Sem aversões"}
                        </Text>
                    </Stack>

                    <Stack>
                        <Heading fontSize="sm">Preferências</Heading>
                        <Text fontSize="xs" color="brand.text">
                            {patientProfile?.preferences || "Sem preferências"}
                        </Text>
                    </Stack>

                    <Stack>
                        <Heading fontSize="sm">Doenças de saúde</Heading>
                        <Text fontSize="xs" color="brand.text">
                            {patientProfile?.healthDeseases ||
                                "Sem doenças de saúde"}
                        </Text>
                    </Stack>

                    <Stack>
                        <Heading fontSize="sm">Comentários adicionais</Heading>
                        <Text fontSize="xs" color="brand.text">
                            {patientProfile?.additionalComments ||
                                "Sem comentários adicionais"}
                        </Text>
                    </Stack>

                    <Stack>
                        <Heading fontSize="sm">Objetivo da dieta</Heading>
                        <Text fontSize="xs" color="brand.text">
                            {patientProfile?.dietObjective ||
                                "Sem objetivo da dieta"}
                        </Text>
                    </Stack>

                    <Stack>
                        <Heading fontSize="sm">Alterar senha</Heading>
                        <Text fontSize="xs" color="brand.text">
                            Se por algum motivo você deseja alterar a sua senha,
                            basta clicar no botão abaixo e seguir os passos
                        </Text>
                    </Stack>

                    <Button color="white" bg="brand.green">
                        Alterar minha senha
                    </Button>

                    <Button
                        variant="outline"
                        color="brand.red"
                        borderColor="brand.red"
                    >
                        Sair da minha conta
                    </Button>
                </Stack>
            </Stack>
        </>
    );
}
