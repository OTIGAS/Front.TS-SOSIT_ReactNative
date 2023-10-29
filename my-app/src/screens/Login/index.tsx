import { useContext } from "react";

import { View, Image, Alert, Text } from "react-native";
import { MyStyles } from "./styles";

import useForm from "../../hooks/useForm";

import { UserContext } from "../../context/UserContext";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Message } from "../../components/Message";
import { Header } from "../../components/Header";

export function Login({navigation}) {
  const email = useForm("email");
  const senha = useForm("password");

  const { data, userLogin, message, erro } = useContext(UserContext);

  const openRegisterAlert = () => {
    Alert.alert(
      "Crie uma conta.",
      "Escolha a forma de cadastro",
      [
        { text: "Cliente", onPress: () => navigation.navigate('CadastroCliente', {name: 'CadastroCliente'}) },
        { text: "Empresa", onPress: () => navigation.navigate('CadastroEmpresa', {name: 'CadastroEmpresa'}) },
        { text: "Cancelar", onPress: () => console.log("Cancelar") },
      ],
      {
        cancelable: true,
      }
    );
  };

  const openForgotMyPasswordAlert = () => {
    Alert.alert(
      "Ligue para o numero :",
      "(19) 9 9527-7858",
      [
        { text: "Ok", onPress: () => console.log("Esqueci minha senha") },
      ],
      {
        cancelable: true,
      }
    );
  };

  async function handlePress() {
    // if (email.validate() && senha.validate()) {
    //   userLogin(email.value, senha.value)
    //   if(!erro) {
    //     navigation.navigate('Home', {name: 'Home'})
    //   }
    // } 
    navigation.navigate('PesquisaCliente', {name: 'PesquisaCliente'})
  }

  const styles = MyStyles();

  return (
    <>
      <Header screen="Login"/>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('./../../assets/logo.png')}
        />
        <View style={styles.sub_container}>
          <Input
            keyboardType="email-address"
            placeholder="E-mail"
            placeholderTextColor="#B9B9B9"
            value={email.value}
            error={email.error}
            onBlur={email.onBlur}
            onChange={email.setValue}
          />

          <Input
            keyboardType="default"
            secureTextEntry={true}
            placeholder="Senha"
            placeholderTextColor="#B9B9B9"
            value={senha.value}
            error={senha.error}
            onBlur={senha.onBlur}
            onChange={senha.setValue}
          />

          <Button onPress={handlePress}>Enviar</Button>

          <Text style={styles.label} onPress={openRegisterAlert}>
            Não tem uma conta? Cadastre-se
          </Text>
          <Text style={styles.label} onPress={openForgotMyPasswordAlert}>
            Esqueci minha senha
          </Text>
        </View>
        <Message>{message}</Message>
      </View>
    </>
  );
}
