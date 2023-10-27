import { ReactNode } from "react";
import { MyStyles } from "./styles";

import { TouchableOpacity, View, Text } from "react-native";

type SearchCalendarProps = {
  typeSearch: "Serviço" | "Empresa";
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
    <TouchableOpacity style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <Text style={stylesCompany}>Nome da Emprese</Text>
        <Text style={stylesService}>Nome do Serviço</Text>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.textOne}>Cidade</Text>
        <Text style={styles.textTwo}>Seg, Ter, Qua, Qui, Sex, Sab</Text>
      </View>
    </TouchableOpacity>
  );
};
