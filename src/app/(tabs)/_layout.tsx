import { colors } from "@/styles/colors";
import { Tabs } from "expo-router";
import { HandCoins, Home, Trophy, UserRound } from "lucide-react-native";
import { Platform } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.yellow[400],
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          borderTopWidth: 0,
          height: Platform.OS === "android" ? 60 : 96,
          paddingBottom: 4,
          paddingTop: 4,
          marginHorizontal: 12,
          marginBottom: 12,
          backgroundColor: colors.gray[600],
          borderRadius: 40,
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="championships"
        options={{
          tabBarIcon: ({ color, size }) => <Trophy color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="donations"
        options={{
          tabBarIcon: ({ color, size }) => (
            <HandCoins color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, size }) => (
            <UserRound color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
