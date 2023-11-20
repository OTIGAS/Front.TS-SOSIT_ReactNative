import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import { useEffect, useState } from "react";
import { MyStyles } from "./styles";

import { Input } from "../../../components/Input";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { Calendars } from "../../../components/Calendars";
import useForm from "../../../hooks/useForm";

export function PesquisaE({ navigation }) {
  useEffect(() => {}, []);
  const styles = MyStyles();

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
      console.log("Pesquisar ", search);
    } else {
      openErrorAlert();
    }
  }

  async function handlePressCalendarAdd() {
    navigation.navigate("CadastroAgenda", { name: "CadastroAgenda" });
  }

  async function handlePressCalendar() {
    console.log("Calendario");
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
          onPress={handlePressCalendarAdd}
        >
          <Image source={require("./../../../assets/calendar_add.png")} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.container}>
        <Calendars
          nomeAgenda="Agenda 02"
          nomeServicos="Serviço 02"
          diaSemana="Ter, Qui, Sáb"
          onPress={() => handlePressCalendar()}
        />
        <Calendars
          nomeAgenda="Agenda 03"
          nomeServicos="Serviço 03"
          diaSemana="Seg, Sex"
          onPress={() => handlePressCalendar()}
        />
        <Calendars
          nomeAgenda="Agenda 04"
          nomeServicos="Serviço 04"
          diaSemana="Qua, Sex, Dom"
          onPress={() => handlePressCalendar()}
        />
        <Calendars
          nomeAgenda="Agenda 05"
          nomeServicos="Serviço 05"
          diaSemana="Seg, Ter, Qui"
          onPress={() => handlePressCalendar()}
        />
        <Calendars
          nomeAgenda="Agenda 06"
          nomeServicos="Serviço 06"
          diaSemana="Sex, Sáb"
          onPress={() => handlePressCalendar()}
        />
      </ScrollView>

      <Footer type="empresa" navigation={navigation} />
    </View>
  );
}