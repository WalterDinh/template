import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList
} from "react-native";
import { SearchBar } from "react-native-elements";
import styles from "./styles";
import LinearGradient from "react-native-linear-gradient";
import { Images } from "resources/index";

export default class ListPokemon extends Component {
  static navigationOptions = {
    title: "PoKeMoN Fire Type",
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
      arrayPokemon: [],
      array:[],
      text: "",
      type: props.navigation.getParam("type")
    };
  }

  componentDidMount() {
    let a = [];
    return fetch(
      `https://pokeapi.co/api/v2/type/${this.props.navigation.getParam("type")}`
    )
      .then(response => response.json())
      .then(responseJson => {
        let arrayPokemon = responseJson.pokemon;
        let b = arrayPokemon.map(n =>
          fetch(n.pokemon.url)
            .then(response => response.json())
            .then(responseJson => {
              this.setState({
                arrayPokemon: [...this.state.arrayPokemon,responseJson],
                array: [...this.state.array,responseJson]
              });
            })
            .catch(error => {
              console.error(error);
            })
        );
        console.log("aaaa", b);
      })
      .catch(error => {
        console.error(error);
      });
  }



  iconType = type => {
    switch (type) {
      case "fire":
        return Images.typeFire;
      case "water":
        return Images.typeWater;
      case "dark":
        return Images.typeDark;
      case "flying":
        return Images.typeFlying;
      case "poison":
        return Images.typePoison;
      case "normal":
        return Images.typeNormal;
      case "psychic":
        return Images.typePsychic;
      case "rock":
        return Images.typeRock;
      case "steel":
        return Images.typeSteel;
      case "bug":
        return Images.typeBug;
      case "electric":
        return Images.typeElectric;
      case "fairy":
        return Images.typeFairy;
      case "dragon":
        return Images.typeDragon;
      case "fighting":
        return Images.typeFighting;
      case "ground":
        return Images.typeGrounds;
      case "ice":
        return Images.typeIce;
      case "ghost":
        return Images.typeGhost;
      case "grass":
        return Images.typeGrass;
      default:
        return Images.typeFire;
    }
  };
  colorType = type => {
    switch (type) {
      case "fire":
        return "#fd4b5a";
      case "water":
        return "#85a8fb";
      case "dark":
        return "#595978";
      case "flying":
        return "#94b2c7";
      case "poison":
        return "#9b69da";
      case "normal":
        return "#ca98a6";
      case "psychic":
        return "#f71d92";
      case "rock":
        return "#8b3e22";
      case "steel":
        return "#43bd94";
      case "bug":
        return "#3c9950";
      case "electric":
        return "#fafa72";
      case "fairy":
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

  openPokemonDetail = item => {
    const { navigation } = this.props;
    console.log("item", item);
    navigation.navigate("PokemonInfo", { PokemonInfo: `https://pokeapi.co/api/v2/pokemon/${item.name}/` });
  };

  renderItem = item => {
    if (item.name) {
      const { type } = item.types;
      return (
        <TouchableOpacity
          style={styles.listItem}
          onPress={() => this.openPokemonDetail(item)}
        >
          <View style={{ flex: 1, alignItems: "center" }}>
            <Image
              source={{ uri: item.sprites.front_default }}
              style={{ height: "90%", width: 90, resizeMode: "contain" }}
            />
          </View>

          <View style={{ justifyContent: "flex-start", flex: 1.3 }}>
            <Text
              style={{
                fontSize: 20,
                width: "95%",
                fontWeight: "bold",
                color: "#30B5F1"
              }}
            >
              {item.name}
            </Text>
          </View>
          <View
            style={{
              flex: 1.3,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            <View
              style={
                item.types[1]
                  ? [
                      styles.boxType,
                      {
                        backgroundColor: this.colorType(item.types[0].type.name)
                      }
                    ]
                  : [
                      styles.boxType,
                      {
                        backgroundColor: this.colorType(
                          item.types[0].type.name
                        ),
                        width: 75,
                        marginRight: 20
                      }
                    ]
              }
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "bold",
                  color: "white"
                }}
              >
                {item.types[0].type.name}
              </Text>
            </View>
            {item.types[1] ? (
              <View
                style={[
                  styles.boxType,
                  {
                    backgroundColor: this.colorType(item.types[1].type.name),
                    marginRight: 20,
                    marginLeft: 8
                  }
                ]}
              >
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                    color: "white"
                  }}
                >
                  {item.types[1].type.name}
                </Text>
              </View>
            ) : null}
          </View>
        </TouchableOpacity>
      );
    }
    return null;
  };

  searchFilterFunction = text => {
    const newData = this.state.array.filter(item => {
      const itemData = item.name.toUpperCase() ;
      const textData = text.toUpperCase();
      console.log('newData',itemData)

      return itemData.indexOf(textData) > -1;
    });
    console.log('newData',newData)
    this.setState({ arrayPokemon: newData });
  };

  render() {
    // console.log("bbb", this.state.arrayPokemon);

    return (
      <LinearGradient colors={["#fff", "#B8DBD6"]} style={styles.container}>
        <View
          style={{
            position: "absolute",
            top: 16,
            zIndex: 1,
            alignItems: "center",
            justifyContent: "center",
            width: "100%"
          }}
        >
          <View style={styles.boxInput}>
            <Image source={Images.search} style={{ width: 17, height: 17 }} />
            <TextInput
              placeholder="Type Here..."
              style={styles.input}
              onChangeText={text => this.searchFilterFunction(text)}
            />
          </View>
        </View>
        <Image source={Images.logo} style={styles.logo} />
        <View style={styles.boxList}>
          <Image
            source={this.iconType(this.state.type)}
            style={styles.logoTypePokemon}
          />
          {this.state.arrayPokemon !== [] ? (
            <FlatList
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0
              }}
              data={this.state.arrayPokemon}
              extraData={this.props}
              renderItem={({ item, index }) => this.renderItem(item)}
            />
          ) : null}
        </View>
      </LinearGradient>
    );
  }
}
