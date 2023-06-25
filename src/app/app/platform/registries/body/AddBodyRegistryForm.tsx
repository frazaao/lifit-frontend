import FormControl from "@/components/FormControl";
import bodyRegistryZodSchema, {
    BodyRegistryZodSchema,
} from "@/services/app/domain/bodyRegistries/schemas/BodyRegistryZodSchema";
import BodyRegistriesService from "@/services/app/domain/bodyRegistries/services/BodyRegistriesService";
import PatientProfilesService from "@/services/app/domain/patientProfiles/services/PatientProfilesService";
import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerOverlay,
    Flex,
    Heading,
    Input,
    Stack,
    Textarea,
    useToast,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface AddBodyRegistryFormProps {
    isOpen: boolean;
    onClose: () => void;
    refetch: () => void;
}

export default function AddBodyRegistryForm({
    isOpen = false,
    onClose = () => {},
    refetch = () => {},
}: AddBodyRegistryFormProps) {
    const {
        register,
        formState: { errors, isSubmitting },
        handleSubmit,
        setValue,
        reset,
    } = useForm<BodyRegistryZodSchema>({
        resolver: zodResolver(bodyRegistryZodSchema),
    });

    const toast = useToast();

    async function submitForm(values: BodyRegistryZodSchema) {
        try {
            await BodyRegistriesService.create(values);
            toast({
                title: "Registro realizado com sucesso!",
                description:
                    "Seu registro foi realizado com sucesso e seus dados estãos salvos.",
                status: "success",
                position: "top-right",
            });
            reset();
            onClose();
            refetch();
        } catch {
            toast({
                title: "Ocorreu um erro ao salvar o registro",
                description:
                    "Verifique sua conexão e tente novamente, caso o erro persista, entre em contato com o suporte",
                status: "error",
                position: "top-right",
            });
        }
    }

    const { data: myPatientProfile } = useQuery({
        queryKey: ["MyPatientProfile"],
        queryFn: PatientProfilesService.findMyProfile,
    });

    useEffect(() => {
        if (myPatientProfile && myPatientProfile.id) {
            setValue("patientProfileId", myPatientProfile.id);
        }
    }, [myPatientProfile]);

    return (
        <>
            <Drawer isOpen={isOpen} onClose={onClose} placement="bottom">
                <DrawerOverlay />

                <DrawerContent shadow="dark-lg">
                    <DrawerBody>
                        <Box as="form" onSubmit={handleSubmit(submitForm)}>
                            <Flex align="center" justify="space-between" pb="4">
                                <Heading fontSize="xl">
                                    Adicionar dados corporais
                                </Heading>
                                <Button
                                    variant="outline"
                                    borderColor="brand.red"
                                    color="brand.red"
                                    size="sm"
                                    onClick={onClose}
                                >
                                    Cancelar
                                </Button>
                            </Flex>

                            <Stack>
                                <Input
                                    type="hidden"
                                    {...register("patientProfileId")}
                                />
                                <Input
                                    type="hidden"
                                    {...register("registryDate")}
                                    value={new Date().toISOString()}
                                />
                                <Flex gap="3">
                                    <FormControl
                                        label="Peso"
                                        error={errors.weight?.message}
                                    >
                                        <Input
                                            type="number"
                                            {...register("weight")}
                                        />
                                    </FormControl>

                                    <FormControl
                                        label="Altura"
                                        error={errors.height?.message}
                                    >
                                        <Input
                                            type="number"
                                            {...register("height")}
                                        />
                                    </FormControl>
                                </Flex>

                                <Flex gap="3">
                                    <FormControl
                                        label="Pressão arterial"
                                        error={errors.arterialPressure?.message}
                                    >
                                        <Input
                                            type="text"
                                            {...register("arterialPressure")}
                                        />
                                    </FormControl>

                                    <FormControl
                                        label="Glicemia"
                                        error={errors.glycemia?.message}
                                    >
                                        <Input
                                            type="text"
                                            {...register("glycemia")}
                                        />
                                    </FormControl>
                                </Flex>

                                <Flex gap="3">
                                    <FormControl
                                        label="Colesterol"
                                        error={errors.cholesterol?.message}
                                    >
                                        <Input
                                            type="text"
                                            {...register("cholesterol")}
                                        />
                                    </FormControl>

                                    <FormControl
                                        label="Triglicerídeos"
                                        error={errors.triglycerides?.message}
                                    >
                                        <Input
                                            type="text"
                                            {...register("triglycerides")}
                                        />
                                    </FormControl>
                                </Flex>

                                <Flex gap="3">
                                    <FormControl
                                        label="Circunferência do quadril"
                                        error={errors.hipCircunference?.message}
                                    >
                                        <Input
                                            type="text"
                                            {...register("hipCircunference")}
                                        />
                                    </FormControl>

                                    <FormControl
                                        label="Circunferência do abdômen"
                                        error={
                                            errors.abdomenCircunference?.message
                                        }
                                    >
                                        <Input
                                            type="text"
                                            {...register(
                                                "abdomenCircunference"
                                            )}
                                        />
                                    </FormControl>
                                </Flex>

                                <FormControl
                                    label="Medicamentos em uso"
                                    error={errors.medicationsInUse?.message}
                                >
                                    <Textarea
                                        resize="none"
                                        {...register("medicationsInUse")}
                                    />
                                </FormControl>
                            </Stack>

                            <Flex
                                gap="4"
                                align="center"
                                justify="center"
                                mb="4"
                                mt="10"
                            >
                                <Button
                                    flex="1"
                                    bg="brand.green"
                                    color="brand.white"
                                    size="lg"
                                    type="submit"
                                    isLoading={isSubmitting}
                                >
                                    Salvar
                                </Button>
                                <Button
                                    flex="1"
                                    variant="outline"
                                    borderColor="brand.red"
                                    color="brand.red"
                                    size="lg"
                                    onClick={onClose}
                                >
                                    Cancelar
                                </Button>
                            </Flex>
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
}
