import { Button } from "@/components/Button";
import { Link, router } from "expo-router";
import { View } from "react-native";

import { colors } from "@/styles/colors";
import { SquareArrowLeft } from "lucide-react-native";

import LogoImg from "@/assets/svg/logo.svg";

type Params = {
  club: "club";
  sponsor: "sponsor";
  confection: "confection";
};

export default function LoginOptions() {
  return (
    <View className="flex-1 items-center bg-gray-800 p-8 pt-12">
      <View className="flex w-full flex-row items-start">
        <Link href={"/"}>
          <SquareArrowLeft
            color={colors.yellow[400]}
            width={32}
            height={32}
            strokeWidth={1}
          />
        </Link>
      </View>
      <View className="-mt-12 w-full flex-1 items-center justify-center">
        <View className="mb-6">
          <LogoImg width={130} height={130} />
        </View>
        <View className="w-full gap-5">
          <Button
            label="CLUBES - TIMES"
            testID="login-button-club"
            variant="secondary"
            labelClasses="secondary"
            className="h-12"
            onPress={() => {
              router.navigate("/club-text");
            }}
          />
          <Button
            label="PATROCINADOR"
            testID="login-button-sponsor"
            variant="secondary"
            labelClasses="secondary"
            className="h-12"
            onPress={() => {
              router.navigate("/sponsor-text");
            }}
          />
          <Button
            label="CONFECÇÃO DE UNIFORMES"
            testID="login-button-confection"
            variant="secondary"
            labelClasses="secondary"
            className="h-12"
            onPress={() => {
              router.navigate("/confection-text");
            }}
          />
          <Button
            label="CAMPEONATOS"
            testID="login-button-championships"
            variant="secondary"
            labelClasses="secondary"
            className="h-12"
            onPress={() => {
              router.navigate("/signin");
            }}
          />
        </View>
      </View>
    </View>
  );
}
