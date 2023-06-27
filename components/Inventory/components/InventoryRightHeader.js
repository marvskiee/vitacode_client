import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { externalStyle } from "../../../styles/externalStyle";

const NavigateToDetails = ({ navigation }, name) => {
  navigation.navigate(name);
};
const InventoryRightHeader = (props) => {
  return (
    <TouchableOpacity
      style={styles.headerButton}
      activeOpacity={0.7}
      onPress={() => NavigateToDetails(props, "add_product")}
    >
      <Text style={styles.headerButtonText}>Add Product</Text>
    </TouchableOpacity>
  );
};

export default InventoryRightHeader;

const styles = StyleSheet.create(externalStyle);
