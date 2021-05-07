import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Platform,
} from "react-native";
import styles from "./styles";
import { Storage } from "../../store/index";
import LinearGradient from "react-native-linear-gradient";
import { Images } from "resources/index";
import Spinner from "react-native-loading-spinner-overlay";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default class Home extends Component {
  static navigationOptions = {
    title: "HOME    ",
    headerStyle: {
      backgroundColor: "#30B5F1",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      width: "100%",
      textAlign: "center",
      fontWeight: "bold",
    },
  };
  render() {
    return (
      <LinearGradient colors={["#fff", "#B8DBD6"]} style={styles.container}>
        <Image source={Images.logo} style={styles.logo} />
        <ScrollView contentContainerStyle={{ flex: 1, }}>
          <TouchableOpacity
            style={styles.box1}
            onPress={() => this.props.navigation.navigate("ChooseType")}
          >
            <Image source={Images.typePokemon} style={styles.logoIcon} />
            {/* <Spinner visible={this.state.spinner} textContent={"Loading..."} /> */}
            <Text style={styles.text}>Pokémon Type</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.box2}
            onPress={() => this.props.navigation.navigate("SearchPokemon")}
          >
            <Image source={Images.iconPokemon} style={styles.logoIcon} />
            <Text style={styles.text}>Pokémon Name</Text>
          </TouchableOpacity>
        </ScrollView>
      </LinearGradient>
    );
  }
}
