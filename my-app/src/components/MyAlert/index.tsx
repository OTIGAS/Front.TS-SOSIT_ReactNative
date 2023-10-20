import { Modal, View, Text, StyleSheet } from "react-native";

import Icons from "@expo/vector-icons/Feather";

import { MyStyles } from "./styles";

// Modal que simula os alert da aplicação
export const MyAlert = (props) => {
  const style = MyStyles()

  return (
    <Modal style={style.modal} visible={props.visivel}>
      <View style={style.box}>
        <View style={style.centro}>
          <Icons
            name={props.icone}
            size={45}
            color={props.cor}
            style={style.icone}
          />
          <Text style={style.titulo}>{props.tipo}</Text>
          <Text style={style.paragrafo}>{props.texto}</Text>
        </View>
      </View>
    </Modal>
  );
};