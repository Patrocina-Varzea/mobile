import { useAuth } from "@/context/auth";
import { colors } from "@/styles/colors";
import { Menu } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { Avatar, AvatarFallback, AvatarImage } from "./Avatar";

type Props = {
  user: string;
};

export default function Header({ user }: Props) {
  const { signOut } = useAuth();

  return (
    <View className="mb-3 flex w-full flex-row items-center justify-between bg-gray-800 p-5 px-8">
      <View className="flex flex-row items-center gap-3">
        <Avatar>
          <AvatarImage
            source={{ uri: "https://www.github.com/rapharenatoo.png" }}
          />
          <AvatarFallback textClassname="text-gray-300">RR</AvatarFallback>
        </Avatar>
        <View className="items-start">
          <Text className="text-center font-body text-white">Olá,</Text>
          <Text className="text-center font-subtitle text-white">{user}</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={() => {}}>
          <Menu color={colors.yellow[400]} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
