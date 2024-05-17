import { Button } from "@/components/Button";
import { router } from "expo-router";
import { View } from "react-native";

import LogoImg from "@/assets/svg/logo.svg";

type Params = {
  club: "club";
  sponsor: "sponsor";
  confection: "confection";
};

export default function LoginOptions() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-900 p-8">
      <View className="mb-6">
        <LogoImg width={150} height={150} />
      </View>
      <View className="w-full gap-5">
        <Button
          label="CADASTRE-SE"
          testID="login-button-signup"
          variant="link"
          labelClasses="link"
          className="h-12"
        />
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
          testID="login-button-sonfection"
          variant="secondary"
          labelClasses="secondary"
          className="h-12"
          onPress={() => {
            router.navigate("/confection-text");
          }}
        />
        <Button
          label="ANÚNCIOS - PUBLICAÇÕES"
          testID="login-button-ads"
          variant="secondary"
          labelClasses="secondary"
          className="h-12"
          onPress={() => {
            router.navigate("/ads");
          }}
        />
        <Button
          label="DOAÇÕES"
          testID="login-button-donation"
          variant="secondary"
          labelClasses="secondary"
          onPress={() => {
            router.navigate("/donations");
          }}
          className="h-12"
        />
        <Button
          label="PRÊMIOS - SORTEIOS"
          testID="login-button-award"
          variant={"secondary"}
          labelClasses="secondary"
          onPress={() => {
            router.navigate("/awards");
          }}
          className="h-12"
        />
      </View>
    </View>
  );
}
