import { MyStyles } from "./styles";

import { TouchableOpacity, View, Text } from "react-native";

type SearchCalendarProps = {
  nomeAgenda: string;
  nomeServicos: string;
  diaSemana: string;
  onPress: () => void;
};

export const Calendars = (props: SearchCalendarProps) => {
  const styles = MyStyles();

  return (
    <TouchableOpacity style={styles.mainContainer} onPress={props.onPress}>
      <View style={styles.subContainer}>
        <Text style={styles.textOne}>{props.nomeAgenda}</Text>
        <Text style={styles.textTwo}>{props.nomeServicos}</Text>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.text}>{props.diaSemana}</Text>
      </View>
    </TouchableOpacity>
  );
};