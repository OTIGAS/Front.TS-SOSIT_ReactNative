import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

export function AuthenticationCliente() {
  const [email, setEmail] = useState<string | null>("");
  const [senha, setSenha] = useState<string | null>("");

  const [message, setMessage] = useState<string | null>("");

  function handleClick() {
    if (!email || !senha) {
      setMessage("Preencha todos os parâmetros.");
    }

    fetch("http://10.5.17.9:3333/usuario/autenticar", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          email,
          senha,
        },
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
        if (json.mensagem) {
          setMessage(json.mensagem);
        } else if (json.erro) {
          setMessage(json.erro);
        } else {
          setMessage("Falha na requisição.");
        }
      });
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Autenticação</Text>

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#6B6B6B"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#B9B9B9"
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity style={styles.button} onPress={handleClick}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>

        <Text style={styles.message}>{message}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#FFF",
    padding: 24,
  },
  title: {
    fontSize: 24,
  },
  input: {
    height: 56,
    width: "100%",

    borderRadius: 5,

    backgroundColor: "#1F1E25",
    color: "#FFFF",

    padding: 16,
    marginBottom: 5,

    fontSize: 16,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 24,
  },
  button: {
    height: 56,
    width: "100%",
    borderRadius: 5,
    backgroundColor: "#31CF67",
    alignItems: "center",
    justifyContent: "center",
  },
  message: {},
});
