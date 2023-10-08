import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>React Native</Text>
      <Text style={styles.eventDate}>React Native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  eventName: {
    color: "#FDFCFE",
    fontSize: 24,
    fontWeight: "bold"
  },
  eventDate: {
    color: "#6B6B6B",
    fontSize: 16
  }
});
