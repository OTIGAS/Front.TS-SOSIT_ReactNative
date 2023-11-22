import { useContext } from "react";
import { StyleSheet } from "react-native";
import { ThemaContext } from "../../../context/ThemeContext";
import { defaultThemeLight, defaultThemeDark } from "../../../themes/default";

export const MyStyles = () => {
  const { theme } = useContext(ThemaContext);

  const defaultTheme = theme === "light" ? defaultThemeLight : defaultThemeDark;

  return StyleSheet.create({
    historico: {
      flex: 1,

      backgroundColor: defaultTheme["color-1"],
    },
    buttonCancel: {
      height: 50,

      marginTop: 5,
      marginBottom: 5,

      marginLeft: 30,
      marginRight: 30,

      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: defaultTheme["red-300"],
    },
  });
};

export default MyStyles;
