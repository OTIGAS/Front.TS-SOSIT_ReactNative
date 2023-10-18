import { View } from "react-native";

import { Login } from "./src/screens/Login";

import { UserStorage } from "./src/context/UserContext";

export default function App() {
  return (
    <UserStorage>
      <View>
        <Login />
      </View>
    </UserStorage>
  );
}
