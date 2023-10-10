"use client";

import FormControl from "@/components/FormControl";
import scheduleManagementZodSchema, {
    ScheduleManagementZodSchema,
} from "@/services/app/domain/scheduleManagements/schemas/ScheduleManagementZodSchema";
import ScheduleManagementsService from "@/services/app/domain/scheduleManagements/services/ScheduleManagementsService";
import SchedulesService from "@/services/app/domain/schedules/services/SchedulesService";
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
    InputGroup,
    InputRightAddon,
    Select,
    Stack,
    useToast,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

interface CreateScheduleManagementProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CreateScheduleManagement({
    isOpen = false,
    onClose = () => {},
}: CreateScheduleManagementProps) {
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
    } = useForm<ScheduleManagementZodSchema>({
        resolver: zodResolver(scheduleManagementZodSchema),
    });

    async function submitForm(data: ScheduleManagementZodSchema) {
        try {
            await ScheduleManagementsService.create(data);

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
                                    label="Dia de atendimento"
                                    error={errors.attendanceDay?.message}
                                >
                                    <Select {...register("attendanceDay")}>
                                        <option value="DOMINGO">Domingo</option>
                                        <option value="SEGUNDA">
                                            Segunda-feira
                                        </option>
                                        <option value="TERCA">
                                            Terça-feira
                                        </option>
                                        <option value="QUARTA">
                                            Quarta-feira
                                        </option>
                                        <option value="QUINTA">
                                            Quinta-feira
                                        </option>
                                        <option value="SEXTA">
                                            Sexta-feira
                                        </option>
                                        <option value="SABADO">Sábado</option>
                                    </Select>
                                </FormControl>

                                <FormControl
                                    label="Horário de início das consultas"
                                    error={errors.attendanceStartTime?.message}
                                >
                                    <Input
                                        type="time"
                                        {...register("attendanceStartTime")}
                                    />
                                </FormControl>

                                <FormControl
                                    label="Horário de término das consultas"
                                    error={errors.attendanceEndTime?.message}
                                >
                                    <Input
                                        type="time"
                                        {...register("attendanceEndTime")}
                                    />
                                </FormControl>

                                <FormControl
                                    label="Tempo duração das consultas"
                                    error={errors.attendanceDuration?.message}
                                >
                                    <InputGroup>
                                        <Input
                                            type="number"
                                            {...register("attendanceDuration", {
                                                valueAsNumber: true,
                                            })}
                                        />
                                        <InputRightAddon>min</InputRightAddon>
                                    </InputGroup>
                                </FormControl>

                                <FormControl
                                    label="Horário de início do intervalo das consultas"
                                    error={errors.breakStartTime?.message}
                                >
                                    <Input
                                        type="time"
                                        {...register("breakStartTime")}
                                    />
                                </FormControl>

                                <FormControl
                                    label="Horário de término do intervalo das consultas"
                                    error={errors.breakEndTime?.message}
                                >
                                    <Input
                                        type="time"
                                        {...register("breakEndTime")}
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
