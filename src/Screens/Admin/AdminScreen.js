import React, { Component } from "react";

import {
  View,
  StyleSheet,
  FlatList,
  Alert,
  TouchableOpacity
} from "react-native";

import { Text, Button } from "react-native-elements";

import { myDatabase } from "./../../configdb/configdb";
import ItemComponent from "./ItemComponent";

let adminsRef = myDatabase.ref("/admins/admin");

export default class screenAdmin extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    adminsRef.on("value", snapshot => {
      let data = snapshot.val();
      let items = Object.values(data);

      this.setState({ items });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <Text style={{ alignContent: "center", marginBottom: 30 }} h4>
            Administrateur 
          </Text>
          <Text>Listes des Administrateurs </Text>
          <View style={{ width: "100%", flex: 4 }}>
            <View
              style={{
                borderBottomColor: "black",
                borderBottomWidth: 1
              }}
            />
            <View style={{ flex: 5 }}>
              {this.state.items.length > 0 ? (
                <ItemComponent items={this.state.items} />
              ) : (
                <Text>No one </Text>
              )}
            </View>

            <View style={{ flex: 1, paddingTop: 10 }}>
              <Button
                title="Ajouter"
                onPress={() => this.props.navigation.navigate("addAdmin")}
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
        ></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff"
  },
  body: {
    flex: 1,
    paddingTop: 40,
    margin: 20,
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center"
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
    alignItems: "center"
  }
});
