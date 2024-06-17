import { Text, View } from "react-native";

export default function InfoClub() {
  return (
    <>
      <View className="flex flex-row gap-2">
        <Text className="font-subtitle text-base text-white">
          Deseja patrocinar?
        </Text>
        <Text className="line-clamp-2 font-body text-base text-white">SIM</Text>
      </View>
      <View className="flex flex-row gap-2">
        <Text className="font-subtitle text-base text-white">
          Categoria(s):
        </Text>
        <Text className="line-clamp-2 font-body text-base text-white">
          Sport
        </Text>
      </View>
      <View className="flex flex-row gap-2">
        <Text className="font-subtitle text-base text-white">
          Tipo de patrocínio:
        </Text>
        <Text className="line-clamp-2 font-body text-base text-white">
          Manga Frente Costas Troféu
        </Text>
      </View>
    </>
  );
}
