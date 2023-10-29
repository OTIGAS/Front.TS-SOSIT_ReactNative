import { useContext } from "react";
import { StyleSheet } from "react-native";
import { ThemaContext } from "./../../context/ThemeContext";
import { defaultThemeLight, defaultThemeDark } from "../../themes/default";

export const MyStyles = () => {
  const { theme } = useContext(ThemaContext);

  const defaultTheme = theme === "light" ? defaultThemeLight : defaultThemeDark;

  return StyleSheet.create({
    
  });
};

export default MyStyles;
