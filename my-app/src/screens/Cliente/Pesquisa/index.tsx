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
        <SearchCalendar typeSearch={typeSearch} onPress={handlePressCalendar} />
        <SearchCalendar typeSearch={typeSearch} />
        <SearchCalendar typeSearch={typeSearch} />
        <SearchCalendar typeSearch={typeSearch} />
        <SearchCalendar typeSearch={typeSearch} />
        <SearchCalendar typeSearch={typeSearch} />
        <SearchCalendar typeSearch={typeSearch} />
        <SearchCalendar typeSearch={typeSearch} />
        <SearchCalendar typeSearch={typeSearch} />
        <SearchCalendar typeSearch={typeSearch} />
        <SearchCalendar typeSearch={typeSearch} />
        <SearchCalendar typeSearch={typeSearch} />
      </ScrollView>

      <Footer type="cliente" navigation={navigation} />
    </View>
  );
}
