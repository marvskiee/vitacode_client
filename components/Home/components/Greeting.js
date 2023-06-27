import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import Morning from "../../Svg/Morning";
import { externalStyle } from "../../../styles/externalStyle";
import Night from "../../Svg/Night";
import Afternoon from "../../Svg/Afternoon";

const Greeting = () => {
  const [greet, setGreet] = useState();
  useEffect(() => {
    const now = new Date();
    const current = now.getHours();
    if (current > 4 && current < 12) {
      setGreet("morning");
    } else if (current >= 12 && current < 18) {
      setGreet("afternoon");
    } else if (current >= 17 && current < 22) {
      setGreet("evening");
    } else {
      setGreet("night");
    }
  }, []);

  return (
    <View style={styles.greeting}>
      <View>
        <Text style={styles.semibold17}>Good {greet},</Text>
        <Text style={styles.semibold23}>Andrea Vita !</Text>
      </View>
      {greet == "morning" ? (
        <Morning />
      ) : greet == "afternoon" ? (
        <Afternoon />
      ) : (
        <Night />
      )}
    </View>
  );
};

const styles = StyleSheet.create(externalStyle);

export default Greeting;
