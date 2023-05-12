import { Box, Flex } from "@chakra-ui/react";
import BottomMenuItem from "../BottomMenuItem";
import useController from "./useController";
import { Calendar, Pencil, Home, Utensils, MessageCircle } from "lucide-react";

export default function BottomMenu() {
    const {} = useController();

    return (
        <>
            <Box
                as="nav"
                data-testid="BottomMenu"
                w="100%"
                py="4"
                px="2"
                bg="brand.white"
                shadow="dark-lg"
            >
                <Flex as="ul" w="100%" gap="2">
                    <BottomMenuItem
                        title="Agenda"
                        icon={<Calendar />}
                        href="/app/agenda"
                    />
                    <BottomMenuItem
                        title="Registros"
                        icon={<Pencil />}
                        href="/app/registros"
                    />
                    <BottomMenuItem
                        title="Início"
                        icon={<Home />}
                        href="/app/home"
                    />
                    <BottomMenuItem
                        title="Cardápios"
                        icon={<Utensils />}
                        href="/app/meal"
                    />
                    <BottomMenuItem
                        title="Mensagens"
                        icon={<MessageCircle />}
                        href="/app/chat"
                    />
                </Flex>
            </Box>
        </>
    );
}
