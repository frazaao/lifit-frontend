import {
    DetailedHTMLProps,
    ForwardRefRenderFunction,
    InputHTMLAttributes,
    forwardRef,
} from "react";
import useController from "./useController";

interface InputProps
    extends DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
    { leftIcon, rightIcon, ...props },
    ref
) => {
    const {} = useController();

    return (
        <>
            <div className="border border-zinc-300 bg-white w-full h-10 rounded-md overflow-hidden flex items-stretch text-text-default">
                {leftIcon && (
                    <div className="border-r border-zinc-300 flex items-center px-2">
                        {leftIcon}
                    </div>
                )}
                <input
                    {...props}
                    data-testid="Input"
                    ref={ref}
                    className="px-2 flex-1"
                />
                {rightIcon && (
                    <div className="border-l border-zinc-300 flex items-center px-2">
                        {rightIcon}
                    </div>
                )}
            </div>
        </>
    );
};

const Input = forwardRef(InputBase);

export default Input;
