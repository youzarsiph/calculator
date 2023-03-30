/**
 * Home Screen
 */

import React from "react";
import { View } from "react-native";
import { Stack } from "expo-router";
import { Text } from "react-native-paper";

export default function Home() {
  return (
    <View>
      <Stack.Screen options={{ title: "Calculator" }} />
      <Text>Home Screen</Text>
    </View>
  );
}
