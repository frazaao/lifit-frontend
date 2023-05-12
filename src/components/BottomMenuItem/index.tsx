import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useController from "./useController";

interface BottomMenuItemProps {
    icon?: React.ReactNode;
    title?: string;
    href?: string;
}

export default function BottomMenuItem({
    icon = null,
    title = "",
    href = "",
}: BottomMenuItemProps) {
    const {} = useController();

    const pathname = usePathname();

    const isActive = href === pathname;

    return (
        <>
            <Box as="li" data-testid="BottomMenuItem" w="100%" flex="1">
                <Flex
                    as={Link}
                    href={href}
                    align="center"
                    direction="column"
                    color={isActive ? "brand.green" : "brand.text"}
                    borderBottom={"4px solid"}
                    borderColor={isActive ? "brand.green" : "transparent"}
                >
                    {icon}
                    <Text fontSize="0.75rem">{title}</Text>
                </Flex>
            </Box>
        </>
    );
}
