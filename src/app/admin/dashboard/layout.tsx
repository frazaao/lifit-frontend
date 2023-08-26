"use client";

import Sidebar from "@/components/Sidebar";
import { Flex } from "@chakra-ui/react";

interface AdminDashboardLayoutProps {
    children: React.ReactNode;
}

export default function AdminDashboardLayout({
    children,
}: AdminDashboardLayoutProps) {
    return (
        <Flex bgColor="brand.background" w="100vw" h="100vh">
            <Sidebar />
            {children}
        </Flex>
    );
}
