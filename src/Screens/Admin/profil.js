import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import firebase from 'firebase'

import { Input, Icon, Button, Text } from "react-native-elements";
 
export default class Profil extends Component {

  render() {
    return (
      <View style={styles.container}>
    

        <View style={styles.body}>
          <Text style={{  alignSelf: "center" }} h3>
            Profile
          </Text>
           <View style= {{flex :1, marginTop : 20  }}> 
           <Text style = {{fontSize : 18}}>
            Name : Karim Razouk {'\n'} 
          </Text> 

          </View>
         
          <View style={{ flexDirection: "row", marginTop: 40 }}>
            <View style={{ flex: 1 }}>
              <Button
                title="update"
                onPress={() => {
                  this.props.navigation.navigate("updateProfil");
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
  }
});
