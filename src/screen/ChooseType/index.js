import React, { Component } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import styles from "./styles";
import Swiper from "react-native-swiper";
import LinearGradient from "react-native-linear-gradient";
import { Images } from "resources/index";

export default class ChooseType extends Component {
  static navigationOptions = {
    title: "PoKéMoN Type",
    headerStyle: {
      backgroundColor: "#30B5F1"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <LinearGradient colors={["#fff", "#B8DBD6"]} style={styles.container}>
        <Image source={Images.logo} style={styles.logo} />
        <View style={styles.box}>
          <Swiper style={styles.wrapper} showsPagination={false}>
            <View style={styles.box2}>
              <TouchableOpacity
                style={styles.logoIcon}
                onPress={() =>
                  this.props.navigation.navigate("ListPokemon", {
                    type: "fire"
                  })
                }
              >
                <Image source={Images.typeFire} style={styles.logoIcon2} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.logoIcon}
                onPress={() =>
                  this.props.navigation.navigate("ListPokemon", { type: "ice" })
                }
              >
                <Image source={Images.typeIce} style={styles.logoIcon2} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.logoIcon}
                onPress={() =>
                  this.props.navigation.navigate("ListPokemon", {
                    type: "dragon"
                  })
                }
              >
                <Image source={Images.typeDragon} style={styles.logoIcon2} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.logoIcon}
                onPress={() =>
                  this.props.navigation.navigate("ListPokemon", {
                    type: "electric"
                  })
                }
              >
                <Image source={Images.typeElectric} style={styles.logoIcon2} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.logoIcon}
                onPress={() =>
                  this.props.navigation.navigate("ListPokemon", {
                    type: "fairy"
                  })
                }
              >
                <Image source={Images.typeFairy} style={styles.logoIcon2} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.logoIcon}
                onPress={() =>
                  this.props.navigation.navigate("ListPokemon", {
                    type: "grass"
                  })
                }
              >
                <Image source={Images.typeGrass} style={styles.logoIcon2} />
              </TouchableOpacity>
            </View>
            <View style={styles.box2}>
              <TouchableOpacity
                style={styles.logoIcon}
                onPress={() =>
                  this.props.navigation.navigate("ListPokemon", {
                    type: "ghost"
                  })
                }
              >
                <Image source={Images.typeGhost} style={styles.logoIcon2} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.logoIcon}
                onPress={() =>
                  this.props.navigation.navigate("ListPokemon", {
                    type: "fighting"
                  })
                }
              >
                <Image source={Images.typeFighting} style={styles.logoIcon2} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.logoIcon}
                onPress={() =>
                  this.props.navigation.navigate("ListPokemon", {
                    type: "flying"
                  })
                }
              >
                <Image source={Images.typeFlying} style={styles.logoIcon2} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.logoIcon}
                onPress={() =>
                  this.props.navigation.navigate("ListPokemon", {
                    type: "ground"
                  })
                }
              >
                <Image source={Images.typeGround} style={styles.logoIcon2} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.logoIcon}
                onPress={() =>
                  this.props.navigation.navigate("ListPokemon", {
                    type: "normal"
                  })
                }
              >
                <Image source={Images.typeNormal} style={styles.logoIcon2} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.logoIcon}
                onPress={() =>
                  this.props.navigation.navigate("ListPokemon", {
                    type: "dark"
                  })
                }
              >
                <Image source={Images.typeDark} style={styles.logoIcon2} />
              </TouchableOpacity>
            </View>
            <View style={styles.box2}>
              <TouchableOpacity
                style={styles.logoIcon}
                onPress={() =>
                  this.props.navigation.navigate("ListPokemon", {
                    type: "water"
                  })
                }
              >
                <Image source={Images.typeWater} style={styles.logoIcon2} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.logoIcon}
                onPress={() =>
                  this.props.navigation.navigate("ListPokemon", {
                    type: "steel"
                  })
                }
              >
                <Image source={Images.typeSteel} style={styles.logoIcon2} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.logoIcon}
                onPress={() =>
                  this.props.navigation.navigate("ListPokemon", {
                    type: "rock"
                  })
                }
              >
                <Image source={Images.typeRock} style={styles.logoIcon2} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.logoIcon}
                onPress={() =>
                  this.props.navigation.navigate("ListPokemon", {
                    type: "psychic"
                  })
                }
              >
                <Image source={Images.typePsychic} style={styles.logoIcon2} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.logoIcon}
                onPress={() =>
                  this.props.navigation.navigate("ListPokemon", {
                    type: "poison"
                  })
                }
              >
                <Image source={Images.typePoison} style={styles.logoIcon2} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.logoIcon}
                onPress={() =>
                  this.props.navigation.navigate("ListPokemon", {
                    type: "bug"
                  })
                }
              >
                <Image source={Images.typeBug} style={styles.logoIcon2} />
              </TouchableOpacity>
            </View>
          </Swiper>
        </View>
      </LinearGradient>
    );
  }
}
