"use client";

import { ToastContextProvider } from "@/hooks/useToast";

interface AppLayoutProps {
    children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
    return <ToastContextProvider>{children}</ToastContextProvider>;
}
