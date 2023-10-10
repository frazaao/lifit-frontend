import AppointmentDomain from "@/services/app/domain/appointments/types/AppointmentDomain";
import { Avatar, Icon, Td, Text, Tr } from "@chakra-ui/react";
import { Calendar, Clock3 } from "lucide-react";
import useController from "./useController";

interface AppointmentTableRowProps {
    appointment: AppointmentDomain;
    href?: string;
}

export default function AppointmentTableRow({
    appointment,
    href = "#",
}: AppointmentTableRowProps) {
    const {} = useController();

    return (
        <>
            <Tr data-testid="AppointmentTableRow">
                <Td>#{appointment.id}</Td>

                <Td>
                    <Icon as={Calendar} />
                    <Text>
                        {new Date(appointment.date).toLocaleDateString("pt-BR")}
                    </Text>
                </Td>

                <Td>
                    <Icon as={Clock3} />
                    <Text>{appointment.startTime}</Text>
                </Td>

                <Td>
                    <Avatar
                        src={appointment.patientProfile?.user?.avatar}
                        name={appointment.patientProfile?.user?.name}
                    />

                    <Text>{appointment.patientProfile?.user?.name}</Text>
                </Td>
            </Tr>
        </>
    );
}
