"use client";

import BottomMenu from "@/components/BottomMenu";
import { Box } from "@chakra-ui/react";
import menuItems from "./data.json";
import { AuthContextProvider } from "@/hooks/useAuth";

interface PlatformLayoutProps {
    children: React.ReactNode;
}

export default function PlatformLayout({ children }: PlatformLayoutProps) {
    return (
        <AuthContextProvider>
            <Box
                pb="78px"
                h="100vh"
                maxH="100dvh"
                bg="brand.background"
                overflowY="auto"
            >
                {children}
            </Box>
            <Box
                h="78px"
                w="full"
                position="fixed"
                bottom="0"
                left="0"
                right="0"
                zIndex="10"
            >
                <BottomMenu items={menuItems} />
            </Box>
        </AuthContextProvider>
    );
}
