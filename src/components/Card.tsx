import { Text, View } from "react-native";

import { cn } from "../lib/utils";

function Card({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof View>) {
  return (
    <View
      className={cn(
        "border-border w-full rounded-xl border border-gray-500",
        className,
      )}
      {...props}
    />
  );
}

function CardHeader({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof View>) {
  return <View className={cn("p-4", className)} {...props} />;
}

function CardTitle({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof View>) {
  return (
    <Text
      className={cn(
        "text-primary line-clamp-1 font-heading text-xl tracking-tight text-yellow-400",
        className,
      )}
      {...props}
    />
  );
}

function CardDescription({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof View>) {
  return (
    <Text
      className={cn("font-subtitle text-sm text-gray-300", className)}
      {...props}
    />
  );
}

function CardContent({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof View>) {
  return <View className={cn("p-4 pt-0", className)} {...props} />;
}

// TODO: style
function CardFooter({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof View>) {
  return (
    <View
      className={cn(className, "flex flex-row items-center p-4 pt-0")}
      {...props}
    />
  );
}

interface SimpleCardProps {
  className?: string;
  title?: string;
  description?: string;
  content?: string;
  footer?: string;
}
function SimpleCard({
  className,
  title,
  description,
  content,
  footer,
}: SimpleCardProps) {
  return (
    <Card className={className}>
      <CardHeader>
        {title && (
          <Text className="text-primary text-2xl font-semibold tracking-tight">
            {title}
          </Text>
        )}
        {description && (
          <Text className="text-muted-foreground text-sm">{description}</Text>
        )}
      </CardHeader>
      {content && (
        <CardContent>
          <Text className="text-primary text-base">{content}</Text>
        </CardContent>
      )}
      {footer && (
        <CardFooter>
          <Text className="text-muted-foreground text-sm">{footer}</Text>
        </CardFooter>
      )}
    </Card>
  );
}

export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  SimpleCard,
};
