import { useContext } from "react";
import { StyleSheet } from "react-native";
import { ThemaContext } from "./../../context/ThemeContext";
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
      marginLeft: 30,
      marginRight: 30,

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
