import { Button } from "@/components/Button";
import Header from "@/components/Header";
import { colors } from "@/styles/colors";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { Power } from "lucide-react-native";
import { Text, View } from "react-native";

export default function Home() {
  async function handleGoogleSignOut() {
    try {
      const userInfo = await GoogleSignin.signOut();
      console.log(userInfo);
    } catch (error: any) {
      console.log("ERROR: ", error.code, " - ", error.message);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  }

  return (
    <View className="flex-1 items-center justify-center bg-gray-900 pt-10">
      <Header />
      <View className="flex-1">
        <Text className="text-center font-heading text-3xl text-yellow-400">
          Home
        </Text>
        <Button
          label="Signout"
          className="m-10 bg-red-600"
          icon={<Power color={colors.white} size={18} />}
          onPress={() => {
            handleGoogleSignOut();
          }}
        />
      </View>
    </View>
  );
}
