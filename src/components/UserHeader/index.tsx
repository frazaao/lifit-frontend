import { Avatar, Flex, Text } from "@chakra-ui/react";
import useController from "./useController";

interface UserHeaderProps {
    fullname: string;
    avatarUrl?: string;
}

export default function UserHeader({
    fullname = "",
    avatarUrl = "",
}: UserHeaderProps) {
    const { firstName, greetings, getGreetings } = useController({ fullname });

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
                <Text ml="4">
                    {firstName && `${greetings[getGreetings()]}, ${firstName}`}
                </Text>
                <Avatar
                    size="sm"
                    name={fullname}
                    src={avatarUrl}
                    bg="brand.green"
                    color="brand.white"
                />
            </Flex>
        </>
    );
}
