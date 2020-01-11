import React from "react";
import { Input, Icon, Button, Text } from "react-native-elements";
import { StyleSheet, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
    <Text style={{ fontSize: 24, color: "#fff" }}>My app</Text>
  </View>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#1089ff",
    height: "17%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Header;
