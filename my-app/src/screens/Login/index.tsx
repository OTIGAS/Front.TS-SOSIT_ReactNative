import { useState, useContext } from "react";

import { View } from "react-native";
import { styles } from "./styles";

import useForm from "../../hooks/useForm";

import { UserContext } from "../../context/UserContext";

import { Input } from "./../../components/Input";
import { Button } from "./../../components/Button";
import { Message } from "../../components/Message";
import { Header } from "../../components/Header";

export function Login() {
  const email = useForm("email");
  const senha = useForm("password");

  const { data, userLogin, message } = useContext(UserContext);

  async function handlePress() {
    if (email.validate() && senha.validate()) {
      userLogin(email.value, senha.value)
      console.log(data)
    } 
  }

  return (
    <>
      <Header />
      <View style={styles.container}>
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

        <Message>{message}</Message>
      </View>
    </>
  );
}
