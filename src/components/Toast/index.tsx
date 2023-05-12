import { ToastProps } from "@/hooks/useToast";
import { useEffect, useState } from "react";
import useController from "./useController";
import { motion } from "framer-motion";

export default function Toast({
    description = "",
    title = "",
    type = "info",
}: ToastProps) {
    const {} = useController();

    const variants = {
        success: "bg-green-primary",
        error: "bg-red-primary",
        info: "bg-blue-700",
    };

    const iconVariants = {};

    return (
        <>
            <motion.div
                data-testid="Toast"
                className={`flex flex-col items-start w-11/12 max-w-xs text-white absolute right-4 top-4 px-4 py-2 rounded-xl ${variants[type]}`}
                initial={{ x: 340 }}
                animate={{ x: 0 }}
                exit={{ x: 340 }}
            >
                <span className="text-lg font-bold">{title}</span>
                <span className="text-sm">{description}</span>
            </motion.div>
        </>
    );
}
