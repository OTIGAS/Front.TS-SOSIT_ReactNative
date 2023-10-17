import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

export function PostEmpresa() {
  const [nome, setNome] = useState<string | null>("");
  const [email, setEmail] = useState<string | null>("");
  const [senha, setSenha] = useState<string | null>("");

  const [telefone, setTelefone] = useState<string | null>("");
  const [nomeContato, setNomeContato] = useState<string | null>("");
  const [emailContato, setEmailContato] = useState<string | null>("");

  const [cep, setCep] = useState<string | null>("");
  const [rua, setRua] = useState<string | null>("");
  const [num, setNum] = useState<string | null>("");
  const [cidade, setCidade] = useState<string | null>("");
  const [estado, setEstado] = useState<string | null>("");

  const [cnpj, setCnpj] = useState<string | null>("");
  const [descricao, setDescricao] = useState<string | null>("");
  const [linkSite, setLinkSite] = useState<string | null>("");
  const [imgPerfil, setImgPerfil] = useState<string | null>("");

  const [banco, setBanco] = useState<string | null>("");
  const [agencia, setAgencia] = useState<string | null>("");
  const [digito, setDigito] = useState<string | null>("");
  const [tipoConta, setTipoConta] = useState<string | null>("");
  const [conta, setConta] = useState<string | null>("");

  const [message, setMessage] = useState<string | null>("");

  function handleClick() {

    if (
      !nome ||
      !email ||
      !senha ||
      !telefone ||
      !nomeContato ||
      !emailContato ||
      !cep ||
      !rua ||
      !num ||
      !cidade ||
      !estado ||
      !cnpj ||
      !descricao ||
      !linkSite ||
      !imgPerfil ||
      !banco ||
      !agencia ||
      !digito ||
      !tipoConta ||
      !conta
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
          endereco: {
            cep,
            rua,
            cidade,
            estado
          },
          informacoes_empresa: {
            cnpj,
            descricao,
            link_site: linkSite,
            img_perfil: imgPerfil
          },
          dados_bancarios: {
            banco,
            agencia,
            digito,
            tipo_conta: tipoConta,
            conta
          }
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

        <Text style={styles.title}>Cadastro de Empresa</Text>

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

        <TextInput
          style={styles.input}
          placeholder="CEP"
          placeholderTextColor="#6B6B6B"
          value={cep}
          onChangeText={setCep}
          defaultValue="CEP"
        />

        <TextInput
          style={styles.input}
          placeholder="Rua"
          placeholderTextColor="#6B6B6B"
          value={rua}
          onChangeText={setRua}
          defaultValue="Rua"
        />

        <TextInput
          style={styles.input}
          placeholder="Número"
          placeholderTextColor="#6B6B6B"
          value={num}
          onChangeText={setNum}
          defaultValue="Número"
        />

        <TextInput
          style={styles.input}
          placeholder="Cidade"
          placeholderTextColor="#6B6B6B"
          value={cidade}
          onChangeText={setCidade}
          defaultValue="Cidade"
        />

        <TextInput
          style={styles.input}
          placeholder="Estado"
          placeholderTextColor="#6B6B6B"
          value={estado}
          onChangeText={setEstado}
          defaultValue="Estado"
        />

        <TextInput
          style={styles.input}
          placeholder="CNPJ"
          placeholderTextColor="#6B6B6B"
          value={cnpj}
          onChangeText={setCnpj}
          defaultValue="CNPJ"
        />

        <TextInput
          style={styles.input}
          placeholder="Descrição"
          placeholderTextColor="#6B6B6B"
          value={descricao}
          onChangeText={setDescricao}
          defaultValue="Descrição"
        />

        <TextInput
          style={styles.input}
          placeholder="Link do Site"
          placeholderTextColor="#6B6B6B"
          value={linkSite}
          onChangeText={setLinkSite}
          defaultValue="Link do Site"
        />

        <TextInput
          style={styles.input}
          placeholder="Imagem de Perfil"
          placeholderTextColor="#6B6B6B"
          value={imgPerfil}
          onChangeText={setImgPerfil}
          defaultValue="Imagem de Perfil"
        />

        <TextInput
          style={styles.input}
          placeholder="Banco"
          placeholderTextColor="#6B6B6B"
          value={banco}
          onChangeText={setBanco}
          defaultValue="Banco"
        />

        <TextInput
          style={styles.input}
          placeholder="Agência"
          placeholderTextColor="#6B6B6B"
          value={agencia}
          onChangeText={setAgencia}
          defaultValue="Agência"
        />

        <TextInput
          style={styles.input}
          placeholder="Dígito"
          placeholderTextColor="#6B6B6B"
          value={digito}
          onChangeText={setDigito}
          defaultValue="Dígito"
        />

        <TextInput
          style={styles.input}
          placeholder="Tipo de Conta"
          placeholderTextColor="#6B6B6B"
          value={tipoConta}
          onChangeText={setTipoConta}
          defaultValue="Tipo de Conta"
        />

        <TextInput
          style={styles.input}
          placeholder="Conta"
          placeholderTextColor="#6B6B6B"
          value={conta}
          onChangeText={setConta}
          defaultValue="Conta"
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
