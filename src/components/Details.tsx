import { colors } from "@/styles/colors";
import { MousePointerClick, ReceiptText } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { Dialog, DialogContent, DialogTrigger } from "./Dialog";

import InstagramIcon from "@/assets/svg/instagram.svg";
import { router } from "expo-router";

type Props = {
  name?: string;
  organizer?: string;
  date?: string;
  quantity?: number;
  address?: {
    zipCode: string;
    street: string;
    number: string;
    city: string;
    state: string;
    neighborhood: string;
    complement: string;
  };
  region?: string;
  instagram?: string;
  cashRewards?: number;
  otherRewards?: string;
};

export default function Details() {
  return (
    <Dialog>
      <DialogTrigger>
        <TouchableOpacity
          style={{
            backgroundColor: colors.gray[200],
            paddingHorizontal: 6,
            paddingVertical: 4,
            borderRadius: 6,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {}}
        >
          <ReceiptText color={colors.gray[400]} size={12} />
          <Text className="ml-1 font-body text-sm text-gray-400">Detalhes</Text>
        </TouchableOpacity>
      </DialogTrigger>
      <DialogContent className="max-w-96">
        <View className="flex gap-3">
          <View className="flex flex-row pr-1">
            <Text className="line-clamp-2 font-heading text-xl text-yellow-400">
              Copa Patrocina Várzea
            </Text>
          </View>
          <View className="flex flex-row gap-2 pr-1">
            <Text className="font-subtitle text-base text-white">
              Organizador:
            </Text>
            <Text className="line-clamp-2 font-body text-base text-white">
              Valter Fernadez
            </Text>
          </View>

          <View className="flex flex-row gap-2">
            <Text className="font-subtitle text-base text-white">Data:</Text>
            <Text className="font-body text-base text-white">27/10/2024</Text>
          </View>

          <View className="flex flex-row gap-2">
            <Text className="font-subtitle text-base text-white">
              Quantidade de times:
            </Text>
            <Text className="font-body text-base text-white">12</Text>
          </View>

          <View className="flex flex-row gap-2">
            <Text className="font-subtitle text-base text-white">CEP:</Text>
            <Text className="font-body text-base text-white">02423-120</Text>
          </View>

          <View className="px flex flex-row gap-2 pr-1">
            <Text className="font-subtitle text-base text-white">End.:</Text>
            <Text className="line-clamp-2 font-body text-base text-white">
              Rua Hamleto Raffaelli, 44, Jd 8 de Abril
            </Text>
          </View>

          <View className="flex flex-row gap-2 pr-1">
            <Text className="font-subtitle text-base text-white">Cidade:</Text>
            <Text className="line-clamp-2 font-body text-base text-white">
              São Paulo - SP
            </Text>
          </View>

          <View className="flex flex-row gap-2">
            <Text className="font-subtitle text-base text-white">Região:</Text>
            <Text className="font-body text-base text-white">Zona Sul</Text>
          </View>

          <View className="flex flex-row items-center gap-2">
            <Text className="font-subtitle text-base text-white">
              Instagram:
            </Text>
            <InstagramIcon width={12} height={12} />
            <Text
              className="font-heading text-base text-white underline"
              onPress={() => {
                router.navigate("https://www.instagram.com/copaferradura/");
              }}
            >
              copaferradura
            </Text>
            <MousePointerClick
              color={colors.yellow[400]}
              width={16}
              height={16}
              strokeWidth={1}
            />
          </View>

          <View className="flex flex-row gap-2">
            <Text className="font-subtitle text-base text-white">
              Prêmio em dinheiro:
            </Text>
            <Text className="font-body text-base text-white">R$ 14.250,00</Text>
          </View>

          <View className="flex flex-row gap-2">
            <Text className="font-subtitle text-base text-white">
              Outras premiações:
            </Text>
            <Text className="line-clamp-2 pr-1 font-body text-base text-white">
              Troféu Medalhas
            </Text>
          </View>
        </View>
      </DialogContent>
    </Dialog>
  );
}
