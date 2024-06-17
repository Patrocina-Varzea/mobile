import Header from "@/components/Header";
import TabsInformation from "@/components/TabsInformation";
import { View } from "react-native";

import LogoImg from "@/assets/svg/logo.svg";

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-900 pt-10">
      <Header user="Raphael Teste" />
      <View className="flex-1 px-8 pb-24">
        <TabsInformation type="championship" />
        <View className="mb-6 flex-1 items-center justify-center">
          <LogoImg width={120} height={120} />
        </View>
      </View>
    </View>
  );
}
