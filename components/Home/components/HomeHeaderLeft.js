import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Dimensions } from "react-native";
import Logo from "../../Svg/Logo";
import { externalStyle } from "../../../styles/externalStyle";

export default function HomeHeaderLeft() {
  return (
    <View style={styles.homeHeader}>
      <View
        style={[
          {
            flexDirection: "row",
            alignItems: "center",
          },
        ]}
      >
        <Logo />
        <Text numberOfLines={1} style={styles.semibold17}>
          Store
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create(externalStyle);
