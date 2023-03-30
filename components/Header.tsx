/**
 * Header
 */

import React from "react";
import { Appbar, Menu, useTheme } from "react-native-paper";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

export default function Header(props: NativeStackHeaderProps) {
  const theme = useTheme();
  const [visible, setVisible] = React.useState(false);

  return (
    <Appbar.Header dark style={{ backgroundColor: theme.colors.primary }}>
      {props.back && (
        <Appbar.BackAction onPress={() => props.navigation.goBack()} />
      )}

      <Appbar.Content title={props.options.title || props.route.name} />

      {!props.back && (
        <>
          <Appbar.Action
            icon={"history"}
            onPress={() => props.navigation.navigate("History")}
          />
          <Menu
            visible={visible}
            onDismiss={() => setVisible(false)}
            anchor={
              <Appbar.Action
                icon="dots-vertical"
                onPress={() => setVisible(true)}
              />
            }
          >
            <Menu.Item
              title="Settings"
              leadingIcon={"cog"}
              onPress={() => {
                props.navigation.navigate("Settings");
                setVisible(false);
              }}
            />
            <Menu.Item onPress={() => {}} title="Item 2" />
            <Menu.Item onPress={() => {}} title="Item 3" />
          </Menu>
        </>
      )}
    </Appbar.Header>
  );
}
