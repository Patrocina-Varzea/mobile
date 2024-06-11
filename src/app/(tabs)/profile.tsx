import { Avatar, AvatarFallback, AvatarImage } from "@/components/Avatar";
import { Button } from "@/components/Button";
import TabsInformation from "@/components/TabsInformation";
import { useAuth } from "@/context/auth";
import { colors } from "@/styles/colors";
import { Power } from "lucide-react-native";
import { View } from "react-native";

export default function Profile() {
  const { signOut } = useAuth();

  return (
    <View className="flex-1 items-center gap-4 bg-gray-900 px-8 pb-24 pt-12">
      <View className="flex-1 items-center">
        <Avatar className="h-28 w-28">
          <AvatarImage
            source={{ uri: "https://www.github.com/rapharenatoo.png" }}
          />
          <AvatarFallback textClassname="text-gray-300">RR</AvatarFallback>
        </Avatar>
        <View className="mt-8 items-center">
          <TabsInformation />
        </View>
      </View>
      <Button
        label="Desconectar"
        variant="destructive"
        icon={<Power color={colors.white} size={18} />}
        onPress={() => {
          signOut();
        }}
      />
    </View>
  );
}
