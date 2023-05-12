import Toast from "@/components/Toast";
import { AnimatePresence } from "framer-motion";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid";

interface ToastContextContent {
    toast: (props: ToastProps) => void;
}

const ToastContext = createContext({} as ToastContextContent);

export const variants = {
    success: "bg-green-primary",
    error: "bg-red-primary",
    info: "bg-blue-300",
};

export interface ToastProps {
    title?: string;
    description?: string;
    type?: keyof typeof variants;
}

interface Toast extends ToastProps {
    uuid: string;
}

interface ToastContextProviderProps {
    children: React.ReactNode;
}

export const ToastContextProvider = ({
    children,
}: ToastContextProviderProps) => {
    const [toasts, setToasts] = useState<Toast[]>([
        {
            uuid: "1234",
            title: "Teste",
            type: "info",
            description: "Descirção",
        },
    ]);

    async function toast({
        description = "",
        title = "",
        type = "info",
    }: ToastProps) {
        const id = uuid();

        setToasts((state) => [
            ...state,
            { description, title, type, uuid: id },
        ]);

        await new Promise((resolve) => {
            setTimeout(() => {
                setToasts((state) => state.filter((t) => t.uuid !== id));
                resolve(null);
            }, 4000);
        });
    }

    return (
        <ToastContext.Provider value={{ toast }}>
            <AnimatePresence>
                {toasts.map((t) => (
                    <Toast
                        key={t.uuid}
                        title={t.title}
                        description={t.description}
                        type={t.type}
                    />
                ))}
            </AnimatePresence>
            {children}
        </ToastContext.Provider>
    );
};

export default function useToast() {
    const context = useContext(ToastContext);

    return context;
}
