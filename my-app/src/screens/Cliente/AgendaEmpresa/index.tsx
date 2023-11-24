import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { MyStyles } from "./styles";

import { ListAgendaTimeByDate } from "../../../api";

import useForm from "../../../hooks/useForm";

import { Input } from "../../../components/Input";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { OpenAppointments } from "../../../components/OpenAppointments";
import { BookedAppointments } from "../../../components/BookedAppointments";

export function AgendaEmpresaC({ navigation }) {
  const styles = MyStyles();

  const dataCompleta = useForm("");
  const [schedules, setSchedules] = useState([]);

  async function listAllAgendas() {
    const idAgenda = await AsyncStorage.getItem("agenda");
    if (idAgenda) {
      const { url, options } = ListAgendaTimeByDate(
        idAgenda,
        dataCompleta.value
      );
      const response = await fetch(url, options);
      const json = await response.json();
      if (json.erro) {
        console.log(json.erro);
      } else {
        setSchedules(json.horarios);
      }
    }
  }

  return (
    <>
      <Header screen="Agenda" />
      <View>
        <Input
          keyboardType="numeric"
          placeholder="Data no formato '0000-00-00'"
          placeholderTextColor="#B9B9B9"
          value={dataCompleta.value}
          error={dataCompleta.error}
          onBlur={dataCompleta.onBlur}
          onChange={dataCompleta.setValue}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => listAllAgendas()}
        >
          <Text>Enviar</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.mainContainer}>
        {schedules ? (
          schedules.map((schedule) => {
            if (schedule.disponivel) {
              <OpenAppointments
                key={"key"}
                init={schedule.inicio}
                end={schedule.fim}
              />;
            }
            return null;
          })
        ) : (
          <Text>Nada</Text>
        )}
      </ScrollView>
      <Footer navigation={navigation} type="cliente" />
    </>
  );
}
