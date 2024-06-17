import { Avatar, AvatarFallback, AvatarImage } from "@/components/Avatar";
import TabsInformation from "@/components/TabsInformation";
import { View } from "react-native";

import SignOut from "@/components/SignOut";

export default function Profile() {
  return (
    <View className="flex-1 items-center gap-4 bg-gray-900 px-8 pb-24 pt-12">
      <View className="flex-1 items-center">
        <Avatar className="h-28 w-28">
          <AvatarImage
            source={{ uri: "https://www.github.com/rapharenatoo.png" }}
          />
          <AvatarFallback textClassname="text-gray-300">RR</AvatarFallback>
        </Avatar>
        <View className="mt-8 items-center">
          <TabsInformation type="club" />
        </View>
      </View>
      <SignOut />
    </View>
  );
}
