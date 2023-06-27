import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { externalStyle } from "../../../styles/externalStyle";
import { connect } from "react-redux";
import { setSelectedItem } from "../../../redux";
import Logo from "../../Svg/Logo";
import More from "../../Svg/More";
const CardLayout = (props) => {
  const { image, description, name, price, _id } = props.data;
  return (
    <View style={styles.wrapper}>
      <View style={{ width: "100%", marginVertical: 10, overflow: "hidden" }}>
        {props.selectedItem == _id && (
          <View style={styles.scanDescription}>
            <TouchableOpacity
              style={styles.closeBtn}
              onPress={() => props.setSelectedItem("")}
            >
              <Text style={styles.closeBtnText} numberOfLines={1}>
                Close
              </Text>
            </TouchableOpacity>
            <Text style={[styles.regular13, { marginTop: 30, color: "white" }]}>
              {description}
            </Text>
          </View>
        )}
        {image ? (
          <Image style={styles.lgImage} source={{ uri: image }} />
        ) : (
          <View style={styles.noImage}>
            <Logo />
          </View>
        )}
        <Text numberOfLines={1} style={styles.priceBadge}>
          ₱ {price}
        </Text>
        <TouchableOpacity
          onPress={() => props.setSelectedItem(_id)}
          style={styles.descriptionButton}
        >
          <More />
        </TouchableOpacity>
        <Text numberOfLines={1} style={styles.nameBadge}>
          {name}
        </Text>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedItem: state.product.selectedItem,
  };
};
export default connect(mapStateToProps, { setSelectedItem })(CardLayout);

const styles = StyleSheet.create(externalStyle);
