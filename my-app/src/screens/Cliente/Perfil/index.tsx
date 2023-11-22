import { useContext, useEffect } from "react";

import { ScrollView, TouchableOpacity, Text, Alert } from "react-native";
import { MyStyles } from "./styles";

import { UserContext } from "../../../context/UserContext";

import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { Input } from "../../../components/Input";

import useForm from "../../../hooks/useForm";
import { UpdateUsuario, UpdateContato, DeleteUsuario } from "../../../api";

export function PerfilC({ navigation }) {
  const styles = MyStyles();

  const nome = useForm("");
  const email = useForm("email");

  const emailContato = useForm("email");
  const telefoneContato = useForm("fone");

  const { data, token, userLogout, login } =
    useContext(UserContext);

  useEffect(() => {
    if (login) {
      if (data) {
        nome.setValue(data.nome);
        email.setValue(data.email);
        emailContato.setValue(data.email_contato);
        telefoneContato.setValue(data.telefone);
      }
    } else {
      navigation.navigate("Login", { name: "Login" });
    }
  }, [data]);

  function openAlertPerfil(mensagem: string) {
    Alert.alert(
      mensagem,
      null,
      [
        {
          text: "Ok",
          onPress: () => null,
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

  const openConfirmAlert = () => {
    Alert.alert(
      "Tem certeza que que apagar sua conta.",
      null,
      [{ text: "Ok", onPress: () => handlePressDeleteUsuario() }],
      {
        cancelable: true,
      }
    );
  };

  async function handlePressDeleteUsuario() {
    if (token) {
      const { url, options } = DeleteUsuario(token);
      const response = await fetch(url, options);
      const json = await response.json();

      if (json.erro) {
        openAlertPerfil(json.erro);
      } else if (json.mensagem) {
        openAlertPerfil(json.mensagem);
        userLogout();
        navigation.navigate("Login", { name: "Login" });
      } else {
        openAlertPerfil("Falha ao deletar Usuário.");
      }
    }
  }

  async function handlePressUpdateUsuario() {
    if (nome.validate() && email.validate()) {
      const body = {
        nome: nome.value,
        email: email.value,
        token,
      };
      const { url, options } = UpdateUsuario(body);
      const response = await fetch(url, options);
      const json = await response.json();

      if (json.erro) {
        openAlertPerfil(json.erro);
      } else if (json.mensagem) {
        openAlertPerfil(json.mensagem);
      } else {
        openAlertPerfil("Falha ao atualizar Usuário.");
      }
    } else {
      openErrorAlert();
    }
  }

  async function handlePressUpdateContato() {
    if (emailContato.validate() && telefoneContato.validate()) {
      const body = {
        email_contato: emailContato.value,
        telefone: email.value,
        nome_contato: data.nome,
        token,
      };
      const { url, options } = UpdateContato(body);
      const response = await fetch(url, options);
      const json = await response.json();

      if (json.erro) {
        openAlertPerfil(json.erro);
      } else if (json.mensagem) {
        openAlertPerfil(json.mensagem);
      } else {
        openAlertPerfil("Falha ao atualizar Contato.");
      }
    } else {
      openErrorAlert();
    }
  }

  return (
    <>
      <Header screen="Perfil" />
      <ScrollView style={styles.perfil}>
        <Text style={styles.title}>Cliente</Text>
        <Text style={styles.label}>Nome :</Text>
        <Input
          keyboardType="default"
          placeholder="Nome"
          placeholderTextColor="#B9B9B9"
          value={nome.value}
          error={nome.error}
          onBlur={nome.onBlur}
          onChange={nome.setValue}
        />
        <Text style={styles.label}>E-mail :</Text>
        <Input
          keyboardType="email-address"
          placeholder="E-mail"
          placeholderTextColor="#B9B9B9"
          value={email.value}
          error={email.error}
          onBlur={email.onBlur}
          onChange={email.setValue}
        />
        <TouchableOpacity style={styles.buttonSave} onPress={handlePressUpdateUsuario}>
          <Text style={styles.label}>Salvar dados Usuario</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Contato</Text>
        <Text style={styles.label}>E-mail Contato :</Text>
        <Input
          keyboardType="email-address"
          placeholder="E-mail Contato"
          placeholderTextColor="#B9B9B9"
          value={emailContato.value}
          error={emailContato.error}
          onBlur={emailContato.onBlur}
          onChange={emailContato.setValue}
        />
        <Text style={styles.label}>Telefone Contato :</Text>
        <Input
          keyboardType="decimal-pad"
          placeholder="(00) 0.0000-0000"
          placeholderTextColor="#B9B9B9"
          value={telefoneContato.value}
          error={telefoneContato.error}
          onBlur={telefoneContato.onBlur}
          onChange={telefoneContato.setValue}
        />

        <TouchableOpacity style={styles.buttonSave} onPress={handlePressUpdateContato}>
          <Text style={styles.label}>Salvar dados Contato</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonLogout}
          onPress={() => {
            userLogout();
            navigation.navigate("Login", { name: "Login" });
          }}
        >
          <Text style={styles.label}>Sair</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonDelete} onPress={() => openConfirmAlert()}>
          <Text style={styles.label}>Deletar Conta</Text>
        </TouchableOpacity>
      </ScrollView>
      <Footer navigation={navigation} type="cliente" />
    </>
  );
}
