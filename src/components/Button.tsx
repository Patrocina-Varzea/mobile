import { cva, type VariantProps } from "class-variance-authority";
import { Text, TouchableOpacity, View } from "react-native";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "flex flex-row items-center justify-center rounded-md w-full",
  {
    variants: {
      variant: {
        default: "bg-yellow-400",
        secondary: "bg-transparent border border-white",
        destructive: "bg-red-600",
        ghost: "bg-slate-700",
        link: "bg-transparent border border-yellow-400",
      },
      size: {
        default: "h-10 px-3",
        sm: "h-8 px-2",
        lg: "h-12 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const buttonTextVariants = cva("text-center font-medium font-body", {
  variants: {
    variant: {
      default: "text-gray-900",
      secondary: "text-white",
      destructive: "text-white",
      ghost: "text-primary-foreground",
      link: "text-yellow-400",
    },
    size: {
      default: "text-base",
      sm: "text-sm",
      lg: "text-xl",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

interface ButtonProps
  extends React.ComponentPropsWithoutRef<typeof TouchableOpacity>,
    VariantProps<typeof buttonVariants> {
  label: string;
  labelClasses?: string;
  icon?: React.ReactNode;
}
function Button({
  label,
  labelClasses,
  className,
  variant,
  size,
  icon,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {!!icon && (
        <View className="mr-3 items-center justify-center">{icon}</View>
      )}

      <Text
        className={cn(
          buttonTextVariants({ variant, size, className: labelClasses }),
        )}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

export { Button, buttonTextVariants, buttonVariants };
