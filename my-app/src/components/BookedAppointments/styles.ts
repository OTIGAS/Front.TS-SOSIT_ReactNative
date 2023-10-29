import { useContext } from "react";
import { StyleSheet } from "react-native";
import { ThemaContext } from "../../context/ThemeContext";
import { defaultThemeLight, defaultThemeDark } from "../../themes/default";

export const MyStyles = () => {
  const { theme } = useContext(ThemaContext);

  const defaultTheme = theme === "light" ? defaultThemeLight : defaultThemeDark;

  return StyleSheet.create({
    mainContainer: {
      height: 80,

      flexWrap: "nowrap",

      marginBottom: 5,

      alignContent: "center",
      justifyContent: "space-around",

      backgroundColor: defaultTheme["red-300"],

      padding: 10,

      borderWidth: 1,
      borderRadius: 5,
      borderBlockColor: defaultTheme["color-9"],
      borderLeftColor: defaultTheme["color-9"],
      borderRightColor: defaultTheme["color-9"],
    },
    title: {
      textAlign: "center",
    },
    subContainer: {
      flexDirection: "row",
      alignContent: "center",
      justifyContent: "space-around",
    },
  });
    
};

export default MyStyles;
