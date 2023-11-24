import { useContext, useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  Text,
  RefreshControl,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { MyStyles } from "./styles";

import { UserContext } from "../../../context/UserContext";

import { ListAgenda, ListAgendaByName } from "../../../api";

import useForm from "../../../hooks/useForm";

import { Input } from "../../../components/Input";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { Calendars } from "../../../components/Calendars";

export function PesquisaE({ navigation }) {
  const styles = MyStyles();
  const { token, login } = useContext(UserContext);
  
  const search = useForm("");

  const [calendars, setCalendars] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

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
  }, [refreshing]);

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

      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={() => listAgendasByToken()} />
        }
      >
        {calendars.length ? (
          calendars.map((calendar) => (
            <Calendars
              key={calendar.id_agenda}
              nomeAgenda={calendar.nome}
              nomeServicos={calendar.servico}
              diaSemana={[
                calendar.seg ? "Seg" : null,
                calendar.ter ? "Ter" : null,
                calendar.qua ? "Qua" : null,
                calendar.qui ? "Qui" : null,
                calendar.sex ? "Sex" : null,
                calendar.sab ? "Sab" : null,
                calendar.dom ? "Dom" : null,
              ]
                .filter((day) => day !== null)
                .join(", ")}
              onPress={() => handlePressCalendar(calendar.id_agenda)}
            />
          ))
        ) : (
          <Text>Nenhuma agenda cadastrada</Text>
        )}
      </ScrollView>
      <Footer type="empresa" navigation={navigation} />
    </View>
  );
}
