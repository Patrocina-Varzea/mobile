import { colors } from "@/styles/colors";
import { Link } from "expo-router";
import { SquareArrowRight } from "lucide-react-native";
import { ScrollView, Text, View } from "react-native";

import LogoImg from "@/assets/svg/logo.svg";

export default function ClubText() {
  return (
    <View className="flex-1 items-center bg-gray-900 p-8 pt-10">
      <View className="my-3 items-center justify-center">
        <View className="flex flex-row">
          <View className="flex-1 items-center justify-center pl-8">
            <LogoImg width={36} height={36} />
          </View>
          <Link href={"/"}>
            <SquareArrowRight
              color={colors.yellow[400]}
              width={32}
              height={32}
              strokeWidth={1}
            />
          </Link>
        </View>
        <Text className="my-3 font-heading text-2xl text-yellow-400">
          CLUBES - TIMES
        </Text>
      </View>

      <View className="mt-8 w-full flex-1 items-center">
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="items-center gap-3">
            <Text className="text-justify font-body text-lg text-gray-200 ">
              {`\b\b\b`}São mais de 241 unidades esportivas (campos) em terrenos
              municipais, com administração da PMSP , espalhados pelas regiões,
              norte, sul, leste, oeste, grande ABC e outros municípios ao redor
              da capital de São Paulo. Estamos falando em 16 times (que jogam
              das 9:00 as 17:00 hrs), no final de semana, multiplicados por 241
              campos, totalizam 3.856 times, que multiplicado por 20 jogadores
              em média em cada time, temos um total de 77.120 jogadores, em um
              final de semana, sem contar demais públicos.
            </Text>
            <Text className=" text-center font-body text-lg text-gray-200">
              Fontes de informações:{`\b\b\b`}
              <Link
                href={
                  "https://www.prefeitura.sp.gov.br/cidade/secretarias/esportes/menu/index.php?p=263447"
                }
                className="underline"
              >
                https://www.prefeitura.sp.gov.br/cidade/secretarias/esportes/menu/index.php?p=263447
              </Link>
            </Text>

            <Text className="text-justify font-body text-lg text-gray-200">
              {`\b\b\b`}O cadastro no aplicativo é muito importante para
              fortalecer, valorizar, dar visibilidade e trazer benefícios ao seu
              time/clube, tais como: atrair potenciais patrocinadores, adquirir
              uniformes e demais produtos esportivos tais como, bolas,
              chuteiras, troféus, mochilas, etc. Além de concorrer a brindes
              promocionais a serem sorteados pelo aplicativo através da loteria
              federal.
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
