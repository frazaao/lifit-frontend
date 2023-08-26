import { As, Flex, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useController from "./useController";
import * as lucide from "lucide-react";

interface SidebarMenuItemProps {
    icon?: string;
    title?: string;
    href?: string;
}

export default function SidebarMenuItem({
    href = "#",
    title = "",
    icon = "",
}: SidebarMenuItemProps) {
    const {} = useController();

    const LucideIcon =
        lucide[icon as keyof typeof lucide.icons] || lucide["Link2Off"];

    const pathname = usePathname();

    const isActive = pathname.includes(href);

    return (
        <>
            <h1 data-testid="SidebarMenuItem">
                <Flex
                    as={Link}
                    href={href}
                    w="100%"
                    align="center"
                    position="relative"
                    color={isActive ? "brand.green" : "brand.text"}
                    minH="32px"
                    fontSize="xl"
                    fontWeight={isActive ? "medium" : "regular"}
                    transition="all .2s ease-in-out"
                    _hover={{
                        color: isActive ? "brand.green" : "brand.heading",
                    }}
                    _after={{
                        content: "''",
                        w: "3px",
                        h: "100%",
                        bg: "brand.green",
                        position: "absolute",
                        display: isActive ? "block" : "none",
                        right: "-32px",
                        borderRadius: "lg",
                    }}
                >
                    <Icon as={LucideIcon} />
                    <Text ml="2">{title}</Text>
                </Flex>
            </h1>
        </>
    );
}
