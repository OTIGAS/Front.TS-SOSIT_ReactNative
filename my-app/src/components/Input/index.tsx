import { useContext } from "react";
import { StyleSheet } from "react-native";
import { ThemaContext } from "../../context/ThemeContext";
import { defaultThemeLight, defaultThemeDark } from "../../themes/default";

export const MyStyles = () => {
  const { theme } = useContext(ThemaContext);

  const defaultTheme = theme === "light" ? defaultThemeLight : defaultThemeDark;

  return StyleSheet.create({
    input: {
      flexGrow: 1,
      height: 56,
  
      borderRadius: 5,
      borderColor: defaultTheme['color-9'],
      borderWidth: 1,

      color: defaultTheme['color-7'],
      backgroundColor: defaultTheme['color-1'],
  
      padding: 16,
      marginBottom: 5,
  
      fontSize: 16,
    },
    error: {
      color: "red"
    }
  });
};

export default MyStyles;