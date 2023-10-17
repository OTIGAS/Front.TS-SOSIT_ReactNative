import { useState } from "react";

import { View } from "react-native";
import { styles } from "./styles";

import useForm from "../../hooks/useForm";
import useFetch from "../../hooks/useFetch";

import { Input } from "./../../components/Input";
import { Button } from "./../../components/Button";
import { Message } from "../../components/Message";

import { Authentication } from "../../api";

type IResponse = {
  tipo: "cliente" | "empresa";
  token: string;
  mensagem: string;
}

export function Login() {
  const email = useForm("email")
  const senha = useForm("password")

  const [tipo, setTipo] = useState<string | null>("");
  const [token, setToken] = useState<string | null>("");

  const [message, setMessage] = useState<string | null>("");

  async function handlePress() {
    if (email.validate() && senha.validate()) {
      const { url, options } = Authentication({ 
        email: email.value, 
        senha: senha.value 
      });
  
      const response = useFetch<IResponse>(url, options);

      console.log(response)
  
      // if (json.mensagem) {
      //   setTipo(json.tipo);
      //   setToken(json.token);
      //   setMessage(json.mensagem);
      // } else if (json.erro) {
      //   setMessage(json.erro);
      // } else {
      //   setMessage("Falha na requisição.");
      // }
    } else {
      setMessage("Preencha todos os campos.");
    }
  }

  return (
    <>
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
