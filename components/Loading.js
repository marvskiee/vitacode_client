import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { externalStyle } from "../styles/externalStyle";
const Loading = () => {
  return (
    <View style={styles.loadingWrapper}>
      <View style={styles.loadingContent}>
        <Image
          source={require("../assets/images/loading.gif")}
          style={{ height: 50, width: 50 }}
        />
        <Text style={styles.loadingText}>
          Fetching resources this {"\n"}won't consume data.
        </Text>
      </View>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create(externalStyle);
