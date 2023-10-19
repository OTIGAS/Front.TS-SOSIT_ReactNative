import { useContext, useEffect } from "react";
import { StyleSheet } from "react-native";
import { ThemaContext } from "../../context/ThemeContext";
import { defaultThemeLight, defaultThemeDark } from "../../themes/default";

export const MyStyles = () => {
  const { theme } = useContext(ThemaContext);

  const defaultTheme = theme === "light" ? defaultThemeLight : defaultThemeDark;

  return StyleSheet.create({
    header: {
      width: "100%",
      height: 80,

      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",

      padding: 15,

      backgroundColor: defaultTheme["color-1"],
    },
    title: {
      color: defaultTheme["color-9"],
      fontSize: 24,
    },
    buttonText: {
      color: defaultTheme["color-1"],
      fontSize: 24,
    },
    button: {
      height: 50,
      width: 50,
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: defaultTheme["blue-500"],
    },
  });
};

export default MyStyles;
