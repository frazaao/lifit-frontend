"use client";

import FormControl from "@/components/FormControl";
import AppointmentStatusEnum from "@/services/app/domain/appointments/enums/AppontmentStatusEnum";
import {
    Box,
    Button,
    Divider,
    Flex,
    Heading,
    Select,
    Spinner,
    Stack,
    Text,
    Textarea,
} from "@chakra-ui/react";
import Calendar from "react-calendar";
import usePageController from "./usePageController";
import "./styles.css";

export default function AgendaPage() {
    const {
        myPatientProfileIsLoading,
        myNutritionistIsLoading,
        appointmentsIsLoading,
        handleSubmit,
        submitForm,
        date,
        setValue,
        setTileContentInCalendarWithAppointments,
        setTileDisabled,
        myAppointmentToday,
        errors,
        register,
        attendanceHours,
    } = usePageController();

    if (
        myPatientProfileIsLoading ||
        appointmentsIsLoading ||
        myNutritionistIsLoading
    ) {
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
            <Flex
                as="form"
                onSubmit={handleSubmit(submitForm)}
                direction="column"
                justify="space-between"
                h="full"
                bg="brand.background"
            >
                <Box p="2" shadow="base" rounded="2xl" m="4" bg="white">
                    <Calendar
                        view="month"
                        className="calendar"
                        locale="pt-BR"
                        value={date}
                        onChange={(value) =>
                            setValue("date", new Date(value?.toString()!))
                        }
                        tileDisabled={setTileDisabled}
                        tileContent={setTileContentInCalendarWithAppointments}
                    />
                </Box>

                {myAppointmentToday ? (
                    <Box
                        shadow="0 4px 12px rgba(0,0,0,0.25)"
                        px="4"
                        bg="white"
                        overflowY="auto"
                    >
                        <Heading
                            fontSize="lg"
                            color="brand.green"
                            mt="5"
                            mb="3"
                        >
                            Agendamento
                        </Heading>

                        <Text mb="4" color="brand.green">
                            Você já possui um agendamento no dia selecionado
                        </Text>

                        <Divider borderColor="gray.400" mb="3" />

                        <Stack mb="8">
                            <Flex align="center" gap="2" lineHeight="1">
                                <Heading fontSize="md" fontWeight="normal">
                                    Data:
                                </Heading>
                                <Text color="brand.text">
                                    {new Date(
                                        myAppointmentToday.date
                                    ).toLocaleDateString()}
                                </Text>
                            </Flex>

                            <Flex align="center" gap="2" lineHeight="1">
                                <Heading fontSize="md" fontWeight="normal">
                                    Horário:
                                </Heading>
                                <Text color="brand.text">
                                    {myAppointmentToday.startTime}
                                </Text>
                            </Flex>

                            <Box lineHeight="1">
                                <Heading fontSize="md" fontWeight="normal">
                                    Comentário sobre a consulta:
                                </Heading>
                                <Text color="brand.text">
                                    {myAppointmentToday.additionalComments ||
                                        "Sem comentários"}
                                </Text>
                            </Box>

                            <Flex align="center" gap="2" lineHeight="1">
                                <Heading fontSize="md" fontWeight="normal">
                                    Status do agendamento:
                                </Heading>
                                <Text color="brand.text">
                                    {
                                        AppointmentStatusEnum[
                                            myAppointmentToday.status
                                        ]
                                    }
                                </Text>
                            </Flex>
                        </Stack>
                    </Box>
                ) : (
                    <Box
                        shadow="0 4px 12px rgba(0,0,0,0.25)"
                        px="4"
                        bg="white"
                        overflowY="auto"
                    >
                        <Heading
                            fontSize="lg"
                            color="brand.green"
                            mt="5"
                            mb="3"
                        >
                            Agendar consulta
                        </Heading>

                        <Divider borderColor="gray.400" mb="3" />

                        <Box mb="4">
                            <FormControl
                                label="Horário"
                                error={errors.startTime?.message}
                            >
                                <Select {...register("startTime")}>
                                    {attendanceHours.map((hour) => (
                                        <option key={hour} value={hour}>
                                            {hour.slice(0, 5)}
                                        </option>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>

                        <Box mb="4">
                            <FormControl
                                label="Comentários sobre a consulta"
                                error={errors.additionalComments?.message}
                            >
                                <Textarea
                                    {...register("additionalComments")}
                                    resize="none"
                                    placeholder="Adicione comentários que desejar para seu médico sobre a consulta"
                                />
                            </FormControl>
                        </Box>

                        <input
                            type="hidden"
                            {...register("nutritionistProfileId")}
                            value="0"
                        />

                        <input
                            type="hidden"
                            {...register("patientProfileId")}
                            value="0"
                        />

                        <input
                            type="hidden"
                            {...register("status")}
                            value="REQUESTED"
                        />

                        <Button
                            type="submit"
                            w="full"
                            size="lg"
                            bg="brand.green"
                            color="brand.white"
                            mb="4"
                            fontSize="xl"
                            _hover={{ brightness: 0.9 }}
                            _focus={{ brightness: 0.9 }}
                            _active={{ brightness: 0.9 }}
                        >
                            Confirmar consulta
                        </Button>
                    </Box>
                )}
            </Flex>
        </>
    );
}
