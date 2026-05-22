import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack>
        <Stack.Screen name="index" options={{ title: "index" }} />
        <Stack.Screen name="dashboard" options={{ title: "dashboard" }} />
        <Stack.Screen name="form" options={{ title: "form" }} />
        <Stack.Screen name="contoh" options={{ title: "contoh" }} />
        <Stack.Screen name="abra" options={{ title: "abra" }} />
      </Stack>
    </>
  );
}
