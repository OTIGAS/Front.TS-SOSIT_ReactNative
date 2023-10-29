import { useContext } from "react";
import { StyleSheet } from "react-native";
import { ThemaContext } from "../../context/ThemeContext";
import { defaultThemeLight, defaultThemeDark } from "../../themes/default";

export const MyStyles = () => {
  const { theme } = useContext(ThemaContext);

  const defaultTheme = theme === "light" ? defaultThemeLight : defaultThemeDark;

  return StyleSheet.create({
    container: {
      flex: 1,

      justifyContent: "space-around",
      alignItems: "center",

      backgroundColor: defaultTheme["color-1"],
      padding: 24,
    },
    sub_container: {
      width: "100%",
    },
    image: {
      width: "100%",
      height: "52%",
    },
    label: {
      marginTop: 10,
      textAlign: "center"
    }
  });
};

export default MyStyles;
