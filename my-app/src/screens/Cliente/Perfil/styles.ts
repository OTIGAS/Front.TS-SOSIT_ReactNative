import { useContext } from "react";
import { StyleSheet } from "react-native";
import { ThemaContext } from "../../../context/ThemeContext";
import { defaultThemeLight, defaultThemeDark } from "../../../themes/default";

export const MyStyles = () => {
  const { theme } = useContext(ThemaContext);

  const defaultTheme = theme === "light" ? defaultThemeLight : defaultThemeDark;

  return StyleSheet.create({
    perfil: {
      flex: 1,
      backgroundColor: defaultTheme["color-1"],
      padding: 30,
    },
    title: {
      fontSize: 20,
      marginTop: 5,
      backgroundColor: defaultTheme["color-9"],
    },
    buttonSave: {
      height: 50,

      marginTop: 5,
      marginBottom: 5,

      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: defaultTheme["blue-500"],
    },
    buttonLogout: {
      height: 50,

      marginTop: 5,
      marginBottom: 5,

      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: defaultTheme["red-300"],
    },
    buttonDelete: {
      height: 50,

      marginTop: 5,
      marginBottom: 5,

      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: defaultTheme["red-500"],
    },
    label: {
      color: defaultTheme["color-9"],
    },
  });
};

export default MyStyles;
