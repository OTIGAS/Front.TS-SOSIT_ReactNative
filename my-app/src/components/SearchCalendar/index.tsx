import { ReactNode } from "react";
import { MyStyles } from "./styles";

import { TouchableOpacity, View, Text } from "react-native";

type SearchCalendarProps = {
  typeSearch: "Serviço" | "Empresa";
  empresa: string;
  servico: string;
  cidade: string;
  semana: string;
  onPress?: () => void;
};

export const SearchCalendar = (props: SearchCalendarProps) => {
  const styles = MyStyles();

  let stylesCompany;
  let stylesService;

  if (props.typeSearch === "Serviço") {
    stylesCompany = styles.textOne;
    stylesService = styles.typeService;
  } else {
    stylesCompany = styles.typeCompany;
    stylesService = styles.textTwo;
  }

  return (
    <TouchableOpacity style={styles.mainContainer} onPress={props.onPress}>
      <View style={styles.subContainer}>
        <Text style={stylesCompany}>{props.empresa}</Text>
        <Text style={stylesService}>{props.servico}</Text>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.textOne}>{props.cidade}</Text>
        <Text style={styles.textTwo}>{props.semana}</Text>
      </View>
    </TouchableOpacity>
  );
};
