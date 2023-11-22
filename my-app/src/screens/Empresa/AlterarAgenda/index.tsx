import React, { useState, useEffect, useContext } from "react";
import { ScrollView, View, Text, TouchableOpacity, Alert } from "react-native";

import SelectDropdown from "react-native-select-dropdown";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { MyStyles } from "./styles";

import { ListAgendaById, UpdateAgenda } from "../../../api";
import { UserContext } from "../../../context/UserContext";

import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";

type IScheduleAvailabilities = {
  seg: { inicio: string; fim: string }[];
  ter: { inicio: string; fim: string }[];
  qua: { inicio: string; fim: string }[];
  qui: { inicio: string; fim: string }[];
  sex: { inicio: string; fim: string }[];
  sab: { inicio: string; fim: string }[];
  dom: { inicio: string; fim: string }[];
};

export function AlterarAgendaE({ navigation }) {
  const styles = MyStyles();

  const { token } = useContext(UserContext);

  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [selectedTimeInit, setSelectedTimeInit] = useState<string | null>(null);
  const [selectedTimeEnd, setSelectedTimeEnd] = useState<string | null>(null);

  const daysOfWeek = [
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
    "Domingo",
  ];

  const timesOfDayInit = [
    "00:00",
    "00:30",
    "01:00",
    "01:30",
    "02:00",
    "02:30",
    "03:00",
    "03:30",
    "04:00",
    "04:30",
    "05:00",
    "05:30",
    "06:00",
    "06:30",
    "07:00",
    "07:30",
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
    "22:30",
    "23:00",
    "23:30",
  ];

  const timesOfDayEnd = [
    "00:59",
    "00:29",
    "01:59",
    "01:29",
    "02:59",
    "02:29",
    "03:59",
    "03:29",
    "04:59",
    "04:29",
    "05:59",
    "05:29",
    "06:59",
    "06:29",
    "07:59",
    "07:29",
    "08:59",
    "08:29",
    "09:59",
    "09:29",
    "10:59",
    "10:29",
    "11:59",
    "11:29",
    "12:59",
    "12:29",
    "13:59",
    "13:29",
    "14:59",
    "14:29",
    "15:59",
    "15:29",
    "16:59",
    "16:29",
    "17:59",
    "17:29",
    "18:59",
    "18:29",
    "19:59",
    "19:29",
    "20:59",
    "20:29",
    "21:59",
    "21:29",
    "22:59",
    "22:29",
    "23:59",
    "23:29",
  ];

  const [scheduleAvailabilities, setScheduleAvailabilities] = useState<
    IScheduleAvailabilities | []
  >({
    seg: [],
    ter: [],
    qua: [],
    qui: [],
    sex: [],
    sab: [],
    dom: [],
  });

  async function ListAgenda() {
    const idAgenda = await AsyncStorage.getItem("agenda");
    if (idAgenda) {
      const { url, options } = ListAgendaById(idAgenda);
      const response = await fetch(url, options);
      const json = await response.json();
      if (json.erro) {
        openListErrorAlert(json.erro);
      } else {
        setScheduleAvailabilities({
          seg: json[0].seg,
          ter: json[0].ter,
          qua: json[0].qua,
          qui: json[0].qui,
          sex: json[0].sex,
          sab: json[0].sab,
          dom: json[0].dom,
        });
      }
    }
  }

  useEffect(() => {
    ListAgenda();
  }, []);

  const openErrorAlert = () => {
    Alert.alert(
      "Parâmetro(s) ausente(s).",
      "Necessário preencher todos os campos",
      [{ text: "Ok", onPress: () => null }],
      {
        cancelable: true,
      }
    );
  };

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

  const openAlertConfirmedDelete = () => {
    Alert.alert(
      "Tem certeza que quer apagar os horarios ?",
      "",
      [{ text: "Ok", onPress: () => handleDeleteHours() }],
      {
        cancelable: true,
      }
    );
  };

  const openAlertConfirmedSave = () => {
    Alert.alert(
      "Tem certeza que quer salvar as alterações ?",
      "",
      [{ text: "Ok", onPress: () => handleSaveCalendar() }],
      {
        cancelable: true,
      }
    );
  };

  const handleAddHours = () => {
    if (selectedDay && selectedTimeInit && selectedTimeEnd) {
      setScheduleAvailabilities((prevSchedule: IScheduleAvailabilities) => {
        // Inicializa um objeto vazio com arrays vazios para cada dia da semana
        const newSchedule: IScheduleAvailabilities = { ...prevSchedule };
        if (!newSchedule.seg) newSchedule.seg = [];
        if (!newSchedule.ter) newSchedule.ter = [];
        if (!newSchedule.qua) newSchedule.qua = [];
        if (!newSchedule.qui) newSchedule.qui = [];
        if (!newSchedule.sex) newSchedule.sex = [];
        if (!newSchedule.sab) newSchedule.sab = [];
        if (!newSchedule.dom) newSchedule.dom = [];

        // Adiciona o novo horário ao array correspondente
        switch (selectedDay) {
          case "Segunda-feira":
            newSchedule.seg.push({
              inicio: selectedTimeInit,
              fim: selectedTimeEnd,
            });
            break;
          case "Terça-feira":
            newSchedule.ter.push({
              inicio: selectedTimeInit,
              fim: selectedTimeEnd,
            });
            break;
          case "Quarta-feira":
            newSchedule.qua.push({
              inicio: selectedTimeInit,
              fim: selectedTimeEnd,
            });
            break;
          case "Quinta-feira":
            newSchedule.qui.push({
              inicio: selectedTimeInit,
              fim: selectedTimeEnd,
            });
            break;
          case "Sexta-feira":
            newSchedule.sex.push({
              inicio: selectedTimeInit,
              fim: selectedTimeEnd,
            });
            break;
          case "Sábado":
            newSchedule.sab.push({
              inicio: selectedTimeInit,
              fim: selectedTimeEnd,
            });
            break;
          case "Domingo":
            newSchedule.dom.push({
              inicio: selectedTimeInit,
              fim: selectedTimeEnd,
            });
            break;
          default:
            break;
        }

        return newSchedule;
      });
      setSelectedDay(null);
      setSelectedTimeInit(null);
      setSelectedTimeEnd(null);
    } else {
      openErrorAlert();
    }
  };

  const handleDeleteHours = () => {
    setScheduleAvailabilities({
      seg: [],
      ter: [],
      qua: [],
      qui: [],
      sex: [],
      sab: [],
      dom: [],
    });
  };

  const handleSaveCalendar = async () => {
    const idAgenda = await AsyncStorage.getItem("agenda");
    const horarios = scheduleAvailabilities;
    const { url, options } = UpdateAgenda({ token, idAgenda, horarios });
    const response = await fetch(url, options);
    const json = await response.json();
    if (json.erro) {
      openListErrorAlert(json.erro);
    } else {
      openListErrorAlert(json.mensagem);
    }
  };

  return (
    <>
      <Header screen="Alteração Agenda" />
      <ScrollView style={styles.mainContainer}>
        <Text style={styles.label}>Dia da Semana</Text>
        <SelectDropdown
          buttonStyle={styles.select}
          buttonTextStyle={styles.selectText}
          data={daysOfWeek}
          onSelect={(selectedItem, index) => setSelectedDay(selectedItem)}
          buttonTextAfterSelection={(selectedItem, index) => selectedDay}
          rowTextForSelection={(item, index) => item}
        />

        <Text style={styles.label}>Horário de Inicio Disponível</Text>
        <SelectDropdown
          buttonStyle={styles.select}
          buttonTextStyle={styles.selectText}
          data={timesOfDayInit}
          defaultValue={"Selecione um horário de Inicio"}
          onSelect={(selectedItem, index) => setSelectedTimeInit(selectedItem)}
          buttonTextAfterSelection={(selectedItem, index) => selectedTimeInit}
          rowTextForSelection={(item, index) => item}
        />

        <Text style={styles.label}>Horário de Termino Disponível</Text>
        <SelectDropdown
          buttonStyle={styles.select}
          buttonTextStyle={styles.selectText}
          data={timesOfDayEnd}
          searchPlaceHolder="Selecione um horário de Termino"
          defaultValue={"Selecione um horário de Termino"}
          onSelect={(selectedItem, index) => setSelectedTimeEnd(selectedItem)}
          buttonTextAfterSelection={(selectedItem, index) => selectedTimeEnd}
          rowTextForSelection={(item, index) => item}
        />

        <TouchableOpacity
          style={styles.buttonAddHours}
          onPress={handleAddHours}
        >
          <Text style={styles.buttonText}>Adicionar Horário</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonAddHours}
          onPress={openAlertConfirmedDelete}
        >
          <Text style={styles.buttonText}>Apagar Horário</Text>
        </TouchableOpacity>
        <Text style={styles.labelWeek}>Segunda-Feria</Text>
        <View style={styles.container}>
          {(scheduleAvailabilities as IScheduleAvailabilities).seg ? (
            (scheduleAvailabilities as IScheduleAvailabilities).seg.map(
              (element, index) => (
                <React.Fragment key={index}>
                  <View style={styles.subContainer}>
                    <Text style={styles.labelInfo}>Inicio</Text>
                    <Text style={styles.labelInit}>{element.inicio}</Text>
                    <Text style={styles.labelInfo}>Termino</Text>
                    <Text style={styles.labelEnd}>{element.fim}</Text>
                  </View>
                </React.Fragment>
              )
            )
          ) : (
            <Text style={styles.labelNull}>Nenhum Horário Disponível</Text>
          )}
        </View>
        <Text style={styles.labelWeek}>Terça-feira</Text>
        <View style={styles.container}>
          {(scheduleAvailabilities as IScheduleAvailabilities).ter ? (
            (scheduleAvailabilities as IScheduleAvailabilities).ter.map(
              (element, index) => (
                <React.Fragment key={index}>
                  <View style={styles.subContainer}>
                    <Text style={styles.labelInfo}>Inicio</Text>
                    <Text style={styles.labelInit}>{element.inicio}</Text>
                    <Text style={styles.labelInfo}>Termino</Text>
                    <Text style={styles.labelEnd}>{element.fim}</Text>
                  </View>
                </React.Fragment>
              )
            )
          ) : (
            <Text style={styles.labelNull}>Nenhum Horário Disponível</Text>
          )}
        </View>
        <Text style={styles.labelWeek}>Quarta-Feria</Text>
        <View style={styles.container}>
          {(scheduleAvailabilities as IScheduleAvailabilities).qua ? (
            (scheduleAvailabilities as IScheduleAvailabilities).qua.map(
              (element, index) => (
                <React.Fragment key={index}>
                  <View style={styles.subContainer}>
                    <Text style={styles.labelInfo}>Inicio</Text>
                    <Text style={styles.labelInit}>{element.inicio}</Text>
                    <Text style={styles.labelInfo}>Termino</Text>
                    <Text style={styles.labelEnd}>{element.fim}</Text>
                  </View>
                </React.Fragment>
              )
            )
          ) : (
            <Text style={styles.labelNull}>Nenhum Horário Disponível</Text>
          )}
        </View>
        <Text style={styles.labelWeek}>Quinta-Feria</Text>
        <View style={styles.container}>
          {(scheduleAvailabilities as IScheduleAvailabilities).qui ? (
            (scheduleAvailabilities as IScheduleAvailabilities).qui.map(
              (element, index) => (
                <React.Fragment key={index}>
                  <View style={styles.subContainer}>
                    <Text style={styles.labelInfo}>Inicio</Text>
                    <Text style={styles.labelInit}>{element.inicio}</Text>
                    <Text style={styles.labelInfo}>Termino</Text>
                    <Text style={styles.labelEnd}>{element.fim}</Text>
                  </View>
                </React.Fragment>
              )
            )
          ) : (
            <Text style={styles.labelNull}>Nenhum Horário Disponível</Text>
          )}
        </View>
        <Text style={styles.labelWeek}>Sexta-Feria</Text>
        <View style={styles.container}>
          {(scheduleAvailabilities as IScheduleAvailabilities).sex ? (
            (scheduleAvailabilities as IScheduleAvailabilities).sex.map(
              (element, index) => (
                <React.Fragment key={index}>
                  <View style={styles.subContainer}>
                    <Text style={styles.labelInfo}>Inicio</Text>
                    <Text style={styles.labelInit}>{element.inicio}</Text>
                    <Text style={styles.labelInfo}>Termino</Text>
                    <Text style={styles.labelEnd}>{element.fim}</Text>
                  </View>
                </React.Fragment>
              )
            )
          ) : (
            <Text style={styles.labelNull}>Nenhum Horário Disponível</Text>
          )}
        </View>
        <Text style={styles.labelWeek}>Sabado</Text>
        <View style={styles.container}>
          {(scheduleAvailabilities as IScheduleAvailabilities).sab ? (
            (scheduleAvailabilities as IScheduleAvailabilities).sab.map(
              (element, index) => (
                <React.Fragment key={index}>
                  <View style={styles.subContainer}>
                    <Text style={styles.labelInfo}>Inicio</Text>
                    <Text style={styles.labelInit}>{element.inicio}</Text>
                    <Text style={styles.labelInfo}>Termino</Text>
                    <Text style={styles.labelEnd}>{element.fim}</Text>
                  </View>
                </React.Fragment>
              )
            )
          ) : (
            <Text style={styles.labelNull}>Nenhum Horário Disponível</Text>
          )}
        </View>
        <Text style={styles.labelWeek}>Domingo</Text>
        <View style={styles.container}>
          {(scheduleAvailabilities as IScheduleAvailabilities).dom ? (
            (scheduleAvailabilities as IScheduleAvailabilities).dom.map(
              (element, index) => (
                <React.Fragment key={index}>
                  <View style={styles.subContainer}>
                    <Text style={styles.labelInfo}>Inicio</Text>
                    <Text style={styles.labelInit}>{element.inicio}</Text>
                    <Text style={styles.labelInfo}>Termino</Text>
                    <Text style={styles.labelEnd}>{element.fim}</Text>
                  </View>
                </React.Fragment>
              )
            )
          ) : (
            <Text style={styles.labelNull}>Nenhum Horário Disponível</Text>
          )}
        </View>
        <TouchableOpacity
          style={styles.buttonSave}
          onPress={openAlertConfirmedSave}
        >
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </ScrollView>
      <Footer navigation={navigation} type="empresa" />
    </>
  );
}
