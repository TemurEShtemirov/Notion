import { Loader2 } from "lucide-react";
import React from "react";
import cn from "classnames";
import { cva, type VariantProps } from "class-variance-authority";

const loaderVariants = cva("text-muted-foreground animate-spin", {
  variants: {
    size: {
      default: "h-4 w-4",
      sm: "h-2 w-2",
      lg: "h-6 w-6",
      xl: "h-10 w-10",
    },
    defaultVariants: {
      size: "default",
    },
  },
});

interface LoaderProps extends VariantProps<typeof loaderVariants> {}

export const Loader = ({ size }: LoaderProps) => {
  return <Loader2 className={cn(loaderVariants({ size }))} />;
};
