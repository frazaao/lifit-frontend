import BodyRegistriesService from "@/services/app/domain/bodyRegistries/services/BodyRegistriesService";
import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerOverlay,
    Flex,
    Heading,
    Spinner,
    Stack,
    Text,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

interface ShowBodyRegistryProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ShowBodyRegistry({
    isOpen = false,
    onClose = () => {},
}: ShowBodyRegistryProps) {
    const params = useSearchParams();

    const registryId = params.get("id");
    const { data: registry } = useQuery({
        queryKey: ["ShowBodyRegistry", registryId],
        queryFn: () => BodyRegistriesService.find(registryId || ""),
    });

    return (
        <>
            <Drawer isOpen={isOpen} onClose={onClose} placement="bottom">
                <DrawerOverlay />

                <DrawerContent shadow="dark-lg">
                    <DrawerBody>
                        <Box pt="4">
                            <Flex align="center" justify="space-between" pb="8">
                                <Flex direction="column" align="flex-start">
                                    <Heading fontSize="xl">
                                        Registro de dados corporais
                                    </Heading>
                                    {registry?.registryDate && (
                                        <Text fontSize="sm" color="brand.text">
                                            {new Date(
                                                registry?.registryDate
                                            ).toLocaleDateString("pt-BR")}
                                        </Text>
                                    )}
                                </Flex>
                                <Button
                                    variant="outline"
                                    borderColor="brand.red"
                                    color="brand.red"
                                    size="sm"
                                    onClick={onClose}
                                >
                                    Fechar
                                </Button>
                            </Flex>

                            <Stack spacing="8" pb="10">
                                <Flex gap="3" align="center">
                                    <Box flex="1">
                                        <Heading fontSize="md">Peso</Heading>
                                        <Text fontSize="sm" color="brand.text">
                                            {registry?.weight || "-"}
                                        </Text>
                                    </Box>

                                    <Box flex="1">
                                        <Heading fontSize="md">Altura</Heading>
                                        <Text fontSize="sm" color="brand.text">
                                            {registry?.height || "-"}
                                        </Text>
                                    </Box>
                                </Flex>

                                <Flex gap="3" align="center">
                                    <Box flex="1">
                                        <Heading fontSize="md">
                                            Pressão arterial
                                        </Heading>
                                        <Text fontSize="sm" color="brand.text">
                                            {registry?.arterialPressure || "-"}
                                        </Text>
                                    </Box>

                                    <Box flex="1">
                                        <Heading fontSize="md">
                                            Glicemia
                                        </Heading>
                                        <Text fontSize="sm" color="brand.text">
                                            {registry?.glycemia || "-"}
                                        </Text>
                                    </Box>
                                </Flex>

                                <Flex gap="3" align="center">
                                    <Box flex="1">
                                        <Heading fontSize="md">
                                            Colesterol
                                        </Heading>
                                        <Text fontSize="sm" color="brand.text">
                                            {registry?.cholesterol || "-"}
                                        </Text>
                                    </Box>

                                    <Box flex="1">
                                        <Heading fontSize="md">
                                            Triglicerídeos
                                        </Heading>
                                        <Text fontSize="sm" color="brand.text">
                                            {registry?.triglycerides || "-"}
                                        </Text>
                                    </Box>
                                </Flex>

                                <Flex gap="3" align="center">
                                    <Box flex="1">
                                        <Heading fontSize="md">
                                            Circunferência do quadril
                                        </Heading>
                                        <Text fontSize="sm" color="brand.text">
                                            {registry?.hipCircunference || "-"}
                                        </Text>
                                    </Box>

                                    <Box flex="1">
                                        <Heading fontSize="md">
                                            Circunferência do abdômen
                                        </Heading>
                                        <Text fontSize="sm" color="brand.text">
                                            {registry?.abdomenCircunference ||
                                                "-"}
                                        </Text>
                                    </Box>
                                </Flex>
                                <Flex gap="3" align="center">
                                    <Box flex="1">
                                        <Heading fontSize="md">
                                            Medicamentos em uso
                                        </Heading>
                                        <Text fontSize="sm" color="brand.text">
                                            {registry?.medicationsInUse || "-"}
                                        </Text>
                                    </Box>

                                    <Box flex="1">
                                        <Heading fontSize="md">IMC</Heading>
                                        <Text fontSize="sm" color="brand.text">
                                            {registry?.bodyMassIndex?.toFixed(
                                                2
                                            ) || "-"}
                                        </Text>
                                    </Box>
                                </Flex>
                            </Stack>
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
}
