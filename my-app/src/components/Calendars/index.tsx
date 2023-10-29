import { ReactNode } from "react";
import { MyStyles } from "./styles";

import { TouchableOpacity, View, Text } from "react-native";

type SearchCalendarProps = {
  typeSearch: "Serviço" | "Empresa";
};

export const Calendars = (props: SearchCalendarProps) => {
  const styles = MyStyles();


  return (
    <TouchableOpacity style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <Text style={styles.textOne}>Nome da Agenda</Text>
        <Text style={styles.textTwo}>Nome do Serviço</Text>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.text}>Seg, Ter, Qua, Qui, Sex, Sab</Text>
      </View>
    </TouchableOpacity>
  );
};
