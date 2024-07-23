import { Text, View } from "react-native";

import LogoImg from "@/assets/svg/logo.svg";
import TabsClubs from "@/components/TabsClubs";

export default function ClubsList() {
  return (
    <View className="flex-1 items-center bg-gray-900 p-8 pt-10">
      <View className="my-3 items-center justify-center">
        <View className="flex flex-row">
          <View className="flex-1 items-center justify-center">
            <LogoImg width={36} height={36} />
          </View>
        </View>
        <Text className="my-3 font-heading text-2xl text-yellow-400">
          Clubes - Times
        </Text>
        <View className="my-3 items-center justify-center">
          <Text className="text-md text-center font-body text-gray-300">
            Aqui você pode visualizar os clubes-times que estão disponíveis para
            serem patrocinados e também consultar seus patrocínios ativos.
          </Text>
        </View>
        <View className="h-0.5 w-80 bg-gray-300" />
      </View>

      <View className="mt-3 w-full flex-1 items-center pb-20">
        <TabsClubs />
      </View>
    </View>
  );
}
