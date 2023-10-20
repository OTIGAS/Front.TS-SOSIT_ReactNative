import { useContext } from "react";
import { StyleSheet } from "react-native";
import { ThemaContext } from "../../context/ThemeContext";
import { defaultThemeLight, defaultThemeDark } from "../../themes/default";

export const MyStyles = () => {
  const { theme } = useContext(ThemaContext);

  const defaultTheme = theme === "light" ? defaultThemeLight : defaultThemeDark;

  return StyleSheet.create({
    modal: {
      width: "100%",
      height: "100%",
    },
    box: {
      position: "absolute",
      top: 300,
      left: 60,
      width: 270,
      height: 230,
      backgroundColor: "#1f2937",
    },
    centro: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    icone: {
      marginTop: 20,
    },
    titulo: {
      color: "white",
      fontSize: 30,
    },
    paragrafo: {
      fontStyle: "italic",
      color: "white",
      marginTop: 20,
    },
  });
};

export default MyStyles;