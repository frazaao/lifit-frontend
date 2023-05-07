import { ReactElement } from "react";
import useController from "./useController";

interface FormControlProps {
    children: React.ReactElement;
    label?: string;
    hint?: string;
    error?: string;
}

export default function FormControl({
    children,
    label = "",
    hint = "",
    error = "",
}: FormControlProps) {
    const {} = useController();

    return (
        <>
            <div data-testid="FormControl" className="w-full flex flex-col">
                <label htmlFor={children.props.name}>{label}</label>
                {children}
                <span>{hint}</span>
                <span className="text-red-primary">{error}</span>
            </div>
        </>
    );
}
