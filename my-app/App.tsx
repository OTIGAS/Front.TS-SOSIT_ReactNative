import { StyleSheet, SafeAreaView } from "react-native";

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { Login } from "./src/screens/Login";

import { CadastroC } from "./src/screens/Cliente/Cadastro";
import { PerfilC } from "./src/screens/Cliente/Perfil";
import { PesquisaC } from "./src/screens/Cliente/Pesquisa";
import { HistoricoC } from "./src/screens/Cliente/Historico";
import { AgendaEmpresaC } from "./src/screens/Cliente/AgendaEmpresa";

import { CadastroE } from "./src/screens/Empresa/Cadastro";
import { PerfilE } from "./src/screens/Empresa/Perfil";
import { PesquisaE } from "./src/screens/Empresa/Pesquisa";
import { HistoricoE } from "./src/screens/Empresa/Historico";
import { AgendaEmpresaE } from "./src/screens/Empresa/AgendaEmpresa";
import { CadastroAgendaE } from "./src/screens/Empresa/CadastroAgenda";
import { AlterarAgendaE } from "./src/screens/Empresa/AlterarAgenda";

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

              <Stack.Screen name="PesquisaCliente" component={PesquisaC} />
              <Stack.Screen name="PerfilCliente" component={PerfilC} />
              <Stack.Screen name="HistoricoCliente" component={HistoricoC} />
              <Stack.Screen name="CadastroCliente" component={CadastroC} />
              <Stack.Screen name="AgendaEmpresaCliente" component={AgendaEmpresaC} />

              <Stack.Screen name="PesquisaEmpresa" component={PesquisaE} />
              <Stack.Screen name="PerfilEmpresa" component={PerfilE} />
              <Stack.Screen name="HistoricoEmpresa" component={HistoricoE} />
              <Stack.Screen name="CadastroEmpresa" component={CadastroE} />
              <Stack.Screen name="AgendaEmpresa" component={AgendaEmpresaE} />
              <Stack.Screen name="CadastroAgenda" component={CadastroAgendaE} />
              <Stack.Screen name="AlterarAgenda" component={AlterarAgendaE} />
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