import useAuth from "@/hooks/useAuth";
import { Avatar, Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import Logo from "../Logo";
import SidebarMenuItem from "../SidebarMenuItem";
import menuData from "./data";
import useController from "./useController";

export default function Sidebar() {
    const {} = useController();

    const { user } = useAuth();

    return (
        <>
            <Flex
                data-testid="Sidebar"
                w="300px"
                h="full"
                align="center"
                direction="column"
                p="2rem"
                gap="4"
                bg="brand.white"
                shadow="sm"
            >
                <Logo />

                <Box as="hr" w="100%" />

                <Stack w="100%" h="full" flex="1">
                    {menuData.map((item) => (
                        <SidebarMenuItem
                            key={item.title}
                            title={item.title}
                            icon={item.icon}
                            href={item.href}
                        />
                    ))}
                </Stack>

                <Box as="hr" w="100%" />

                <Flex gap="2" w="full" as={Link} href="#">
                    <Avatar name={user?.name} src={user?.avatar} />
                    <Box>
                        <Heading fontSize="xl">{user?.name}</Heading>
                        <Text fontSize="sm">
                            {user?.role === "NUTRITIONIST"
                                ? "Nutricionista"
                                : "Administrador"}
                        </Text>
                    </Box>
                </Flex>
            </Flex>
        </>
    );
}
