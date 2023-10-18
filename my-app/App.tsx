import { View } from "react-native";
import { StyleSheet, SafeAreaView } from "react-native";

import { Login } from "./src/screens/Login";

import { UserStorage } from "./src/context/UserContext";

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <UserStorage>    
        <Login />
      </UserStorage>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    marginTop: 30,
    backgroundColor: "blue",
  }
});