import { useContext, useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  Text,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { MyStyles } from "./styles";

import useForm from "../../../hooks/useForm";
import { UserContext } from "../../../context/UserContext";

import { Input } from "../../../components/Input";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { Calendars } from "../../../components/Calendars";
import { ListAgenda, ListAgendaByName } from "../../../api";

export function PesquisaE({ navigation }) {
  const styles = MyStyles();
  const { token, login } = useContext(UserContext);

  const [calendars, setCalendars] = useState([]);

  const openListErrorAlert = (error: string) => {
    Alert.alert(
      "Falha ao autenticar.",
      error,
      [{ text: "Ok", onPress: () => null }],
      {
        cancelable: true,
      }
    );
  };

  async function listAgendasByToken() {
    const { url, options } = ListAgenda(token);
    const response = await fetch(url, options);
    const json = await response.json();
    if (json.erro) {
      openListErrorAlert(json.erro);
    } else {
      setCalendars(json);
    }
  }

  useEffect(() => {
    AsyncStorage.removeItem("agenda", (error) => {
      if (error) {
        console.log(error);
      }
    });
    if (login && token) {
      listAgendasByToken();
    } else {
      navigation.navigate("Login", { name: "Login" });
    }
  }, []);

  const search = useForm("");

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

  async function handlePressSearch() {
    if (search.value) {
      const { url, options } = ListAgendaByName(search.value);
      const response = await fetch(url, options);
      const json = await response.json();
      if (json.erro) {
        openListErrorAlert(json.erro);
      } else {
        setCalendars(json);
      }
    } else {
      openErrorAlert();
    }
  }

  async function handlePressCalendar(idAgenda: number) {
    await AsyncStorage.setItem("agenda", JSON.stringify(idAgenda));
    navigation.navigate("AlterarAgenda", { name: "AlterarAgenda" });
  }

  return (
    <View style={styles.home}>
      <Header screen="Buscar Agenda" />
      <View style={styles.search}>
        <Input
          keyboardType="default"
          placeholder="Nome da Agenda"
          placeholderTextColor="#B9B9B9"
          value={search.value}
          error={search.error}
          onBlur={search.onBlur}
          onChange={search.setValue}
        />
        <TouchableOpacity style={styles.button} onPress={handlePressSearch}>
          <Image source={require("./../../../assets/manage_search.png")} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("CadastroAgenda", { name: "CadastroAgenda" });
          }}
        >
          <Image source={require("./../../../assets/calendar_add.png")} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.container}>
        {calendars.map((calendar) => (
          <Calendars
            key={calendar.id_agenda}
            nomeAgenda={calendar.nome}
            nomeServicos={calendar.servico}
            diaSemana={[
              calendar.seg[0] ? "Seg" : null,
              calendar.ter[0] ? "Ter" : null,
              calendar.qua[0] ? "Qua" : null,
              calendar.qui[0] ? "Qui" : null,
              calendar.sex[0] ? "Sex" : null,
              calendar.sab[0] ? "Sab" : null,
              calendar.dom[0] ? "Dom" : null,
            ].join(", ")}
            onPress={() => handlePressCalendar(calendar.id_agenda)}
          />
        ))}
      </ScrollView>
      <Footer type="empresa" navigation={navigation} />
    </View>
  );
}
