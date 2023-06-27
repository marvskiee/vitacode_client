import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { externalStyle } from "../../styles/externalStyle";

const DownloadUpload = () => {
  const section = [
    {
      title: "Upload to the Server",
      description:
        "Save your progress to update the data from the server. This will be a data backup.",
      button: "Upload Now",
      buttonHandler: () => uploadHandler,
    },
    {
      title: "Download from Server",
      description:
        "To manually get the latest inventory and keep track the producrts even when offline. Please continue to download.",
      button: "Download Now",
      buttonHandler: () => downloadHandler,
    },
  ];
  const uploadHandler = () => {
    console.log("");
  };
  const downloadHandler = () => {
    console.log("");
  };
  return (
    <View style={[{ padding: 30, backgroundColor: "white", height: "100%" }]}>
      <View>
        <Text>
          Note: By proceeding with this feature. Please make sure you are
          connected to internet and do not turn off the power or exit the
          application.
        </Text>
      </View>
      {section &&
        section.map(({ title, description, button, buttonHandler }, index) => (
          <View key={index} style={[{ marginVertical: 20 }]}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={buttonHandler}
              style={styles.button}
            >
              <Text style={styles.buttonText}>{button}</Text>
            </TouchableOpacity>
          </View>
        ))}
    </View>
  );
};

export default DownloadUpload;

const styles = StyleSheet.create(externalStyle);
