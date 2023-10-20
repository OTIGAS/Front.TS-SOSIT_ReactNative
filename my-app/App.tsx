import { StyleSheet, SafeAreaView } from "react-native";

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { Login } from "./src/screens/Login";
import { Home } from "./src/screens/Home";

import { ThemaStorage } from "./src/context/ThemeContext";
import { UserStorage } from "./src/context/UserContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      
          <NavigationContainer >
            <UserStorage>
              <ThemaStorage>
                <Stack.Navigator screenOptions={{ headerShown:false}}>
                  <Stack.Screen name="Login" component={Login} />
                  <Stack.Screen name="Home" component={Home} />
                </Stack.Navigator>
              </ThemaStorage>    
            </UserStorage>
          </NavigationContainer>
        
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