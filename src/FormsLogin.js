import React from "react";
import { Input, Icon, Button, Text } from "react-native-elements";
import { StyleSheet, View } from "react-native";

const FormsLogin = () => {
  return (
    <View style={styles.body}>
      <Text style={{ alignContent: "center" }} h3>
        LOGINn
      </Text>
      <Input
        placeholder=" UserName"
        rightIcon={<Icon name="ios-person" type="ionicon" color="#000" />}
      />
      <Input secureTextEntry={true}
        placeholder=" Password"
        rightIcon={<Icon name="ios-lock" type="ionicon" color="#000" />}
      />
      <View style={{ flexDirection: "row", marginTop: 40 }}>
        <View style={{ flex: 1 }}>
          <Button title="Se connecter" onPress={() => {this.props.navigation.navigate('About')}}/>
 
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingTop: 80,
    margin: 20,
    backgroundColor: "#f9f7f7",
    display: "flex",
    alignItems: "center"
  }
});

export default FormsLogin;
