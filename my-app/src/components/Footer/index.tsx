import { View, TouchableOpacity, Image } from "react-native";

import { MyStyles } from "./styles";

type FooterProps = {
  type: "cliente" | "empresa";
  navigation: any;
};

export const Footer = (props: FooterProps) => {
  const styles = MyStyles();

  function handleHistoric() {
    props.navigation.navigate('HistoricoCliente', {name: 'HistoricoCliente'})
  }

  function handleSearch() {
    props.navigation.navigate('PesquisaCliente', {name: 'PesquisaCliente'})
  }

  function handleProfile() {
    props.navigation.navigate('PerfilCliente', {name: 'PerfilCliente'})
  }

  return (
    <>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={handleHistoric}>
          <Image
            style={styles.images}
            source={require("./../../assets/historic.png")}
          />
        </TouchableOpacity>
        {props.type === "cliente" ? (
          <TouchableOpacity style={styles.button} onPress={handleSearch}>
            <Image
              style={styles.images}
              source={require("./../../assets/search.png")}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button}>
            <Image
              style={styles.images}
              source={require("./../../assets/edit_calendar.png")}
            />
          </TouchableOpacity>
        )}
        {
          props.type === "cliente" ? (
            <TouchableOpacity style={styles.button} onPress={handleProfile}>
              <Image
                style={styles.images}
                source={require("./../../assets/person.png")}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.button} onPress={handleProfile}>
              <Image
                style={styles.images}
                source={require("./../../assets/company.png")}
              />
            </TouchableOpacity>
          )
        }
      </View>
    </>
  );
};
