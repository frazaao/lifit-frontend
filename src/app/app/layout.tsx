"use client";

import theme from "@/styles/theme";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";

interface AppLayoutProps {
    children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
    return (
        <ChakraProvider theme={theme}>
            <CSSReset />
            {children}
        </ChakraProvider>
    );
}
