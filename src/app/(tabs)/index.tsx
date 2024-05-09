import { Button } from "@/components/Button";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-3xl text-gray-900 mb-8">Home</Text>
      <Button label="Home" />
    </View>
  );
}
