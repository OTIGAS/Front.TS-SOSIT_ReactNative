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

  const [telefone, setTelefone] = useState<string | null>("Telefone");
  const [nomeContato, setNomeContato] = useState<string | null>("Nome do Contato");
  const [emailContato, setEmailContato] = useState<string | null>("");

  const [cep, setCep] = useState<string | null>("00000-000");
  const [rua, setRua] = useState<string | null>("Rua");
  const [num, setNum] = useState<string | null>("00");
  const [cidade, setCidade] = useState<string | null>("Cidade");
  const [estado, setEstado] = useState<string | null>("Estado");

  const [cnpj, setCnpj] = useState<string | null>("00.000.000/0001-00");
  const [descricao, setDescricao] = useState<string | null>("Descrição");
  const [linkSite, setLinkSite] = useState<string | null>("https://www.google.com.br/");
  const [imgPerfil, setImgPerfil] = useState<string | null>("https://avatars.githubusercontent.com/u/112782437?v=4");

  const [banco, setBanco] = useState<string | null>("Banco");
  const [agencia, setAgencia] = useState<string | null>("Agencia");
  const [digito, setDigito] = useState<string | null>("Digito");
  const [tipoConta, setTipoConta] = useState<string | null>("Tipo da Conta");
  const [conta, setConta] = useState<string | null>("Conta");

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


    fetch("http://10.5.17.9:3333/usuario/empresa", {
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
            num,
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
        />

        <TextInput
          style={styles.input}
          placeholder="Nome do Contato"
          placeholderTextColor="#6B6B6B"
          value={nomeContato}
          onChangeText={setNomeContato}
        />

        <TextInput
          style={styles.input}
          placeholder="E-mail para Contato"
          placeholderTextColor="#6B6B6B"
          value={emailContato}
          onChangeText={setEmailContato}
        />

        <TextInput
          style={styles.input}
          placeholder="CEP"
          placeholderTextColor="#6B6B6B"
          value={cep}
          onChangeText={setCep}
        />

        <TextInput
          style={styles.input}
          placeholder="Rua"
          placeholderTextColor="#6B6B6B"
          value={rua}
          onChangeText={setRua}
        />

        <TextInput
          style={styles.input}
          placeholder="Número"
          placeholderTextColor="#6B6B6B"
          value={num}
          onChangeText={setNum}
        />

        <TextInput
          style={styles.input}
          placeholder="Cidade"
          placeholderTextColor="#6B6B6B"
          value={cidade}
          onChangeText={setCidade}
        />

        <TextInput
          style={styles.input}
          placeholder="Estado"
          placeholderTextColor="#6B6B6B"
          value={estado}
          onChangeText={setEstado}
        />

        <TextInput
          style={styles.input}
          placeholder="CNPJ"
          placeholderTextColor="#6B6B6B"
          value={cnpj}
          onChangeText={setCnpj}
        />

        <TextInput
          style={styles.input}
          placeholder="Descrição"
          placeholderTextColor="#6B6B6B"
          value={descricao}
          onChangeText={setDescricao}
        />

        <TextInput
          style={styles.input}
          placeholder="Link do Site"
          placeholderTextColor="#6B6B6B"
          value={linkSite}
          onChangeText={setLinkSite}
        />

        <TextInput
          style={styles.input}
          placeholder="Imagem de Perfil"
          placeholderTextColor="#6B6B6B"
          value={imgPerfil}
          onChangeText={setImgPerfil}
        />

        <TextInput
          style={styles.input}
          placeholder="Banco"
          placeholderTextColor="#6B6B6B"
          value={banco}
          onChangeText={setBanco}
        />

        <TextInput
          style={styles.input}
          placeholder="Agência"
          placeholderTextColor="#6B6B6B"
          value={agencia}
          onChangeText={setAgencia}
        />

        <TextInput
          style={styles.input}
          placeholder="Dígito"
          placeholderTextColor="#6B6B6B"
          value={digito}
          onChangeText={setDigito}
        />

        <TextInput
          style={styles.input}
          placeholder="Tipo de Conta"
          placeholderTextColor="#6B6B6B"
          value={tipoConta}
          onChangeText={setTipoConta}
        />

        <TextInput
          style={styles.input}
          placeholder="Conta"
          placeholderTextColor="#6B6B6B"
          value={conta}
          onChangeText={setConta}
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
