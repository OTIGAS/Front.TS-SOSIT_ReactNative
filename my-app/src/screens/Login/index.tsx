import { useContext, useEffect } from "react";

import { View, Image, Alert, Text } from "react-native";
import { MyStyles } from "./styles";

import useForm from "../../hooks/useForm";

import { UserContext } from "../../context/UserContext";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

import { useTranslation } from "react-i18next";

export function Login({ navigation }) {
  const { t } = useTranslation();
  const styles = MyStyles();

  const email = useForm("email");
  const senha = useForm("password");

  const { data, userLogin, message, erro, login } = useContext(UserContext);

  useEffect(() => {
    if (login) {
      if (data?.tipo === "cliente") {
        navigation.navigate("PesquisaCliente", { name: "PesquisaCliente" });
      } else if (data?.tipo === "empresa") {
        navigation.navigate("PesquisaEmpresa", { name: "PesquisaEmpresa" });
      }
    }
  }, [login]);

  async function handlePress() {
    if (email.validate() && senha.validate()) {
      userLogin(email.value, senha.value);
      if (erro) {
        openAuthErrorAlert(erro);
      } else {
        if (data?.tipo === "cliente") {
          navigation.navigate("PesquisaCliente", { name: "PesquisaCliente" });
        } else if (data?.tipo === "empresa") {
          navigation.navigate("PesquisaEmpresa", { name: "PesquisaEmpresa" });
        }
      }
    } else {
      openErrorAlert();
    }
  }

  const openErrorAlert = () => {
    Alert.alert(
      t("sign in v l failed to authenticate"),
      t("sign in v l fields must be filled in"),
      [{ text: "Ok", onPress: () => null }],
      {
        cancelable: true,
      }
    );
  };

  const openAuthErrorAlert = (error: string) => {
    Alert.alert(
      "Falha ao autenticar.",
      error,
      [{ text: "Ok", onPress: () => null }],
      {
        cancelable: true,
      }
    );
  };

  const openRegisterAlert = () => {
    Alert.alert(
      "Crie uma conta.",
      "Escolha a forma de cadastro",
      [
        {
          text: "Cliente",
          onPress: () =>
            navigation.navigate("CadastroCliente", { name: "CadastroCliente" }),
        },
        {
          text: "Empresa",
          onPress: () =>
            navigation.navigate("CadastroEmpresa", { name: "CadastroEmpresa" }),
        },
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
      [{ text: "Ok", onPress: () => console.log("Esqueci minha senha") }],
      {
        cancelable: true,
      }
    );
  };

  return (
    <>
      <Header screen={t("page sign in")} />
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("./../../assets/logo.png")}
        />
        <View style={styles.sub_container}>
          <Input
            keyboardType="email-address"
            placeholder={t("sign in i email")}
            placeholderTextColor="#B9B9B9"
            value={email.value}
            error={email.error}
            onBlur={email.onBlur}
            onChange={email.setValue}
          />

          <Input
            keyboardType="default"
            secureTextEntry={true}
            placeholder={t("sign in i password")}
            placeholderTextColor="#B9B9B9"
            value={senha.value}
            error={senha.error}
            onBlur={senha.onBlur}
            onChange={senha.setValue}
          />

          <Button onPress={handlePress}>{t("sign in b submit")}</Button>

          <Text style={styles.label} onPress={openRegisterAlert}>
            {t("sign in l registration")}
          </Text>
          <Text style={styles.label} onPress={openForgotMyPasswordAlert}>
            {t("sign in l forgot password")}
          </Text>
        </View>
      </View>
    </>
  );
}
