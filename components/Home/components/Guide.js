import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { externalStyle } from "../../../styles/externalStyle";
import Close from "../../Svg/Close";
import Search from "../../Svg/Search";

const Guide = (props) => {
  const [search, setSearch] = useState("");

  const data = [
    {
      title: "Price Checking",
      body: 'To check the price instant, You may go to "Scan Product" and scan the barcode this can be located on product label.',
    },
    {
      title: "Offline mode",
      body: "We support offline mode to continue our service even though theres no internet. But the drawbacks is you cannot manage the inventory like adding products and update.",
    },
    {
      title: "Adding Product",
      body: "Go to inventory and click the add product in the top right corner and provide the following fields in the form.",
    },
    {
      title: "Bug and Reports",
      body: "If you found some error on this application, Kindly contact the developer regarding this issue to fix the bug.",
    },
    {
      title: "Manage products",
      body: "In this section it is required to be connected to the internet. You may update the following products in the inventory.",
    },
    {
      title: "Synchronize Resources",
      body: "Internet is required when syncing and this is default action when this application launch. If you want to sync the resources you may press the sync button in home section.",
    },
  ];
  const searchFilter = data.filter(
    (d) =>
      d.title.toLowerCase().includes(search.toLowerCase()) ||
      d.body.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <View style={[styles.container]}>
      <View style={{ marginHorizontal: 20, paddingBottom: 20, marginTop: 20 }}>
        <TextInput
          style={[styles.inputField, { paddingHorizontal: 40 }]}
          onChangeText={(e) => setSearch(e)}
          value={search}
          placeholder="Search product name or barcode"
        />
        {search.length > 0 && (
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.searchIcons}
            onPress={() => setSearch("")}
          >
            <Close />
          </TouchableOpacity>
        )}
        <View style={[styles.searchIcons, { left: 0 }]}>
          <Search />
        </View>
      </View>
      <FlatList
        keyboardShouldPersistTaps={"handled"}
        nestedScrollEnabled={true}
        data={searchFilter}
        numColumns={1}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 20, paddingHorizontal: 20 }}>
            <Text style={styles.semibold23}>{item.title}</Text>
            <Text style={[styles.regular13]}>{item.body}</Text>
          </View>
        )}
        // ListFooterComponent={() => <Text style={{ paddingBottom: 5 }}></Text>}
      />
    </View>
  );
};

export default Guide;

const styles = StyleSheet.create(externalStyle);
