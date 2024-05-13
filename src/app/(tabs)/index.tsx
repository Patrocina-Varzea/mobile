import { Button } from "@/components/Button";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="mb-8 text-3xl text-gray-900" testID="label-home">
        Home
      </Text>
      <Button label="Home" testID="button-label-home" />
    </View>
  );
}
