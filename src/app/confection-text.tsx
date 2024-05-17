import { colors } from "@/styles/colors";
import { Link } from "expo-router";
import { SquareArrowRight } from "lucide-react-native";
import { ScrollView, Text, View } from "react-native";

import LogoImg from "@/assets/svg/logo.svg";

export default function ConfectionText() {
  return (
    <View className="flex-1 items-center bg-gray-900 p-8 pt-10">
      <View className="my-3 items-center justify-center">
        <View className="flex flex-row">
          <View className="flex-1 items-center justify-center pl-8">
            <LogoImg width={36} height={36} />
          </View>
          <Link href={"/signin"}>
            <SquareArrowRight
              color={colors.yellow[400]}
              width={32}
              height={32}
              strokeWidth={1}
            />
          </Link>
        </View>
        <Text className="my-3 font-heading text-2xl text-yellow-400">
          CONFECÇÃO DE UNIFORMES
        </Text>
      </View>

      <View className="mt-8 w-full flex-1 items-center">
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="items-center gap-3">
            <Text className="text-justify font-body text-lg text-gray-200 ">
              {`\b\b\b`}Apostamos nessa parceria por juntar os interesses mútuos
              das empresas de confecções e dos times/clubes, possibilitando
              aumento nas vendas e dando maior visibilidade às suas marcas e
              produtos. É um mercado muito extenso, porém, pouco explorado.
              Essas empresas poderão também, atuar como patrocinadoras de
              campeonatos. Buscaremos patrocinadores para aquisição de seus
              produtos.
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
