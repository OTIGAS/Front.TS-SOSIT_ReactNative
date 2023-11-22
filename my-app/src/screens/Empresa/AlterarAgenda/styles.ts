import { useContext } from "react";
import { StyleSheet } from "react-native";
import { ThemaContext } from "../../../context/ThemeContext";
import { defaultThemeLight, defaultThemeDark } from "../../../themes/default";

export const MyStyles = () => {
  const { theme } = useContext(ThemaContext);

  const defaultTheme = theme === "light" ? defaultThemeLight : defaultThemeDark;

  return StyleSheet.create({
    mainContainer: {
      flex: 1,
      padding: 30,
      
      alignContent: "center",
      
      backgroundColor: defaultTheme["color-1"],
    },
    label: {
      textAlign: "center",
      
      color: defaultTheme["color-9"],

      fontSize: 16,
      fontWeight: "bold",
    },
    select: {
      width: "100%",
      height: 50,

      backgroundColor: defaultTheme["color-1"],

      borderWidth: 1,
      borderRadius: 5,

      borderBlockColor: defaultTheme["color-9"],
      borderLeftColor: defaultTheme["color-9"],
      borderRightColor: defaultTheme["color-9"],
    },
    selectText: {
      color: defaultTheme["color-9"],
    },
    labelWeek: {
      textAlign: "left",
      color: defaultTheme["color-9"],
    },
    container: {
      padding: 10,

      alignItems: "center",
      justifyContent: "space-between",

      backgroundColor: defaultTheme["color-1"],

      borderWidth: 1,
      borderRadius: 5,

      borderBlockColor: defaultTheme["color-9"],
      borderLeftColor: defaultTheme["color-9"],
      borderRightColor: defaultTheme["color-9"],
    },
    subContainer: {
      flexDirection: "row",
      gap: 10,

      alignItems: "center",
      justifyContent: "space-around",

      backgroundColor: defaultTheme["color-1"],
    },
    labelNull: {
      width: "100%",
      textAlign: "center",
      color: defaultTheme["color-9"],
    },
    labelInfo: {
      textAlign: "center",
      color: defaultTheme["color-9"],
    },
    labelInit: {
      textAlign: "center",
      color: defaultTheme["color-9"],
    },
    labelEnd: {
      textAlign: "center",
      color: defaultTheme["color-9"],
    },
    buttonAddHours: {
      height: 50,

      marginTop: 5,
      marginBottom: 5,

      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: defaultTheme["blue-300"],
    },
    buttonSave: {
      height: 50,

      marginTop: 5,
      marginBottom: 5,

      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: defaultTheme["blue-300"],
    },
    buttonText: {
      textAlign: "center",
      color: defaultTheme["color-9"],
    }
  });
};

export default MyStyles;
