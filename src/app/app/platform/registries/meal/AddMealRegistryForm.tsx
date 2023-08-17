import FormControl from "@/components/FormControl";
import RecipeCardOption from "@/components/RecipeCardOption";
import mealRegistryZodSchema, {
    MealRegistryZodSchema,
} from "@/services/app/domain/mealRegistries/schemas/MealRegistryZodSchema";
import MealRegistriesService from "@/services/app/domain/mealRegistries/services/MealRegistriesService";
import MealTypesService from "@/services/app/domain/mealTypes/services/MealTypesService";
import PatientProfilesService from "@/services/app/domain/patientProfiles/services/PatientProfilesService";
import {
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerOverlay,
    Box,
    Heading,
    Flex,
    Button,
    Stack,
    Input,
    Text,
    Select,
    Textarea,
    Spinner,
    useToast,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface AddMealRegistryFormProps {
    isOpen: boolean;
    onClose: () => void;
    refetch: () => void;
}

export default function AddMealRegistryForm({
    isOpen = false,
    onClose = () => {},
    refetch = () => {},
}: AddMealRegistryFormProps) {
    const toast = useToast();

    const { data: mealTypes, isLoading: mealTypesIsLoading } = useQuery({
        queryFn: () => MealTypesService.list(),
        queryKey: ["ListMealTypes"],
    });

    const { data: myProfile, isLoading: myProfileIsLoading } = useQuery({
        queryFn: () => PatientProfilesService.findMyProfile(),
        queryKey: ["MyProfile"],
    });

    const isLoading = mealTypesIsLoading || myProfileIsLoading;

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        setValue,
        reset,
    } = useForm<MealRegistryZodSchema>({
        resolver: zodResolver(mealRegistryZodSchema),
    });

    const mealTypeId = watch("mealTypeId");

    const selectedMealType = mealTypes?.find(
        (mealType) => mealType.id === Number(mealTypeId)
    );

    async function submitForm(data: MealRegistryZodSchema) {
        try {
            await MealRegistriesService.create(data);
            toast({
                title: "Registro realizado com sucesso!",
                description:
                    "Seu registro foi realizado com sucesso e seus dados estãos salvos.",
                status: "success",
                position: "top-right",
            });

            reset();
            refetch();
            onClose();
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

    useEffect(() => {
        if (myProfile && myProfile.id) {
            setValue("patientProfileId", myProfile.id);
        }
    }, [myProfile]);

    if (isLoading) {
        return (
            <>
                <Flex w="full" h="full" align="center" justify="center">
                    <Spinner />
                </Flex>
            </>
        );
    }

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

                            <Stack spacing="6">
                                <Flex gap="3" align="flex-end">
                                    <Input
                                        type="hidden"
                                        value={myProfile?.id}
                                        {...register("patientProfileId")}
                                    />

                                    <FormControl
                                        label="Tipo da refeição"
                                        error={errors.mealTypeId?.message}
                                    >
                                        <Select
                                            {...register("mealTypeId")}
                                            required
                                            defaultValue=""
                                        >
                                            <option value="" disabled hidden>
                                                Selecione a refeição
                                            </option>
                                            {mealTypes?.map((mealType) => (
                                                <option
                                                    key={mealType.id}
                                                    value={mealType.id}
                                                >
                                                    {mealType.title}
                                                </option>
                                            ))}
                                        </Select>
                                    </FormControl>

                                    <FormControl
                                        label="Peso aproximado do prato"
                                        error={errors.weight?.message}
                                    >
                                        <Input
                                            {...register("weight")}
                                            placeholder="Peso em gramas"
                                            type="number"
                                        />
                                    </FormControl>
                                </Flex>

                                <FormControl label="Refeição">
                                    <>
                                        <Input
                                            type="hidden"
                                            {...register("recipeId")}
                                        />

                                        <Flex
                                            overflowX="auto"
                                            w="full"
                                            gap="3"
                                            p="2"
                                            pb="4"
                                        >
                                            <RecipeCardOption
                                                isSelected={
                                                    watch("recipeId") ===
                                                    undefined
                                                }
                                                onSelect={(recipeId) =>
                                                    setValue(
                                                        "recipeId",
                                                        recipeId || undefined
                                                    )
                                                }
                                            />
                                            {selectedMealType?.recipes?.map(
                                                (recipe) => (
                                                    <RecipeCardOption
                                                        recipe={recipe}
                                                        key={recipe.id}
                                                        isSelected={
                                                            recipe.id ==
                                                            watch("recipeId")
                                                        }
                                                        onSelect={(recipeId) =>
                                                            setValue(
                                                                "recipeId",
                                                                recipeId ||
                                                                    undefined
                                                            )
                                                        }
                                                    />
                                                )
                                            )}
                                        </Flex>
                                    </>
                                </FormControl>

                                <Flex gap="3">
                                    <FormControl
                                        label="Data da refeição"
                                        error={errors.date?.message}
                                    >
                                        <Input
                                            {...register("date")}
                                            type="date"
                                        />
                                    </FormControl>

                                    <FormControl
                                        label="Hora da refeição"
                                        error={errors.time?.message}
                                    >
                                        <Input
                                            {...register("time")}
                                            type="time"
                                        />
                                    </FormControl>
                                </Flex>

                                <Text color="brand.text" fontSize="sm">
                                    Caso não desejar informar a refeição,
                                    utilize o campo de comentário adicional para
                                    informar ao seu nutricionista sobre o que
                                    foi consumido nessa refeição
                                </Text>

                                <FormControl
                                    label="Comentário adicional"
                                    error={errors.additionalComments?.message}
                                >
                                    <Textarea
                                        {...register("additionalComments")}
                                        placeholder="Comentários sobre a refeição"
                                        resize="none"
                                    />
                                </FormControl>
                            </Stack>

                            <Flex gap="4" mt="12">
                                <Button
                                    flex="1"
                                    size="lg"
                                    color="brand.white"
                                    bg="brand.green"
                                    type="submit"
                                >
                                    Salvar
                                </Button>
                                <Button
                                    flex="1"
                                    size="lg"
                                    variant="outline"
                                    color="brand.red"
                                    borderColor="brand.red"
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
