import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 80,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    padding: 15,

    backgroundColor: "#1d4ed8",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 24,
  },
  button: {
    height: 50,
    width: 50,
    borderRadius: 5,
    backgroundColor: "#ef4444",
    alignItems: "center",
    justifyContent: "center",
  },
});
