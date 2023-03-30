/**
 * Base Layout
 */

import React from "react";
import { Stack } from "expo-router";
import { Provider } from "react-native-paper";
import { ThemeProvider } from "@react-navigation/native";
import getTheme from "../theme";
import { Header } from "../components";

export default function Layout() {
  const theme = getTheme();

  return (
    <Provider theme={theme}>
      <ThemeProvider value={theme}>
        <Stack screenOptions={{ header: (props) => <Header {...props} /> }} />
      </ThemeProvider>
    </Provider>
  );
}
