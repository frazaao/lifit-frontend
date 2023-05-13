import { Avatar, Flex, Text } from "@chakra-ui/react";
import useController from "./useController";

export default function UserHeader() {
    const {} = useController();

    return (
        <>
            <Flex
                data-testid="UserHeader"
                w="100%"
                justify="space-between"
                align="center"
                bg="white"
                rounded="full"
                px="2"
                py="2"
                shadow="base"
            >
                <Text ml="4">Bom dia, Jhon</Text>
                <Avatar
                    size="sm"
                    name="Jhon Doe"
                    src="https://github.com/frazaao.png"
                />
            </Flex>
        </>
    );
}
