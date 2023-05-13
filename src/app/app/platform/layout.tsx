"use client";

import BottomMenu from "@/components/BottomMenu";
import { Box } from "@chakra-ui/react";
import menuItems from "./data.json";

interface PlatformLayoutProps {
    children: React.ReactNode;
}

export default function PlatformLayout({ children }: PlatformLayoutProps) {
    return (
        <>
            <Box pb="78px" h="100vh" maxH="100dvh" bg="brand.background">
                {children}
            </Box>
            <Box
                h="78px"
                w="full"
                position="fixed"
                bottom="0"
                left="0"
                right="0"
            >
                <BottomMenu items={menuItems} />
            </Box>
        </>
    );
}
