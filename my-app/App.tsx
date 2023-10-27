import { StyleSheet, SafeAreaView } from "react-native";

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { Login } from "./src/screens/Login";
import { Perfil } from "./src/screens/Cliente/Perfil";
import { Pesquisa } from "./src/screens/Cliente/Pesquisa";
import { Historico } from "./src/screens/Cliente/Historico";

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
              <Stack.Screen name="PesquisaCliente" component={Pesquisa} />
              <Stack.Screen name="PerfilCliente" component={Perfil} />
              <Stack.Screen name="HistoricoCliente" component={Historico} />
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
  }
});