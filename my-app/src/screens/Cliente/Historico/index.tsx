import { View } from "react-native";
import { MyStyles } from "./styles";

import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";

export function Historico({navigation}) {
  const styles = MyStyles();

  return (
    <>
      <Header screen="Histórico"/>
      <View style={styles.historico}>
        
      </View>
      <Footer 
        navigation={navigation} 
        type="cliente"
      />
    </>
  );
}