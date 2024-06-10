import { Stack } from "expo-router";

export default function StackLayout() {
  return (
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
      <Stack.Screen name="email-verify" />
    </Stack>
  );
}
