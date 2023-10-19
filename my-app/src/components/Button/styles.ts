import { useContext } from "react";
import { StyleSheet } from "react-native";
import { ThemaContext } from "../../context/ThemeContext";
import { defaultThemeLight, defaultThemeDark } from "../../themes/default";

export const MyStyles = () => {
  const { theme } = useContext(ThemaContext);

  const defaultTheme = theme === "light" ? defaultThemeLight : defaultThemeDark;

  return StyleSheet.create({
    buttonText: {
      fontSize: 24,
      color: defaultTheme['color-1'],
    },
    button: {
      height: 56,
      width: "100%",
      marginTop: 5,
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: defaultTheme['blue-500'],
    },
  });
};

export default MyStyles;