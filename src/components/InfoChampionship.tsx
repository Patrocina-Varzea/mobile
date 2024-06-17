import { router } from "expo-router";
import { MousePointerClick } from "lucide-react-native";
import { Text, View } from "react-native";

import { colors } from "@/styles/colors";

import InstagramIcon from "@/assets/svg/instagram.svg";

export default function InfoChampionshiop() {
  return (
    <>
      <View className="flex flex-row items-center gap-2">
        <Text className="font-subtitle text-base text-white">Instagram:</Text>
        <InstagramIcon width={12} height={12} />
        <Text
          className="font-heading text-base text-white underline"
          onPress={() => {
            router.navigate("https://www.instagram.com/copaferradura/");
          }}
        >
          copaferradura
        </Text>
        <MousePointerClick
          color={colors.yellow[400]}
          width={16}
          height={16}
          strokeWidth={1}
        />
      </View>
      <View className="flex flex-row gap-2">
        <Text className="font-subtitle text-base text-white">
          Data do evento:
        </Text>
        <Text className="line-clamp-2 font-body text-base text-white">
          11/02/2025
        </Text>
      </View>
      <View className="flex flex-row gap-2">
        <Text className="font-subtitle text-base text-white">
          Quantidade de times:
        </Text>
        <Text className="line-clamp-2 font-body text-base text-white">23</Text>
      </View>
      <View className="flex flex-row gap-2">
        <Text className="font-subtitle text-base text-white">
          Premiação em dinheiro:
        </Text>
        <Text className="line-clamp-2 font-body text-base text-white">
          R$ 14.000,00
        </Text>
      </View>
      <View className="flex flex-row gap-2">
        <Text className="font-subtitle text-base text-white">
          Outras premições:
        </Text>
        <Text className="line-clamp-2 pr-1 font-body text-base text-white">
          Troféu Medalhas
        </Text>
      </View>
    </>
  );
}
