import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { colors } from "@/styles/colors";
import { Link } from "expo-router";
import { SquareArrowLeft } from "lucide-react-native";
import { ScrollView, Text, View } from "react-native";

import LogoImg from "@/assets/svg/logo.svg";

export default function Signin() {
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
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 8,
        }}
      >
        <View className="w-full flex-1 items-center justify-center gap-4 px-8">
          <Text className="mb-3 font-heading text-2xl text-yellow-400">
            Acesse sua conta
          </Text>
          <Input placeholder="E-mail" />
          <Input placeholder="Senha" />

          <Button label="Acessar conta" />

          <View className="my-4 flex flex-row items-center justify-center gap-3">
            <View className="h-0.5 w-36 bg-gray-300" />
            <Text className="text-center font-body text-xl font-bold text-gray-300">
              Ou
            </Text>
            <View className="h-0.5 w-36 bg-gray-300" />
          </View>

          <Button
            label="Acessar com Google"
            className="bg-red-600"
            labelClasses="text-white"
          />
          <Button
            label="Acessar com Facebook"
            className="bg-blue-700"
            labelClasses="text-white"
          />
        </View>
      </ScrollView>
    </View>
  );
}
