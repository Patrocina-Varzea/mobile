import { colors } from "@/styles/colors";
import { FilePenLine } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tabs";
import InfoChampionshiop from "./InfoChampionship";
import InfoClub from "./InfoClub";
import InfoConfection from "./InfoConfection";
import InfoSponsor from "./InfoSponsor";

type Props = {
  type?: "club" | "sponsor" | "confection" | "championship";
};

export default function TabsInformation({ type }: Props) {
  const isChampionship = type === "championship" ? true : false;
  return (
    <Tabs defaultValue="personal">
      <TabsList>
        <TabsTrigger
          id="personal"
          title={isChampionship ? "Infos. Organizador" : "Infos. Pessoais"}
          value="personal"
        />
        <TabsTrigger id="address" title="Endereço" value="address" />
        <TabsTrigger id="general" title="Infos. Gerais" value="general" />
      </TabsList>
      <TabsContent value="personal" className="gap-4">
        {!isChampionship && (
          <>
            <View className="flex flex-row gap-2">
              <Text className="font-subtitle text-base text-white">Nome:</Text>
              <Text className="line-clamp-2 font-body text-base text-white">
                Raphael Renato Medeiros da Matta
              </Text>
            </View>
            <View className="flex flex-row gap-2">
              <Text className="font-subtitle text-base text-white">
                CPF / CNPJ:
              </Text>
              <Text className="font-body text-base text-white">
                282.253.320-24
              </Text>
            </View>
          </>
        )}
        <View className="flex flex-row gap-2">
          <Text className="font-subtitle text-base text-white">E-mail:</Text>
          <Text className="font-body text-base text-white">
            contato@gmail.com
          </Text>
        </View>
        <View className="flex flex-row gap-2">
          <Text className="font-subtitle text-base text-white">Contato:</Text>
          <Text className="font-body text-base text-white">Raphael Renato</Text>
        </View>
        <View className="flex flex-row gap-2">
          <Text className="font-subtitle text-base text-white">Telefone:</Text>
          <Text className="font-body text-base text-white">
            (11) 98999-5566
          </Text>
        </View>
        <View className="mt-2 items-center justify-center">
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: colors.yellow[400],
              borderRadius: 6,
              padding: 4,
            }}
            onPress={() => {}}
          >
            <FilePenLine color={colors.yellow[400]} strokeWidth={1.5} />
          </TouchableOpacity>
        </View>
      </TabsContent>
      <TabsContent value="address" className="gap-4">
        <View className="flex flex-row gap-2">
          <Text className="font-subtitle text-base text-white">CEP:</Text>
          <Text className="line-clamp-2 font-body text-base text-white">
            13609-200
          </Text>
        </View>
        <View className="flex flex-row gap-2">
          <Text className="font-subtitle text-base text-white">Rua:</Text>
          <Text className="line-clamp-2 font-body text-base text-white">
            Paulo Marques de Figueiredo
          </Text>
        </View>
        <View className="flex flex-row gap-2">
          <Text className="font-subtitle text-base text-white">N:</Text>
          <Text className="font-body text-base text-white">12</Text>
        </View>
        <View className="flex flex-row gap-2">
          <Text className="font-subtitle text-base text-white">Contato:</Text>
          <Text className="line-clamp-2 font-body text-base text-white">
            Raphael Renato
          </Text>
        </View>
        <View className="flex flex-row gap-2">
          <Text className="font-subtitle text-base text-white">Bairro:</Text>
          <Text className="line-clamp-2 font-body text-base text-white">
            Jd. 8 de abril
          </Text>
        </View>
        <View className="flex flex-row gap-2">
          <Text className="font-subtitle text-base text-white">Cidade:</Text>
          <Text className="font-body text-base text-white">São Paulo - SP</Text>
        </View>
        <View className="flex flex-row gap-2">
          <Text className="line-clamp-2 font-subtitle text-base text-white">
            Complemento:
          </Text>
          <Text className="font-body text-base text-white">KM 149</Text>
        </View>
      </TabsContent>
      <TabsContent value="general" className="gap-4">
        {type === "club" && <InfoClub />}
        {type === "championship" && <InfoChampionshiop />}
        {type === "sponsor" && <InfoSponsor />}
        {type === "confection" && <InfoConfection />}
      </TabsContent>
    </Tabs>
  );
}
