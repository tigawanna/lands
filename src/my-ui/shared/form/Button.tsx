
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { Icons } from "../wrappers/icons";
import { Loader } from "lucide-react";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  isLoading?: boolean;
  type?: "button" | "submit" | "reset";
  node?: React.ReactNode;
}

// eslint-disable-next-line react/display-name
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, isLoading, label, node, ...props }, ref) => {
    const base_style = twMerge(
      "p-2 w-full flex items-center justify-center rounded-lg border hover:border-purple-500 hover:text-purple-500",
      className
    );
    // console.log("is loading in button === ",isLoading)
    return (
      <button
        {...props}
        className={
          props.disabled
            ? twMerge("cursor-not-allowed brightness-50 text-purple-600", base_style)
            : base_style
        }
        // disabled={isLoading}
        >
        {isLoading ? (
          <Loader className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <div>{node ?? label}</div>
        )}
      </button>
    );
  }
);
