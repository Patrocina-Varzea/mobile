import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tabs";
import { Text, View } from "react-native";

export default function TabsInformation() {
  return (
    <Tabs defaultValue="personal">
      <TabsList>
        <TabsTrigger id="personal" title="Infos. Pessoais" value="personal" />
        <TabsTrigger id="address" title="Endereço" value="address" />
        <TabsTrigger id="general" title="Infos. Gerais" value="general" />
      </TabsList>
      <TabsContent value="personal" className="gap-4">
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
          <Text className="font-body text-base text-white">282.253.320-24</Text>
        </View>
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
        <View className="flex flex-row gap-2">
          <Text className="font-subtitle text-base text-white">
            Deseja patrocinar?
          </Text>
          <Text className="line-clamp-2 font-body text-base text-white">
            SIM
          </Text>
        </View>
        <View className="flex flex-row gap-2">
          <Text className="font-subtitle text-base text-white">
            Categoria(s):
          </Text>
          <Text className="line-clamp-2 font-body text-base text-white">
            Sport
          </Text>
        </View>
        <View className="flex flex-row gap-2">
          <Text className="font-subtitle text-base text-white">
            Tipo de patrocínio:
          </Text>
          <Text className="line-clamp-2 font-body text-base text-white">
            Manga Frente Costas Troféu
          </Text>
        </View>
      </TabsContent>
    </Tabs>
  );
}
