import FormControl from "@/components/FormControl";
import patientProfileZodSchema, {
    PatientProfileZodSchema,
} from "@/services/app/domain/patientProfiles/schemas/PatientProfileZodSchema";
import PatientProfilesService from "@/services/app/domain/patientProfiles/services/PatientProfilesService";
import PatientProfileDomain from "@/services/app/domain/patientProfiles/types/PatientProfileDomain";
import UserDomain from "@/services/app/domain/users/types/UserDomain";
import {
    Avatar,
    Button,
    Flex,
    Heading,
    Input,
    Stack,
    Textarea,
    useToast,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";

interface EditProfileProps {
    user?: UserDomain;
    patientProfile?: PatientProfileDomain;
    onClose: () => void;
    refetch: () => void;
}

export default function EditProfile({
    user = undefined,
    patientProfile = undefined,
    onClose,
    refetch,
}: EditProfileProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<PatientProfileZodSchema>({
        resolver: zodResolver(patientProfileZodSchema),
        defaultValues: patientProfile,
    });

    const toast = useToast();

    async function handleForm(values: PatientProfileZodSchema) {
        try {
            await PatientProfilesService.updateMyProfile(values);
            toast({
                title: "Perfil atualizado com sucesso",
                status: "success",
                position: "top-right",
            });
            refetch();
            onClose();
        } catch (e) {
            if (e instanceof AxiosError && e.response?.status === 422) {
                if (e.response?.data.errors.allergies) {
                    setError("allergies", {
                        message: e.response?.data.errors.allergies[0],
                    });
                }

                if (e.response?.data.errors.aversions) {
                    setError("aversions", {
                        message: e.response?.data.errors.aversions[0],
                    });
                }

                if (e.response?.data.errors.preferences) {
                    setError("preferences", {
                        message: e.response?.data.errors.preferences[0],
                    });
                }

                if (e.response?.data.errors.health_deseases) {
                    setError("healthDeseases", {
                        message: e.response?.data.errors.health_deseases[0],
                    });
                }

                if (e.response?.data.errors.additional_comments) {
                    setError("additionalComments", {
                        message: e.response?.data.errors.additional_comments[0],
                    });
                }

                if (e.response?.data.errors.diet_objective) {
                    setError("dietObjective", {
                        message: e.response?.data.errors.diet_objective[0],
                    });
                }
            } else {
                toast({
                    title: "Erro ao atualizar perfil.",
                    description:
                        "Tente novamente, caso o erro persista, entre em contato com a equipe de suporte.",
                    status: "error",
                    position: "top-right",
                });
            }
        }
    }

    return (
        <>
            <Stack
                as="form"
                onSubmit={handleSubmit(handleForm)}
                px="10"
                spacing="2"
                py="10"
                overflowY="auto"
                maxH="90vh"
            >
                <Flex justify="space-between" align="center">
                    <Heading fontSize="lg">Meu perfil</Heading>

                    <Button
                        color="brand.red"
                        borderColor="brand.red"
                        variant="outline"
                        size="sm"
                        onClick={onClose}
                    >
                        Cancelar
                    </Button>
                </Flex>

                <Stack align="center" spacing="0" gap="1">
                    <Avatar size="2xl" name={user?.name} src={user?.avatar} />
                </Stack>

                <Input {...register("userId")} type="hidden" />

                <Stack spacing="4">
                    <Stack>
                        <FormControl
                            label="Alergias"
                            error={errors.allergies?.message}
                        >
                            <Input {...register("allergies")} />
                        </FormControl>
                    </Stack>

                    <Stack>
                        <FormControl
                            label="Aversões"
                            error={errors.aversions?.message}
                        >
                            <Textarea
                                {...register("aversions")}
                                resize="none"
                            />
                        </FormControl>
                    </Stack>

                    <Stack>
                        <FormControl
                            label="Preferências"
                            error={errors.preferences?.message}
                        >
                            <Textarea
                                {...register("preferences")}
                                resize="none"
                            />
                        </FormControl>
                    </Stack>

                    <Stack>
                        <FormControl
                            label="Doenças de saúde"
                            error={errors.healthDeseases?.message}
                        >
                            <Textarea
                                {...register("healthDeseases")}
                                resize="none"
                            />
                        </FormControl>
                    </Stack>

                    <Stack>
                        <FormControl
                            label="Comentários adicionais"
                            error={errors.additionalComments?.message}
                        >
                            <Textarea
                                {...register("additionalComments")}
                                resize="none"
                            />
                        </FormControl>
                    </Stack>

                    <Stack>
                        <FormControl
                            label="Objetivo da dieta"
                            error={errors.dietObjective?.message}
                        >
                            <Textarea
                                {...register("dietObjective")}
                                resize="none"
                            />
                        </FormControl>
                    </Stack>

                    <Flex w="full" gap="2">
                        <Button
                            color="white"
                            bg="brand.green"
                            flex="1"
                            _active={{ brightness: "0.8" }}
                            _hover={{ brightness: "0.8" }}
                            type="submit"
                        >
                            Salvar alterações
                        </Button>

                        <Button
                            variant="outline"
                            color="brand.red"
                            borderColor="brand.red"
                            flex="1"
                            _active={{ brightness: "0.8" }}
                            _hover={{ brightness: "0.8" }}
                            onClick={onClose}
                        >
                            Cancelar
                        </Button>
                    </Flex>
                </Stack>
            </Stack>
        </>
    );
}
