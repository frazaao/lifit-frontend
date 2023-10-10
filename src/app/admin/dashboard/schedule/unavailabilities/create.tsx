"use client";

import FormControl from "@/components/FormControl";
import SchedulesService from "@/services/app/domain/schedules/services/SchedulesService";
import unavailabilityZodSchema, {
    UnavailabilityZodSchema,
} from "@/services/app/domain/unavailabilities/schemas/UnavailabilityZodSchema";
import UnavailabilitysService from "@/services/app/domain/unavailabilities/services/UnavailabilitysService";
import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Heading,
    Input,
    Stack,
    useToast,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

interface CreateScheduleUnavailabilityProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CreateScheduleUnavailability({
    isOpen = false,
    onClose = () => {},
}: CreateScheduleUnavailabilityProps) {
    const toast = useToast();

    const { data: schedule, isLoading } = useQuery({
        queryFn: () => SchedulesService.getLoggedUserSchedule(),
        queryKey: ["SchedulesService.getLoggedUserSchedule"],
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<UnavailabilityZodSchema>({
        resolver: zodResolver(unavailabilityZodSchema),
    });

    async function submitForm(data: UnavailabilityZodSchema) {
        try {
            await UnavailabilitysService.create(data);

            toast({
                title: "Sucesso",
                description: "Dia de atendimento adicionado com sucesso",
                status: "success",
                duration: 2000,
                position: "top-right",
            });

            onClose();
        } catch {
            toast({
                title: "Erro",
                description: "Erro ao adicionar dia de atendimento",
                status: "error",
                duration: 2000,
                position: "top-right",
            });
        }
    }

    return (
        <>
            <Drawer isOpen={isOpen} onClose={onClose}>
                <DrawerOverlay />
                <Box as="form" onSubmit={handleSubmit(submitForm)}>
                    <DrawerContent>
                        <DrawerHeader>
                            <Heading size="md">
                                Adicionar dia de atendimento
                            </Heading>
                        </DrawerHeader>

                        <DrawerBody>
                            <Stack spacing="4">
                                <Input
                                    type="hidden"
                                    {...register("scheduleId")}
                                    value={schedule?.id}
                                />

                                <FormControl
                                    label="Data de início"
                                    error={errors.startDate?.message}
                                >
                                    <Input
                                        type="datetime-local"
                                        {...register("startDate")}
                                    />
                                </FormControl>

                                <FormControl
                                    label="Data de término"
                                    error={errors.endDate?.message}
                                >
                                    <Input
                                        type="datetime-local"
                                        {...register("endDate")}
                                    />
                                </FormControl>
                            </Stack>
                        </DrawerBody>
                        <DrawerFooter gap="4">
                            <Button
                                type="submit"
                                variant="ghost"
                                bg="brand.green"
                                color="brand.white"
                                lineHeight="1"
                                _hover={{
                                    filter: "brightness(0.9)",
                                }}
                            >
                                Salvar
                            </Button>
                            <Button
                                type="reset"
                                variant="outline"
                                color="brand.red"
                                borderColor="brand.red"
                                onClick={() => {
                                    reset();
                                    onClose();
                                }}
                            >
                                Cancelar
                            </Button>
                        </DrawerFooter>
                    </DrawerContent>
                </Box>
            </Drawer>
        </>
    );
}
