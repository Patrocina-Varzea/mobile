import { colors } from "@/styles/colors";
import { router } from "expo-router";
import { MousePointerClick, ReceiptText } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { Dialog, DialogContent, DialogTrigger } from "./Dialog";

import FacebookIcon from "@/assets/svg/facebook.svg";
import InstagramIcon from "@/assets/svg/instagram.svg";

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

export default function DetailsClub() {
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
      <DialogContent className="min-w-[320px] max-w-96">
        <View className="flex gap-3">
          <View className="flex flex-row pr-1">
            <Text className="line-clamp-2 font-heading text-xl text-yellow-400">
              Huters Futebol Clube
            </Text>
          </View>
          <View className="mb-3 flex flex-row gap-2 pr-1">
            <Text className="font-subtitle text-base text-white">
              CPF / CNPJ:
            </Text>
            <Text className="line-clamp-2 font-body text-base text-white">
              867.902.745-61
            </Text>
          </View>

          <View className="flex flex-row gap-2 pr-1">
            <Text className="font-subtitle text-base text-white">Cidade:</Text>
            <Text className="line-clamp-2 font-body text-base text-white">
              São Paulo - SP
            </Text>
          </View>

          <View className="mb-3 flex flex-row gap-2">
            <Text className="font-subtitle text-base text-white">Região:</Text>
            <Text className="font-body text-base text-white">Zona Sul</Text>
          </View>

          <View className="flex flex-row gap-2">
            <Text className="font-subtitle text-base text-white">Cores:</Text>
            <Text className="font-body text-base text-white">
              Vermelho / Branco
            </Text>
          </View>

          <View className="mb-3 flex flex-row gap-2">
            <Text className="font-subtitle text-base text-white">
              Categoria:
            </Text>
            <Text className="line-clamp-2 pr-1 font-body text-base text-white">
              Juvenil
            </Text>
          </View>

          <View className="flex flex-row gap-2">
            <Text className="font-subtitle text-base text-white">
              Data de fundação:
            </Text>
            <Text className="line-clamp-2 pr-1 font-body text-base text-white">
              20/09/2021
            </Text>
          </View>

          <View className="flex flex-row gap-2">
            <Text className="font-subtitle text-base text-white">
              Deseja ser patrocinado?
            </Text>
            <Text className="line-clamp-2 pr-1 font-body text-base text-white">
              Sim
            </Text>
          </View>

          <View className="flex flex-row gap-2">
            <Text className="font-subtitle text-base text-white">
              Já tem patrocínio?
            </Text>
            <Text className="line-clamp-2 pr-1 font-body text-base text-white">
              Não
            </Text>
          </View>

          <View className="mb-3 flex flex-row gap-2">
            <Text className="font-subtitle text-base text-white">
              Tem campo próprio?
            </Text>
            <Text className="line-clamp-2 pr-1 font-body text-base text-white">
              Não
            </Text>
          </View>

          <View className="flex flex-row items-center gap-2">
            <InstagramIcon width={18} height={18} />
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
          <View className="flex flex-row items-center gap-2">
            <FacebookIcon width={18} height={18} />
            <Text
              className="font-heading text-base text-white underline"
              onPress={() => {
                router.navigate("https://www.facebook.com/copaferradura/");
              }}
            >
              copa.ferradura
            </Text>
            <MousePointerClick
              color={colors.yellow[400]}
              width={16}
              height={16}
              strokeWidth={1}
            />
          </View>
        </View>
      </DialogContent>
    </Dialog>
  );
}
