import React, { Component } from 'react';
import {
  View,
  StyleSheet, 
  SafeAreaView, 
  Alert
} from "react-native";

import { Text, Button,Input } from "react-native-elements"; 
 
import   {myDatabase} from './../../configdb/configdb';


let addItem = item => {
  myDatabase.ref('/admins/admin').push({ 
    name: item
  });
}; 

export default class AddAdmin extends Component {
  constructor(props) {
    super(props);  
    this.state = {  name: ''}
  }
 
  
    handleChange = e => {
      this.setState({
        name: e.nativeEvent.text
      });
    };
    s
    handleSubmit = () => {
      addItem(this.state.name);
      Alert.alert('Item saved successfully');
      this.props.navigation.navigate("Administrateurs");
    };

  render() {
    return ( 
      <View style={styles.container}>
      <View style={styles.body}>
        <Text style={{ alignContent: "center", marginBottom: 30 }} h4>
          Administrateur
        </Text> 
        <View style={{ width: "100%", flex: 4  }}>
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1 ,
            }}
          /> 
          <View style={{ flex: 1, paddingTop: 10 }}>
          <SafeAreaView style ={{paddingBottom : 20}}>
          <Input placeholder=" UserAdmin" onChange={this.handleChange} />
            </SafeAreaView>  
            <Button title="Ajouter" 
             onPress={this.handleSubmit}
             />
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          alignItems: "flex-end",
          justifyContent: "center"
        }}
      >
      </View>
    </View>
    )
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
  item: {
    borderBottomWidth: 1,
    padding: 7,
    marginVertical: 8,
    marginHorizontal: 16,
    fontSize: 18
  },
  fo: {
    borderWidth: 1,
    borderColor: "#0275d8",

    width: "34%",
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#fff",
    alignItems: "center"
  },
  text: { color: "#0275d8" },
  textActive: { color: "#fff" },
  Active: { 
    borderWidth: 1,
    borderColor: "#0275d8",
    width: "34%",
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#0275d8", 
    alignItems: "center" ,
  
  }
});
