import { useContext } from "react";

import { View, Image } from "react-native";
import { MyStyles } from "./styles";

import useForm from "../../hooks/useForm";

import { UserContext } from "../../context/UserContext";

import { Input } from "./../../components/Input";
import { Button } from "./../../components/Button";
import { Message } from "../../components/Message";
import { Header } from "../../components/Header";



export function Login({navigation}) {
  const email = useForm("email");
  const senha = useForm("password");

  const { data, userLogin, message, erro } = useContext(UserContext);

  async function handlePress() {
    if (email.validate() && senha.validate()) {
      userLogin(email.value, senha.value)
      if(!erro) {
        navigation.navigate('Home', {name: 'Home'})
      }
    } 
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
        </View>
        <Message>{message}</Message>
      </View>
    </>
  );
}
