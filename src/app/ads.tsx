import { colors } from "@/styles/colors";
import { Link, router } from "expo-router";
import {
  Loader,
  MousePointerClick,
  SquareArrowLeft,
} from "lucide-react-native";
import { Image, Text, View } from "react-native";

import ClassificationImg from "@/assets/classificacao-01.jpeg";
import ClassificationTwoImg from "@/assets/classificacao-02.jpeg";
import CopaFerraduraImg from "@/assets/copa-ferradura.jpg";
import PlayersImg from "@/assets/jogadores-01.jpeg";
import PlayersTwoImg from "@/assets/jogadores-02.jpeg";
import FollowsImg from "@/assets/seguidores.jpeg";
import InstagramIcon from "@/assets/svg/instagram.svg";
import LogoImg from "@/assets/svg/logo.svg";

export default function Ads() {
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
          Anúncios e Publicações
        </Text>
        <View className="my-3 items-center justify-center">
          <Text className="text-md text-center font-body text-gray-300">
            Aqui você pode conferir anúncios e conferir os trabalhos de alguns
            campeonatos.
          </Text>
        </View>
        <View className="h-0.5 w-80 bg-gray-300" />
      </View>

      <View className="mt-12 w-full flex-1 items-center gap-6">
        <View className="flex flex-row items-center gap-4">
          <InstagramIcon width={32} height={32} />
          <Text
            className="text-center font-subtitle text-xl text-yellow-400 underline"
            onPress={() => {
              router.navigate("https://www.instagram.com/copaferradura/");
            }}
          >
            Copa Ferradura
          </Text>
          <MousePointerClick
            color={colors.yellow[400]}
            width={16}
            height={16}
            strokeWidth={1}
          />
        </View>

        <View className="items-center justify-center gap-4">
          <View className="flex flex-row items-center justify-center gap-4">
            <Image
              source={CopaFerraduraImg}
              alt="Copa ferradura"
              className="h-20 w-20 rounded-lg border border-yellow-400"
            />
            <Image
              source={FollowsImg}
              alt="Seguidores ferradura"
              className="h-20 w-20 rounded-lg border border-yellow-400"
            />
            <Image
              source={ClassificationTwoImg}
              alt="Classificação ferradura"
              className="h-20 w-20 rounded-lg border border-yellow-400"
            />
          </View>
          <View className="flex flex-row items-center justify-center gap-4">
            <Image
              source={PlayersTwoImg}
              alt="Jogadores ferradura"
              className="h-20 w-20 rounded-lg border border-yellow-400"
            />
            <Image
              source={ClassificationImg}
              alt="Classificação ferradura"
              className="h-20 w-20 rounded-lg border border-yellow-400"
            />
            <Image
              source={PlayersImg}
              alt="Jogadores ferradura"
              className="h-20 w-20 rounded-lg border border-yellow-400"
            />
          </View>
        </View>

        <View className="my-8">
          <Text className="text-center font-body text-3xl font-extrabold text-gray-300">
            . . .{" "}
          </Text>
        </View>

        <View className="w-full  items-center justify-center gap-3">
          <Text className="text-md text-center font-body text-gray-300">
            Mais publicações e anúncios em breve ...
          </Text>

          <Loader color={colors.yellow[400]} width={32} height={32} />
        </View>
      </View>
    </View>
  );
}
