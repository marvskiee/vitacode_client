import { StyleSheet, Text, Image, TouchableOpacity, View } from "react-native";
import React from "react";
import Logo from "../../Svg/Logo";
import colors from "../../../config/colors";
import { externalStyle } from "../../../styles/externalStyle";
const NavigateToDetails = (navigation, data, name) => {
  navigation.navigate(name, {
    navigationData: data,
  });
};

const ProductCard = (props) => {
  const { name, description, price, image } = props.data;
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {
        if (!props.view) {
          NavigateToDetails(props.navigation, props.data, "view_product");
        }
      }}
    >
      <View style={styles.productCard}>
        <View style={styles.smImage}>
          <Image
            source={{ uri: image }}
            style={{
              height: "100%",
              width: "100%",
            }}
          />
        </View>
        <View>
          <Text numberOfLines={1} style={styles.regular13}>
            {name}
          </Text>
          <Text numberOfLines={1} style={styles.regular13}>
            {description}
          </Text>
          <Text numberOfLines={1} style={styles.regular13}>
            ₱ {price}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create(externalStyle);
