import React, { Component } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Alert,
  TouchableOpacity, 
} from "react-native";

import { Input, Text, Button } from "react-native-elements"; 

export default class AddStudent extends Component {
  render() {
    return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={{ alignContent: "center", marginBottom: 30 }} h5>
          Etudiant
        </Text> 
        <View style={{ width: "100%", flex: 4 ,}}>
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1 ,
            }}
          />  
          <View >
            <SafeAreaView style={{paddingBottom : 20,paddingTop :20,}} >
             <Input    placeholder=" NameStudent" />
             </SafeAreaView>
            <Button title="Ajouter"  
             onPress={() =>  this.props.navigation.navigate('Etudiants')}
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
    flexDirection: "column",
    backgroundColor :"#fff",
  },
  body: {
    flex: 1,
    paddingTop: 40,
    margin: 20,
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
  }, 
});
