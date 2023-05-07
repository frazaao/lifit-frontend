import useController from "./useController";
import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: React.ReactNode;
  variant?: keyof VariantTypes;
  color?: keyof ColorTypes;
  size?: keyof SizeTypes;
}

type VariantTypes = {
  default: string;
  outline: string;
};

type ColorTypes = {
  green: string;
  red: string;
  purple: string;
};

type SizeTypes = {
  sm: string;
  md: string;
  lg: string;
};

export default function Button({
  children = "",
  variant = "default",
  color = "green",
  size = "md",
  ...rest
}: ButtonProps) {
  const {} = useController();

  const variants: VariantTypes = {
    default: `bg-green-primary`,
    outline: `border bg-transparent`,
  };

  const colors: ColorTypes = {
    green: `bg-green-primary text-white hover:bg-green-primary/90 border-green-primary`,
    red: `bg-red-primary text-white hover:bg-red-primary/90 border-red-primary`,
    purple: `bg-purple-primary text-white hover:bg-purple-primary/90 border-purple-primary`,
  };

  const sizes: SizeTypes = {
    sm: `h-8 text-md`,
    md: `h-10 text-lg`,
    lg: `h-12 text-2xl`,
  };

  return (
    <>
      <button
        {...rest}
        data-testid="Button"
        className={`rounded-md px-4 ${sizes[size]} ${colors[color]} ${variants[variant]} ${rest.className}`}
      >
        {children}
      </button>
    </>
  );
}
