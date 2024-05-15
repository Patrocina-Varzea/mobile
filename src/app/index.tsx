import { Button } from "@/components/Button";
import { router } from "expo-router";
import { View } from "react-native";

import LogoImg from "@/assets/svg/logo.svg";

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
          size="lg"
        />
        <Button
          label="CLUBES - TIMES"
          testID="login-button-club"
          variant="secondary"
          labelClasses="secondary"
          size="lg"
        />
        <Button
          label="PATROCINADOR"
          testID="login-button-sponsor"
          variant="secondary"
          labelClasses="secondary"
          size="lg"
        />
        <Button
          label="CONFECÇÃO DE UNIFORMES"
          testID="login-button-sonfection"
          variant="secondary"
          labelClasses="secondary"
          size="lg"
        />
        <Button
          label="ANÚNCIOS - PUBLICAÇÕES"
          testID="login-button-ads"
          variant="secondary"
          labelClasses="secondary"
          size="lg"
        />
        <Button
          label="DOAÇÕES"
          testID="login-button-donation"
          variant="secondary"
          labelClasses="secondary"
          size="lg"
        />
        <Button
          label="PRÊMIOS - SORTEIOS"
          testID="login-button-award"
          variant="secondary"
          labelClasses="secondary"
          size="lg"
          onPress={() => {
            router.navigate("/awards");
          }}
        />
      </View>
    </View>
  );
}
