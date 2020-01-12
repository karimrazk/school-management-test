import React, { Component } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Alert,
  TouchableOpacity, 
} from "react-native";

import { Text, Button } from "react-native-elements"; 

  
export default class AdminScreen extends Component {
    render() {
      return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={{ alignContent: "center", marginBottom: 30 }} h3>
          Administrateur
        </Text>
        <Text>Listes des Administrateurs </Text>
        <View style={{ width: "100%", flex: 4  }}>
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1 ,
            }}
          />
          <View style={{ flex: 5}}>
            <FlatList
              data={[
                { key: "A1" },
                { key: "A2" },
                { key: "A3" },
                { key: "A4" },
                { key: "A11" },
                { key: "A12" },
                { key: "A13" },
                { key: "A14" },
                { key: "A21" },
                { key: "A22" },
                { key: "A23" },
                { key: "A24" }
              ]}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity onPress={() => Alert.alert("Clicked !")}>
                    <Text style={styles.item}> {item.key} </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <View style={{ flex: 1, paddingTop: 10 }}>
            <Button title="Ajouter Administrateur"/>
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
