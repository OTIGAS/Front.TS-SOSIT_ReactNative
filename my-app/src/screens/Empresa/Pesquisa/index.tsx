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

  useEffect(() => {
    
  }, [])
  const styles = MyStyles();

  const [typeSearch, setTypeSearch] = useState<"Serviço" | "Empresa">(
    "Serviço"
  );
  const search = useForm("");

  async function handlePress() {
    console.log("Alo");
  }

  return (
    <View style={styles.home}>
      <Header screen="Buscar" />

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
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Image source={require("./../../../assets/manage_search.png")} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.container}>
        <Calendars typeSearch={typeSearch} />
        <Calendars typeSearch={typeSearch} />
        <Calendars typeSearch={typeSearch} />
        <Calendars typeSearch={typeSearch} />
        <Calendars typeSearch={typeSearch} />
        <Calendars typeSearch={typeSearch} />
        <Calendars typeSearch={typeSearch} />
        <Calendars typeSearch={typeSearch} />
        <Calendars typeSearch={typeSearch} />
        <Calendars typeSearch={typeSearch} />
        <Calendars typeSearch={typeSearch} />
        <Calendars typeSearch={typeSearch} />
      </ScrollView>

      <Footer type="empresa" navigation={navigation} />
    </View>
  );
}
