import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import styles from "./styles";
import { Storage } from "../../store/index";
import LinearGradient from "react-native-linear-gradient";
import { Images } from "resources/index";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default class PokemonInfo extends Component {
  static navigationOptions = {
    title: "PoKeMoN Search",
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
    this.state = {
      pokemonInfo: {},
      loading: true
    };
    const b=[];
    const a=b.push(this.props.navigation.getParam("PokemonInfo"))
    Storage.setJson('listFavorite',a);
    console.log("pokemonInfo", Storage.get('listFavorite'));
  }

  componentDidMount() {
    fetch(this.props.navigation.getParam("PokemonInfo"))
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ pokemonInfo: responseJson, loading: false });
        console.log("pokemonInfo", this.state.pokemonInfo);
      })
      .catch(error => {
        console.error(error);
      });
  }
  colorType = type => {
    switch (type) {
      case "fire":
        return "#fd4b5a";
      case "hp":
        return "#fd4b5a";
      case "water":
        return "#85a8fb";
      case "dark":
        return "#595978";
      case "flying":
        return "#94b2c7";
      case "poison":
        return "#9b69da";
      case "special-defense":
        return "#9b69da";
      case "normal":
        return "#ca98a6";
      case "psychic":
        return "#f71d92";
      case "rock":
        return "#8b3e22";
      case "steel":
        return "#43bd94";
      case "speed":
        return "#43bd94";
      case "bug":
        return "#3c9950";
      case "special-attack":
        return "#3c9950";
      case "electric":
        return "#fafa72";
      case "defense":
        return "#fafa72";
      case "fairy":
        return "#e91368";
      case "attack":
        return "#e91368";
      case "dragon":
        return "#62cad9";
      case "fighting":
        return "#ef6239";
      case "ground":
        return "#6e491f";
      case "ice":
        return "#d8f0fa";
      case "ghost":
        return "#906791";
      case "grass":
        return "#27cb50";
      default:
        return "#fff";
    }
  };

  renderStats = () => {
    console.log("asdyygaygdiyu", this.state.pokemonInfo.stats);
    let array = this.state.pokemonInfo.stats;
    return array.map(n => (
      <View style={{ flexDirection: "row", margin: 8, alignItems: "center" }}>
        <Text style={[styles.infoPokemonText, { width: 110 }]}>
          {n.stat.name.toUpperCase()}
        </Text>
        <View
          style={[
            styles.lineStats,
            {
              width: parseInt(n.base_stat),
              backgroundColor: this.colorType(n.stat.name)
            }
          ]}
        >
          <Text style={styles.textType}>{n.base_stat}</Text>
        </View>
      </View>
    ));
  };

  render() {
    const { pokemonInfo, loading } = this.state;
   

    if (loading) {
      return (
        <ActivityIndicator
          style={{ marginTop: "60%" }}
          size="large"
          color="#B8DBD6"
        />
      );
    }
    return (
        <LinearGradient colors={["#fff", "#B8DBD6"]} style={styles.container}>
          <Text style={styles.pokemonName}>
            {pokemonInfo.name.toUpperCase()}
          </Text>
          <View style={styles.box}>
            <View style={styles.box1}>
              {pokemonInfo !== {} ? (
                <Image
                  source={{ uri: pokemonInfo.sprites.front_default }}
                  style={styles.logo}
                />
              ) : null}
            </View>
            <View style={styles.box2}>
              <View style={styles.boxInfo}>
                <View style={styles.boxText}>
                  <Text style={styles.text}>Type:</Text>

                  <View
                    style={[
                      styles.boxType,
                      {
                        backgroundColor: this.colorType(
                          pokemonInfo.types[0].type.name
                        )
                      }
                    ]}
                  >
                    <Text style={styles.textType}>
                      {pokemonInfo.types[0].type.name}
                    </Text>
                  </View>
                  {pokemonInfo.types[1] ? (
                    <View
                      style={[
                        styles.boxType,
                        {
                          backgroundColor: this.colorType(
                            pokemonInfo.types[1].type.name
                          )
                        }
                      ]}
                    >
                      <Text style={styles.textType}>
                        {pokemonInfo.types[1].type.name}
                      </Text>
                    </View>
                  ) : null}
                </View>
                <View style={styles.boxText}>
                  <Text style={styles.text}>Height:</Text>
                  <Text style={styles.infoPokemonText}>
                    {" "}
                    {pokemonInfo.height}
                  </Text>
                </View>
                <View style={styles.boxText}>
                  <Text style={styles.text}>Weight:</Text>
                  <Text style={styles.infoPokemonText}>
                    {" "}
                    {pokemonInfo.weight}
                  </Text>
                </View>
                <View style={styles.boxText}>
                  <Text style={styles.text}>Base experience:</Text>
                  <Text style={styles.infoPokemonText}>
                    {" "}
                    {pokemonInfo.base_experience}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.describe}>
            <Text
              style={{ fontSize: 20, fontWeight: "bold", color: "#717171" }}
            >
              Stats
            </Text>
          </View>
          <View
            style={[
              styles.boxText,
              {
                flexDirection: "column",
                alignItems: "flex-start",
                width: "100%"
              }
            ]}
          >
            {this.renderStats()}
          </View>
        </LinearGradient>
    );
  }
}
