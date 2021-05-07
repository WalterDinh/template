import React, { Component, useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ActivityIndicator,
  FlatList
} from "react-native";
import styles from "./styles";
import LinearGradient from "react-native-linear-gradient";
import { Images } from "resources/index";
import axios from "axios";

export default class SearchPokemon extends Component {
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
      arrayPokemon: [],
      array: [],
      arrayName: [],
      index: 0,
      loading: false, // user list loading
      text: ""
    };
    this.limit = 6;
    this.offset = 0;
    // fetch(
    //   `https://pokeapi.co/api/v2/pokemon/?offset=${this.offset}&limit=${
    //     this.limit
    //   }`
    // )
    //   .then(response => response.json())
    //   .then(responseJson => {
    //     let arrayPokemon = responseJson.results;
    //     arrayPokemon.map(n =>
    //       fetch(n.url)
    //         .then(response => response.json())
    //         .then(responseJson => {
    //           this.setState({
    //             array: [...this.state.array, responseJson],
    //             arrayPokemon: [...this.state.array, responseJson],
    //             loading: false
    //           });
    //         })
    //         .catch(error => {
    //           console.error(error);
    //         })
    //     );
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
  }

  componentDidMount() {
    fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=964`)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ arrayPokemon: responseJson.results });
        console.log("asdds", this.state.arrayPokemon);
      })
      .catch(error => {
        console.error(error);
      });
  }

  searchPokemon(text) {
    console.log("asdds", this.state.arrayPokemon);
    this.setState({ loading: true, array: [],arrayName:[] });
    let newData = this.state.arrayPokemon.filter(item => {
      const itemData = item.name.toUpperCase();
      const textData = text.toUpperCase();
      console.log("ass", text);
      return itemData.indexOf(textData) > -1;
    });
    newData.map((n, index) => {
      if (index < 10) {
        fetch(n.url)
          .then(response => response.json())
          .then(responseJson => {
            this.setState({
              array: [responseJson],
              arrayName: newData,
              index: 10,
              loading: false
            });
          })
          .catch(error => {
            console.error(error);
          });
      }
    });
    // this.setState({ array: newData });
  }
  openPokemonDetail = item => {
    const { navigation } = this.props;
    console.log("item", item);
    navigation.navigate("PokemonInfo", {
      PokemonInfo: `https://pokeapi.co/api/v2/pokemon/${item.name}/`
    });
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

  renderItem = item => {
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
                      backgroundColor: this.colorType(item.types[0].type.name),
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
    // } else {
    //   return null;
    // }
  };

  render() {
    const { arrayPokemon, text, array } = this.state;
    // console.log("arrayPokemon", array);

    return (
      <LinearGradient colors={["#fff", "#B8DBD6"]} style={styles.container}>
        <View
          style={{
            position: "absolute",
            top: 16,
            alignItems: "center",
            zIndex: 1,
            justifyContent: "center",
            width: "100%"
          }}
        >
          <View style={styles.boxInput}>
            <Image source={Images.search} style={{ width: 17, height: 17 }} />
            <TextInput
              placeholder="Type Here..."
              style={styles.input}
              onChangeText={text => this.searchPokemon(text)}
            />
          </View>
        </View>
        <Image source={Images.logo} style={styles.logo} />
        <View style={styles.boxList}>
          <Image source={Images.pikachu} style={styles.logoTypePokemon} />
        </View>
        <FlatList
          style={{
            width: "90%",
            height: "85%",
            position: "absolute",
            top: 66
          }}
          data={array}
          extraData={this.props}
          renderItem={({ item, index }) => this.renderItem(item)}
          keyExtractor={item => item.name}
          ItemSeparatorComponent={this.renderSeparator}
          ListFooterComponent={this.renderFooter.bind(this)}
          onEndReachedThreshold={0.4}
          onEndReached={this.handleLoadMore.bind(this)}
        />
      </LinearGradient>
    );
  }

  handleLoadMore = () => {
    if (this.limit >= 964) {
      this.setState({ loading: false });
    } else {
      if (!this.state.loading) {
        this.onSearch();
      }
    }
  };
  onSearch = () => {
    this.setState({ loading: true });

    this.state.arrayName.map((n, index) => {
      if (index < this.state.index + 10 && index > this.state.index) {
        fetch(n.url)
          .then(response => response.json())
          .then(responseJson => {
            this.setState({
              array: [...this.state.array, responseJson],
              index: index + 10,
              loading: false
            });
          })
          .catch(error => {
            console.error(error);
          });
      }
    });
  };
  renderFooter = () => {
    console.log("loading", this.state.loading);
    //it will show indicator at the bottom of the list when data is loading otherwise it returns null
    if (!this.state.loading) return null;
    return <ActivityIndicator style={{ color: "#000" }} />;
  };
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 2,
          width: "100%"
        }}
      />
    );
  };
}
