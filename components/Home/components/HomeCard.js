import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { externalStyle } from "../../../styles/externalStyle";
import colors from "../../../config/colors";

const NavigateToDetails = ({ navigation }, name) => {
  navigation.navigate(name);
};
const HomeCard = (props) => {
  const { icon, title, features, gradient, page } = props?.data;
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => NavigateToDetails(props, page)}
    >
      <LinearGradient colors={gradient} style={styles.homeCard}>
        <View style={styles.homeCardHeader}>
          {icon}
          <Text style={styles.homeTitle}>{title}</Text>
        </View>
        <View style={{ padding: 5 }}>
          {features &&
            features.map((item, index) => (
              <View
                numberOfLines={2}
                style={styles.homeDescription}
                key={index}
              >
                <Text style={[{ color: colors.black }]}>
                  {" \u2022"} {"    "}
                </Text>
                <Text style={styles.homeDescriptionItem}>{item}</Text>
              </View>
            ))}
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create(externalStyle);

export default HomeCard;
