import { Text, View } from "react-native";

import LogoImg from "@/assets/svg/logo.svg";
import TabsChampionships from "@/components/TabsChampionships";

export default function Championships() {
  return (
    <View className="flex-1 items-center bg-gray-900 p-8 pt-10">
      <View className="my-3 items-center justify-center">
        <View className="flex flex-row">
          <View className="flex-1 items-center justify-center">
            <LogoImg width={36} height={36} />
          </View>
        </View>
        <Text className="my-3 font-heading text-2xl text-yellow-400">
          Campeonatos
        </Text>
        <View className="my-3 items-center justify-center">
          <Text className="text-md text-center font-body text-gray-300">
            Aqui você pode visualizar os campeonatos que estão por vir e
            consultar aqueles que já ocorreram.
          </Text>
        </View>
        <View className="h-0.5 w-80 bg-gray-300" />
      </View>

      <View className="mt-3 w-full flex-1 items-center pb-20">
        <TabsChampionships />
      </View>
    </View>
  );
}
