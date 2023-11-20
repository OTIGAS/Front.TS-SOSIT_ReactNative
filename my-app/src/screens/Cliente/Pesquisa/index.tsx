import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import { useState } from "react";
import { MyStyles } from "./styles";

import SelectDropdown from "react-native-select-dropdown";

import { Input } from "../../../components/Input";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { SearchCalendar } from "../../../components/SearchCalendar";
import useForm from "../../../hooks/useForm";

export function PesquisaC({ navigation }) {
  const styles = MyStyles();

  const [typeSearch, setTypeSearch] = useState<"Serviço" | "Empresa">(
    "Serviço"
  );
  const search = useForm("");

  async function handlePressCalendar() {
    navigation.navigate("AgendaEmpresaCliente", {
      name: "AgendaEmpresaCliente",
    });
  }

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

      <ScrollView style={styles.container}>
        <SearchCalendar typeSearch={typeSearch} empresa="Empresa 01" servico="Serviço 01" cidade="Cidade 01" semana="Seg, Qua, Sex" />
        <SearchCalendar typeSearch={typeSearch} empresa="Empresa 02" servico="Serviço 02" cidade="Cidade 02" semana="Ter, Qui, Sab" />
        <SearchCalendar typeSearch={typeSearch} empresa="Empresa 03" servico="Serviço 03" cidade="Cidade 03" semana="Seg, Ter, Sex" />
        <SearchCalendar typeSearch={typeSearch} empresa="Empresa 04" servico="Serviço 04" cidade="Cidade 04" semana="Qua, Qui, Sab" />
        <SearchCalendar typeSearch={typeSearch} empresa="Empresa 05" servico="Serviço 05" cidade="Cidade 05" semana="Ter, Qua, Sab" />
      </ScrollView>

      <Footer type="cliente" navigation={navigation} />
    </View>
  );
}