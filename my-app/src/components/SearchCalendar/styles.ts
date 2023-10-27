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

      backgroundColor: defaultTheme["color-1"],

      padding: 10,

      borderWidth: 1,
      borderRadius: 5,
      borderBlockColor: defaultTheme["color-9"],
      borderLeftColor: defaultTheme["color-9"],
      borderRightColor: defaultTheme["color-9"],
    },
    subContainer: {
      flexDirection: "row",
      alignContent: "center",
      justifyContent: "space-between",
    },
    typeService: {
      width: "60%",
      textAlign: "right",
      fontWeight: "bold",
      color: defaultTheme["blue-700"],
    },
    typeCompany: {
      width: "40%",
      textAlign: "left",
      fontWeight: "bold",
      color: defaultTheme["blue-700"],
    },
    textOne: {
      width: "40%",
      color: defaultTheme["color-9"],
      textAlign: "left",
    },
    textTwo: {
      width: "60%",
      color: defaultTheme["color-9"],
      textAlign: "right",
    },
  });
};

export default MyStyles;
