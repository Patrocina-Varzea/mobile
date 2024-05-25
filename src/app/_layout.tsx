import { ToastProvider } from "@/components/Toast";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";

import "../styles/global.css";

SplashScreen.preventAutoHideAsync();

GoogleSignin.configure({
  webClientId:
    "849948842277-cvqdrlmoquqpcb06q43flap0pr2qj183.apps.googleusercontent.com",
});

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ToastProvider>
        <StatusBar style="light" hidden={false} />
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="index" />
          <Stack.Screen name="signup" />
          <Stack.Screen name="club-text" />
          <Stack.Screen name="sponsor-text" />
          <Stack.Screen name="confection-text" />
          <Stack.Screen name="ads" />
          <Stack.Screen name="donations" />
          <Stack.Screen name="awards" />
        </Stack>
      </ToastProvider>
    </GestureHandlerRootView>
  );
}
