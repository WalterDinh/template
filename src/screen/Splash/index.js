import { View } from "react-native";
import React, { Component } from "react";
import styles from "./styles";

export default class Splash extends Component {
  componentDidMount() {
    setTimeout(() => this.props.navigation.navigate("Home"), 3000);
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.boxTop} />
        <View style={styles.lineCenter}>
          <View style={styles.circleBlack}>
            <View style={styles.circleWhite}>
              <View style={styles.circleWhiteSmall} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
