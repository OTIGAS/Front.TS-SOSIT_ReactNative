import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { MyStyles } from "./styles";

import { ListAgendaTimeByDate } from "../../../api";

import { Input } from "../../../components/Input";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { OpenAppointments } from "../../../components/OpenAppointments";
import { BookedAppointments } from "../../../components/BookedAppointments";

import CalendarPicker from 'react-native-calendar-picker';

export function AgendaEmpresaC({ navigation }) {
  const styles = MyStyles();

  const [selectedStartDate, setSelectedStartDate] = useState(null);

  const onDateChange = (date) => {
    const parsedDate = new Date(date);
    const dia = parsedDate.toISOString().split("T")[0];
    setSelectedStartDate(dia);
  };

  const startDate = selectedStartDate ? selectedStartDate.toString() : '';
  
  const [schedules, setSchedules] = useState([]);

  async function listAllAgendas() {
    const idAgenda = await AsyncStorage.getItem("agenda");
    if (idAgenda && startDate) {
      const { url, options } = ListAgendaTimeByDate(
        idAgenda,
        startDate
      );
      const response = await fetch(url, options);
      const json = await response.json();
      if (json.erro) {
        console.log(json.erro);
      } else {
        setSchedules(json.horarios);
        console.log(json)
      }
    }
  }

  

  return (
    <>
      <Header screen="Agenda" />
      <View style={styles.container}>
        <CalendarPicker onDateChange={onDateChange} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => listAllAgendas()}
        >
          <Text>Enviar</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.mainContainer}>
        {schedules ? (
          schedules.map((schedule) => (
            schedule.disponivel ? (
              <OpenAppointments
                key={"key"}
                init={schedule.inicio}
                end={schedule.fim}
                onPress={() => null}
              />
            ) : (
              <BookedAppointments
                key={"key"}
                init={schedule.inicio}
                end={schedule.fim}
              />
            )
          ))
        ) : (
          <Text>Nada</Text>
        )}
      </ScrollView>
      <Footer navigation={navigation} type="cliente" />
    </>
  );
}
