import { colors } from "@/styles/colors";
import { Link } from "expo-router";
import { Frown, SquareArrowLeft } from "lucide-react-native";
import { Text, View } from "react-native";

import LogoImg from "@/assets/svg/logo.svg";

export default function Awards() {
  return (
    <View className="flex-1 items-center bg-gray-900 p-8 pt-10">
      <View className="my-3 items-center justify-center">
        <View className="flex flex-row">
          <Link href={"/"}>
            <SquareArrowLeft
              color={colors.yellow[400]}
              width={32}
              height={32}
              strokeWidth={1}
            />
          </Link>
          <View className="flex-1 items-center justify-center pr-8">
            <LogoImg width={36} height={36} />
          </View>
        </View>
        <Text className="my-3 font-heading text-2xl text-yellow-400">
          Prêmios e Sorteios
        </Text>
        <View className="my-3 items-center justify-center">
          <Text className="text-md text-center font-body text-gray-300">
            Aqui você pode conferir os prêmios e sorteios que estão disponíveis
            para você.
          </Text>
        </View>
        <View className="h-0.5 w-80 bg-gray-300" />
      </View>

      <View className="flex-1 items-center justify-center gap-3">
        <Frown color={colors.yellow[400]} width={32} height={32} />
        <Text className="text-md text-center font-body text-gray-100">
          No momento não há prêmios ou sorteios para consultar.
        </Text>
      </View>
    </View>
  );
}
