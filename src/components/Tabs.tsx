import { createContext, useContext, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { cn } from "@/lib/utils";

interface TabsContextProps {
  activeTab: string;
  setActiveTab: (id: string) => void;
}
const TabsContext = createContext<TabsContextProps>({
  activeTab: "",
  setActiveTab: () => {},
});

interface TabsProps {
  defaultValue: string;
  children: React.ReactNode;
}
function Tabs({ defaultValue, children }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabsContext.Provider>
  );
}

function TabsList({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof View>) {
  return (
    <View
      className={cn("flex flex-row items-center justify-center", className)}
      {...props}
    />
  );
}

interface TabsTriggerProps
  extends React.ComponentPropsWithoutRef<typeof TouchableOpacity> {
  value: string;
  title: string;
  textClasses?: string;
}
function TabsTrigger({
  value,
  title,
  className,
  textClasses,
  ...props
}: TabsTriggerProps) {
  const { activeTab, setActiveTab } = useContext(TabsContext);

  return (
    <TouchableOpacity
      className={cn("rounded-md bg-transparent px-6 py-3", {
        "bg-yellow-400": activeTab === value,
        className,
      })}
      onPress={() => setActiveTab(value)}
      {...props}
    >
      <Text
        className={cn(
          "text-center font-body text-sm text-white",
          { "text-bg-gray-800": activeTab === value },
          textClasses,
        )}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

interface TabsContentProps extends React.ComponentPropsWithoutRef<typeof View> {
  value: string;
}
function TabsContent({ value, className, ...props }: TabsContentProps) {
  const { activeTab } = useContext(TabsContext);

  if (value === activeTab)
    return (
      <View
        className={cn(
          "border-border mt-3 rounded-xl border border-yellow-500 px-4 py-4",
          className,
        )}
        {...props}
      />
    );

  return null;
}

export { Tabs, TabsContent, TabsList, TabsTrigger };
