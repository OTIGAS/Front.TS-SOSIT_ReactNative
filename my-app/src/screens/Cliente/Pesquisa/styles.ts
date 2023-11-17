import { useContext } from "react";
import { StyleSheet } from "react-native";
import { ThemaContext } from "../../../context/ThemeContext";
import { defaultThemeLight, defaultThemeDark } from "../../../themes/default";

export const MyStyles = () => {
  const { theme } = useContext(ThemaContext);

  const defaultTheme = theme === "light" ? defaultThemeLight : defaultThemeDark;

  return StyleSheet.create({
    home: {
      flex: 1,
      backgroundColor: defaultTheme["color-1"],
    },
    container: {
      flex: 1,
      padding: 30,
      backgroundColor: defaultTheme["color-1"],
    },
    search: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginLeft: 30,
      marginRight: 30,
      backgroundColor: defaultTheme["color-1"],
    },
    textSearch: {
      fontSize: 20,
      color: defaultTheme["color-9"],
    },
    select: {
      margin: 0,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: defaultTheme["color-1"],
    },
    selectText: {
      color: defaultTheme["color-9"],
    },
    button: {
      width: 56,
      height: 56,
      marginLeft: 5,
      marginBottom: 5,
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: defaultTheme["blue-500"],
    },
  });
};

export default MyStyles;
