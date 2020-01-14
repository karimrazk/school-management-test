import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import firebase from 'firebase'

import { Input, Icon, Button, Text } from "react-native-elements";
 


export default class updateProfil extends Component {
  render() {
    return (
      <View style={styles.container}>
    
        <View style={styles.body}>
          <Text style={{ alignContent: "center" }} h3>
            Profil
          </Text>
          <Input
          value ={"karim"}
            placeholder="Name "
            rightIcon={<Icon name="ios-person" type="ionicon" color="#000"
            disabled />}
          />
          
          <View style={{ flexDirection: "row", marginTop: 40 }}>
            <View style={{ flex: 1 }}>
              <Button
                title="update"
                onPress={() => {
                  this.props.navigation.navigate("Profile");
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
