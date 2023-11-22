import { ScrollView, Text } from "react-native";
import { MyStyles } from "./styles";

import useForm from "../../../hooks/useForm";

import { Input } from "../../../components/Input";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { OpenAppointments } from "../../../components/OpenAppointments";
import { BookedAppointments } from "../../../components/BookedAppointments";

export function AgendaEmpresaC({ navigation }) {
  const styles = MyStyles();

  const data = useForm("");

  return (
    <>
      <Header screen="Agenda" />
      <ScrollView style={styles.mainContainer}>
        <Input
          keyboardType="numeric"
          placeholder="Data"
          placeholderTextColor="#B9B9B9"
          value={data.value}
          error={data.error}
          onBlur={data.onBlur}
          onChange={data.setValue}
        />
      </ScrollView>
      <Footer navigation={navigation} type="cliente" />
    </>
  );
}
