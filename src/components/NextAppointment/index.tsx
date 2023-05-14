import { Button, Flex, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import useController from "./useController";
import { Calendar } from "lucide-react";
import Link from "next/link";

export default function NextAppointment() {
    const {} = useController();

    return (
        <>
            <Flex
                data-testid="NextAppointment"
                bg="brand.white"
                px="6"
                py="4"
                align="center"
                gap="3"
                rounded="lg"
                shadow="base"
            >
                <Icon as={Calendar} w="70px" h="70px" color="brand.green" />

                <Stack flex="1" spacing="1">
                    <Heading as="h3" size="md" color="brand.heading">
                        Próximas consultas
                    </Heading>
                    <Text fontSize="sm" color="brand.text" fontWeight="medium">
                        Sem consultas marcadas
                    </Text>
                    <Button
                        as={Link}
                        href="/app/platform/agenda"
                        size="sm"
                        w="full"
                        bg="brand.green"
                        _hover={{ brightness: "0.85" }}
                        _focus={{ brightness: "0.85" }}
                        color="white"
                        letterSpacing="0.65px"
                    >
                        Agendar consulta
                    </Button>
                </Stack>
            </Flex>
        </>
    );
}
