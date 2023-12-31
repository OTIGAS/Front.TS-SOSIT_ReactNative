import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  RefreshControl,
} from "react-native";
import { useContext, useEffect, useState } from "react";

import SelectDropdown from "react-native-select-dropdown";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { MyStyles } from "./styles";

import { UserContext } from "../../../context/UserContext";

import useForm from "../../../hooks/useForm";
import { ListAllAgendas } from "../../../api";

import { Input } from "../../../components/Input";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { SearchCalendar } from "../../../components/SearchCalendar";

export function PesquisaC({ navigation }) {
  const styles = MyStyles();

  const { token, login } = useContext(UserContext);

  const search = useForm("");

  const [typeSearch, setTypeSearch] = useState<"Serviço" | "Empresa">(
    "Serviço"
  );

  const [calendars, setCalendars] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    AsyncStorage.removeItem("agenda", (error) => {
      if (error) {
        console.log(error);
      }
    });
    if (login && token) {
      listAllAgendas();
    } else {
      navigation.navigate("Login", { name: "Login" });
    }
  }, []);

  async function listAllAgendas() {
    const { url, options } = ListAllAgendas();
    const response = await fetch(url, options);
    const json = await response.json();
    if (json.erro) {
      openListErrorAlert(json.erro);
    } else {
      setCalendars(json);
    }
  }

  async function handlePressCalendar(idAgenda: number) {
    await AsyncStorage.setItem("agenda", JSON.stringify(idAgenda));
    navigation.navigate("AgendaEmpresaCliente", {
      name: "AgendaEmpresaCliente",
    });
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

  return (
    <View style={styles.home}>
      <Header screen="Buscar" />

      <View style={styles.search}>
        <Text style={styles.textSearch}>Pesquisar por :</Text>
        <SelectDropdown
          data={["Serviço", "Empresa"]}
          defaultValue={"Serviço"}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
            setTypeSearch(selectedItem);
          }}
          buttonStyle={styles.select}
          buttonTextStyle={styles.selectText}
        />
      </View>

      <View style={styles.search}>
        <Input
          keyboardType="default"
          placeholder="Escreva aqui..."
          placeholderTextColor="#B9B9B9"
          value={search.value}
          error={search.error}
          onBlur={search.onBlur}
          onChange={search.setValue}
        />
        <TouchableOpacity style={styles.button}>
          <Image source={require("./../../../assets/manage_search.png")} />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => listAllAgendas()}
          />
        }
      >
        {calendars.map((calendar) => (
          <SearchCalendar
            key={calendar.id_agenda}
            typeSearch={typeSearch}
            empresa={calendar.nome_empresa}
            servico={calendar.servico}
            cidade={calendar.cidade}
            semana={[
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
        ))}
      </ScrollView>
      <Footer type="cliente" navigation={navigation} />
    </View>
  );
}
