import { Button } from "@/components/Button";
import { router } from "expo-router";
import { Text, View } from "react-native";

import LogoImg from "@/assets/svg/logo.svg";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-800 p-8">
      <View className="mb-6">
        <LogoImg width={130} height={130} />
      </View>
      <View className="w-full gap-5">
        <Button
          label="ACESSE SUA CONTA"
          testID="login-button-signup"
          variant="link"
          labelClasses="link"
          className="h-12"
          onPress={() => {
            router.navigate("/login-options");
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
          testID="login-button-awards"
          variant={"secondary"}
          labelClasses="secondary"
          onPress={() => {
            router.navigate("/awards");
          }}
          className="h-12"
        />
        <View className="my-4 flex flex-row items-center justify-center gap-3">
          <View className="h-0.5 w-36 bg-gray-300" />
          <Text className="text-center font-body text-xl font-semibold text-gray-300">
            Ou
          </Text>
          <View className="h-0.5 w-36 bg-gray-300" />
        </View>
        <Button
          label="CADASTRE-SE"
          testID="login-button-signup"
          variant="link"
          labelClasses="link"
          className="h-12"
          onPress={() => {
            router.navigate("/signup");
          }}
        />
      </View>
    </View>
  );
}
