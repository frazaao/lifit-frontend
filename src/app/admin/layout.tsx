"use client";

import queryClient from "@/libs/QueryClient/ReactQuery";
import theme from "@/styles/theme";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { QueryClientProvider } from "@tanstack/react-query";

interface AdminLayoutProps {
    children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
    return (
        <ChakraProvider theme={theme}>
            <CSSReset />
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </ChakraProvider>
    );
}
