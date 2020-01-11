import React, { Component } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Alert,
  TouchableOpacity
} from "react-native";

import { Text, Button } from "react-native-elements";

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <Text style={{ alignContent: "center", marginBottom: 30 }} h3>
            Administrateur
          </Text>
          <Text>Listes des Administrateurs</Text>
          <View style={{ width: "100%", flex: 4 }}>
            <View
              style={{
                borderBottomColor: "black",
                borderBottomWidth: 1
              }}
            />
            <View style={{ flex: 5 }}>
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
              <Button title="Ajouter Administrateur"  onPress={() => {
              this.props.navigation.navigate("AjouterAdmin");
            }} />
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
          <TouchableOpacity
            style={styles.Active}
            onPress={() => {
              this.props.navigation.navigate("Login");
            }}
          >
            <Text style={styles.textActive}>Administrateurs</Text>
          </TouchableOpacity>
          <TouchableOpacity style={(styles.fo, styles.fo)}  onPress={() => {
              this.props.navigation.navigate("Classes");
            }}>
            <Text style={styles.text}>Classes</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.fo}>
            <Text style={styles.text}>Etudiants</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {

    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",

  },
  body: {

    flex: 1,
    margin: 20,
   paddingTop: 40,
    display: "flex",
    alignItems: "center", 
    backgroundColor: "#fff",

  },
  item: {

    padding: 7, 
    fontSize: 18,
    marginVertical: 8,
    marginHorizontal: 16, 
    borderBottomWidth: 1,
   
  },
  fo: {
    
    width: "34%",
    paddingTop: 20,
    borderWidth: 1,
    paddingBottom: 20,
    alignItems: "center",
    borderColor: "#0275d8",
    backgroundColor: "#fff",
    
  },
  text: {
  
    color: "#0275d8",
  
  },
  textActive: {

    color: "#fff",
  
  },
  Active: {
    
    width: "34%",
    paddingTop: 20,
    borderWidth: 1,
    paddingBottom: 20,
    alignItems: "center",
    borderColor: "#0275d8",
    backgroundColor: "#0275d8",
    
  }
});
