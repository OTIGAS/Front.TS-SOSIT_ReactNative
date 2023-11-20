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

  function openAlertCadastro(mensagem: string) {
    Alert.alert(
      mensagem,
      null,
      [
        {
          text: "Tela de Login",
          onPress: () => navigation.navigate("Login", { name: "Login" }),
        },
      ],
      {
        cancelable: true,
      }
    );
  }

  const openErrorAlert = () => {
    Alert.alert(
      "Falha ao autenticar.",
      "Necessário preencher todos os campos",
      [{ text: "Ok", onPress: () => null }],
      {
        cancelable: true,
      }
    );
  };

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

      if (json.erro) {
        openAlertCadastro(json.erro);
      } else if (json.mensagem) {
        openAlertCadastro(json.mensagem);
      } else {
        openAlertCadastro("Falha ao cadastrar Usuário.");
      }
    } else {
      openErrorAlert();
    }
  }

  return (
    <>
      <Header screen="Cadastro" />
      <ScrollView style={styles.perfil}>
        <Text style={styles.label}>Cliente</Text>
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
