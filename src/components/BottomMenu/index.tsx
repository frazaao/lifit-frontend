import { Box, Flex } from "@chakra-ui/react";
import BottomMenuItem from "../BottomMenuItem";
import useController from "./useController";
import * as Lucide from "lucide-react";

interface BottomMenuProps {
    items: {
        title: string;
        icon: string;
        href: string;
    }[];
}

export default function BottomMenu({ items }: BottomMenuProps) {
    const {} = useController();

    function getLucideIcon(icon: string): React.ReactNode {
        const Icon = Lucide[icon as keyof typeof Lucide];
        // @ts-ignore
        return <Icon />;
    }

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
                    {items.map(({ title, icon, href }) => (
                        <BottomMenuItem
                            key={title}
                            title={title}
                            icon={getLucideIcon(icon)}
                            href={href}
                        />
                    ))}
                </Flex>
            </Box>
        </>
    );
}
