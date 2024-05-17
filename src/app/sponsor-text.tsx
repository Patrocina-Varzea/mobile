import { colors } from "@/styles/colors";
import { Link } from "expo-router";
import { SquareArrowRight } from "lucide-react-native";
import { ScrollView, Text, View } from "react-native";

import LogoImg from "@/assets/svg/logo.svg";

export default function SponsorText() {
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
          PATROCINADOR
        </Text>
      </View>

      <View className="mt-8 w-full flex-1 items-center">
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="items-center gap-3">
            <Text className="text-justify font-body text-lg text-gray-200 ">
              {`\b\b\b`}Possibilidade de expor suas marcas, aumentar as vendas e
              dar maior visibilidade aos seus produtos. O custo para essa
              exposição é muito baixo em vista de outras mídias. É um mercado
              muito extenso, 241 unidades esportivas (campos) em terrenos
              municipais. São mais de 3.856 times, com 20 jogadores em média, um
              total de 77.120 jogadores em um final de semana.
            </Text>

            <Text className="text-justify font-body text-lg text-gray-200">
              {`\b\b\b`}Os patrocínios poderão ser feitos através de recursos
              financeiros, serviços, produtos tais como: jogos de uniformes,
              chuteiras, bolas, boné, mochilas, troféus, medalhas, produtos
              alimentícios, entre outros, selecionando os times/clubes
              diretamente em nossa plataforma. Possibilidade também de
              patrocinar um campeonato inteiro ou parte dele. Patrocinando o
              esporte de várzea, poderá também patrocinar a cultura
              simultaneamente, através de leis de incentivos (fale com a
              administração). Seu patrocínio, indiretamente estará praticando
              uma ação social, formando cidadãos, oferecendo às crianças e os
              jovens das periferias, uma melhor qualidade de laser e educação.
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
