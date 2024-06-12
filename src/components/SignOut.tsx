import { colors } from "@/styles/colors";
import { Power } from "lucide-react-native";
import { Text, View } from "react-native";

import { useAuth } from "@/context/auth";

import { Button } from "./Button";
import { Dialog, DialogContent, DialogTrigger } from "./Dialog";

export default function SignOut() {
  const { signOut } = useAuth();

  return (
    <Dialog>
      <DialogTrigger>
        <Button
          label="Desconectar"
          variant="destructive"
          icon={<Power color={colors.white} size={18} />}
        />
      </DialogTrigger>
      <DialogContent className="max-w-96 border-red-600">
        <View className="flex gap-4">
          <Text className="font-heading text-xl text-red-600">Desconectar</Text>

          <Text className="font-body text-base text-white">
            Deseja desconectar da sua conta?
          </Text>
          <View className="mt-3">
            <Button
              label="SAIR"
              variant="destructive"
              onPress={() => {
                signOut();
              }}
            />
          </View>
        </View>
      </DialogContent>
    </Dialog>
  );
}
