import { useContext, useEffect } from "react";
import { StyleSheet } from "react-native";
import { ThemaContext } from "../../context/ThemeContext";
import { defaultThemeLight, defaultThemeDark } from "../../themes/default";

export const MyStyles = () => {
  const { theme } = useContext(ThemaContext);

  const defaultTheme = theme === "light" ? defaultThemeLight : defaultThemeDark;

  return StyleSheet.create({
    footer: {
      width: "100%",
      height: 80,

      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",

      padding: 15,

      backgroundColor: defaultTheme["color-1"],
    },
    button: {
      height: 50,
      width: 80,
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: defaultTheme["blue-300"],
    },
    images: {},
  });
};

export default MyStyles;
