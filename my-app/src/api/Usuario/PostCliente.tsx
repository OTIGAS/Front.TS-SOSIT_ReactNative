import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

export function PostCliente() {
  const [nome, setNome] = useState<string | null>("");
  const [email, setEmail] = useState<string | null>("");
  const [senha, setSenha] = useState<string | null>("");
  const [telefone, setTelefone] = useState<string | null>("");
  const [nomeContato, setNomeContato] = useState<string | null>("");
  const [emailContato, setEmailContato] = useState<string | null>("");

  const [message, setMessage] = useState<string | null>("");

  function handleClick() {
    if (
      !nome ||
      !email ||
      !senha ||
      !telefone ||
      !nomeContato ||
      !emailContato
    ) {
      setMessage("Preencha todos os parâmetros.");
    }

    fetch("http://192.168.1.3:3333/usuario/cliente", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          usuario: {
            nome,
            email,
            senha,
          },
          contato: {
            telefone,
            nome_contato: nomeContato,
            email_contato: emailContato,
          },
        },
      }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
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

        <Text style={styles.title}>Cadastro de Cliente</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome"
          placeholderTextColor="#6B6B6B"
          value={nome}
          onChangeText={setNome}
        />

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
          placeholderTextColor="#6B6B6B"
          value={senha}
          onChangeText={setSenha}
        />

        <TextInput
          style={styles.input}
          placeholder="Telefone"
          placeholderTextColor="#6B6B6B"
          value={telefone}
          onChangeText={setTelefone}
          defaultValue="Telefone"
        />

        <TextInput
          style={styles.input}
          placeholder="Nome do Contato"
          placeholderTextColor="#6B6B6B"
          value={nomeContato}
          onChangeText={setNomeContato}
          defaultValue="Nome do Contato"
        />

        <TextInput
          style={styles.input}
          placeholder="E-mail para Contato"
          placeholderTextColor="#6B6B6B"
          value={emailContato}
          onChangeText={setEmailContato}
          defaultValue="E-mail para Contato"
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
