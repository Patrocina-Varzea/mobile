import { useToast } from "@/components/Toast";
import { colors } from "@/styles/colors";
import * as Clipboard from "expo-clipboard";
import { Link } from "expo-router";
import { SquareArrowLeft } from "lucide-react-native";
import { Text, View } from "react-native";

import LogoImg from "@/assets/svg/logo.svg";

export default function Donations() {
  const { toast } = useToast();

  const copyPix = "51956930000154";
  const copyEmail = "contato@patrocinavarzea.com.br";

  const handleCopyPix = async () => {
    await Clipboard.setStringAsync(copyPix);
    toast("Pix copiado!");
  };

  const handleCopyEmail = async () => {
    await Clipboard.setStringAsync(copyEmail);
    toast("E-mail copiado!");
  };

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
          Doações
        </Text>
        <View className="my-3 items-center justify-center">
          <Text className="text-md text-center font-body text-gray-300">
            Aqui você pode realizar doações para contribuir com a nossa
            inicitiva e para manter nosso app.
          </Text>
        </View>
        <View className="h-0.5 w-80 bg-gray-300" />
      </View>

      <View className="mt-16 w-full flex-1 items-center gap-6">
        <View className="items-center gap-4">
          <Text className="text-center font-subtitle text-xl text-yellow-400">
            Patrocina Várzea Assoc Desp {"\n"}Cultural e Social
          </Text>
          <View className="flex flex-row items-center gap-3">
            <Text className="justify-center font-body  text-gray-100 ">
              Chave pix:
            </Text>
            <Text
              className="justify-center font-subtitle  text-gray-100 underline"
              onPress={() => {
                handleCopyPix();
              }}
            >
              51.956.930/0001-54
            </Text>
          </View>
        </View>

        <View className="h-0.5 w-60 bg-gray-300" />

        <View className="items-center gap-1">
          <Text className="font-subtitle text-gray-100">Dados bancários:</Text>
          <Text className="font-body text-gray-100">403 - Banco Cora S.A.</Text>
          <Text className="font-body text-gray-100">
            Ag: 0001 - C/C: 4264177-1
          </Text>
        </View>
        <View className="h-0.5 w-60 bg-gray-300" />

        <View className="gap-1">
          <Text className="font-body text-gray-100">
            Outras doações, enviar e-mail para:
          </Text>
          <View className="flex flex-row items-center justify-center gap-3">
            <Text
              className="justify-center font-subtitle  text-gray-100 underline"
              onPress={() => {
                handleCopyEmail();
              }}
            >
              contato@patrocinavarzea.com.br
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
