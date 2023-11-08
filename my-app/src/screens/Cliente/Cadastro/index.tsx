import { ScrollView, TouchableOpacity, Text, Alert } from "react-native";
import { MyStyles } from "./styles";

import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { Input } from "../../../components/Input";

import useForm from "../../../hooks/useForm";
import { CreateCliente } from "../../../api";

export function CadastroC({ navigation }) {
  const styles = MyStyles();

  const nome = useForm("");
  const email = useForm("email");
  const senha = useForm("password");
  const email_contato = useForm("email");
  const telefone = useForm("fone");

  function openAlertHome(mensagem: string) {
    Alert.alert(
      mensagem,
      null,
      [
        {
          text: "Voltar",
          onPress: () => navigation.navigate("Login", { name: "Login" }),
        },
        { text: "Cancelar", onPress: () => console.log("Cancelar") },
      ],
      {
        cancelable: true,
      }
    );
  }

  async function handlePress() {
    if (
      nome.validate() &&
      email.validate() &&
      senha.validate() &&
      email_contato.validate() &&
      telefone.validate()
    ) {
      const body = {
        nome: nome.value,
        email: email.value,
        senha: senha.value,
        email_contato: email_contato.value,
        telefone: telefone.value,
      };

      const { url, options } = CreateCliente(body);
      const response = await fetch(url, options);
      const json = await response.json();

      if (json.mensagem) {
        openAlertHome(json.mensagem);
      }
    }
  }

  return (
    <>
      <Header screen="Cadastro" />
      <ScrollView style={styles.perfil}>
        <Text style={styles.label}>Usuário</Text>
        <Input
          keyboardType="default"
          placeholder="Nome"
          placeholderTextColor="#B9B9B9"
          value={nome.value}
          error={nome.error}
          onBlur={nome.onBlur}
          onChange={nome.setValue}
        />
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
          placeholder="Senha"
          placeholderTextColor="#B9B9B9"
          value={senha.value}
          error={senha.error}
          onBlur={senha.onBlur}
          onChange={senha.setValue}
        />
        <Text style={styles.label}>Contato</Text>
        <Input
          keyboardType="email-address"
          placeholder="E-mail Contato"
          placeholderTextColor="#B9B9B9"
          value={email_contato.value}
          error={email_contato.error}
          onBlur={email_contato.onBlur}
          onChange={email_contato.setValue}
        />
        <Input
          keyboardType="decimal-pad"
          placeholder="(00) 0.0000-0000"
          placeholderTextColor="#B9B9B9"
          value={telefone.value}
          error={telefone.error}
          onBlur={telefone.onBlur}
          onChange={telefone.setValue}
        />

        <TouchableOpacity style={styles.buttonSave} onPress={handlePress}>
          <Text>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.buttonLogout} 
          onPress={() => navigation.navigate("Login", { name: "Login" })}
        >
          <Text>Cancelar</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
}
