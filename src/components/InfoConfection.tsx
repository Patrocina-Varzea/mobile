import { Text, View } from "react-native";

export default function InfoConfection() {
  return (
    <>
      <View className="flex flex-row gap-2">
        <Text className="font-subtitle text-base text-white">
          Deseja patrocinar?
        </Text>
        <Text className="line-clamp-2 font-body text-base text-white">SIM</Text>
      </View>
    </>
  );
}
