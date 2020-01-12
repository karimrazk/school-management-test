import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import { Input, Icon, Button, Text } from "react-native-elements";
 
import Header from "./Header";

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />

        <View style={styles.body}>
          <Text style={{ alignContent: "center" }} h3>
            LOGIN
          </Text>
          <Input
            placeholder=" UserName"
            rightIcon={<Icon name="ios-person" type="ionicon" color="#000" />}
          />
          <Input
            secureTextEntry={true}
            placeholder=" Password"
            rightIcon={<Icon name="ios-lock" type="ionicon" color="#000" />}
          />
          <View style={{ flexDirection: "row", marginTop: 40 }}>
            <View style={{ flex: 1 }}>
              <Button
                title="Se connecter"
                onPress={() => {
                  this.props.navigation.navigate("adminScreen");
                }}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  body: {
    flex: 1,
    paddingTop: 80,
    margin: 20,
    backgroundColor: "#f9f7f7",
    display: "flex",
    alignItems: "center"
  }
});
