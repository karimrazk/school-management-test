import React, { Component } from "react";
import { View, Text, StyleSheet ,TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

export default class ItemComponent extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired
  };

  render() {
    return (
      <View>
        {
        
        Object.values(this.props.items).map((item, index) => {
          return (
            <View key={index}>
              <TouchableOpacity onPress={() => Alert.alert("Clicked !")}>
                <Text style={styles.item}> {item.name} </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    item: {
        borderBottomWidth: 1,
        padding: 7,
        marginVertical: 8,
        marginHorizontal: 16,
        fontSize: 18
      },
});
