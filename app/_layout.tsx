import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import Auth from "./auth/index";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="auth" options={{ headerShown: false }} />
      <Stack.Screen name="Home" options={{ headerShown: false }} />
      <Stack.Screen name="Chat" options={{ headerShown: false }} />
    </Stack>
  );
};

export default _layout;
