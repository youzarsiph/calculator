/**
 * Global styles
 */

import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  fullScreen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    paddingHorizontal: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
  },
  cell: {
    flex: 1,
    width: "100%",
    marginHorizontal: 8,
    paddingVertical: 8,
  },
});

export default Styles;
