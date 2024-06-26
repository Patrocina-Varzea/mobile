import { cloneElement, createContext, useContext, useState } from "react";
import { Modal, TouchableOpacity, View } from "react-native";

import { cn } from "@/lib/utils";

interface DialogContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const DialogContext = createContext<DialogContextType | undefined>(undefined);

function Dialog({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <DialogContext.Provider value={{ open, setOpen }}>
      {children}
    </DialogContext.Provider>
  );
}

function DialogTrigger({ children }: any) {
  const { setOpen } = useDialog();

  return cloneElement(children, { onPress: () => setOpen(true) });
}

function DialogContent({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const { open, setOpen } = useDialog();

  return (
    <Modal
      transparent
      animationType="fade"
      visible={open}
      onRequestClose={() => setOpen(false)}
    >
      <TouchableOpacity
        className="h-full w-full"
        onPress={() => setOpen(false)}
      >
        <View className="flex flex-1 items-center justify-center bg-gray-900/85">
          <TouchableOpacity
            className={cn(
              "border-border rounded-lg border border-yellow-400 bg-gray-800 p-6",
              className,
            )}
            activeOpacity={1}
          >
            {children}
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

const useDialog = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("useDialog must be used within a DialogProvider");
  }
  return context;
};

export { Dialog, DialogContent, DialogTrigger, useDialog };
