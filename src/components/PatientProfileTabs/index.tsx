import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import menuData from "./data";
import useController from "./useController";

interface PatientProfileTabsProps {
    id: string;
}

export default function PatientProfileTabs({ id }: PatientProfileTabsProps) {
    const {} = useController();

    const pathname = usePathname();

    function isActive(href: string) {
        return pathname.includes(href);
    }

    return (
        <>
            <Flex
                data-testid="PatientProfileTabs"
                w="full"
                justify="center"
                align="center"
                gap="4"
                pt="4"
            >
                {menuData.map((item) => (
                    <Text
                        key={item.title}
                        as={Link}
                        href={"/admin/dashboard/patients/" + id + item.href}
                        px="4"
                        py="1"
                        color={
                            isActive(item.href)
                                ? "brand.green"
                                : "brand.heading"
                        }
                        borderBottom={isActive(item.href) ? "2px" : "0"}
                    >
                        {item.title}
                    </Text>
                ))}
            </Flex>
        </>
    );
}
