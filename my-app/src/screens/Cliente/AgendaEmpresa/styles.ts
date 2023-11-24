import { useContext } from "react";
import { StyleSheet } from "react-native";
import { ThemaContext } from "../../../context/ThemeContext";
import { defaultThemeLight, defaultThemeDark } from "../../../themes/default";

export const MyStyles = () => {
  const { theme } = useContext(ThemaContext);

  const defaultTheme = theme === "light" ? defaultThemeLight : defaultThemeDark;

  return StyleSheet.create({
    container: {
      width: "100%",
      padding: 30,
    },
    mainContainer: {
      flex: 1,

      padding: 30,
    },
    button: {
      height: 50,

      marginTop: 5,
      marginBottom: 5,

      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: defaultTheme["blue-500"],
    },
  });
};

export default MyStyles;
