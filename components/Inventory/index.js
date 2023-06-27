import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import Close from "../Svg/Close";
import Search from "../Svg/Search";
import { externalStyle } from "../../styles/externalStyle";
import Barcode from "../Svg/Barcode";

import { connect } from "react-redux";
import { setProducts, fetchProducts, modifyFormFields } from "../../redux";

const NavigateToDetails = (navigation, prevScreen, name) => {
  navigation.navigate(name, {
    prevScreen,
  });
};
const Inventory = (props) => {
  const [search, setSearch] = useState("");
  useEffect(() => {
    setSearch(props.route.params?.barcode || "");
    props.modifyFormFields(false);
  }, [props.route, props.products]);

  const searchFilter = props.products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.barcode.includes(search)
  );
  const header = () => {
    return (
      <View style={[styles.wrapper, { marginTop: 20 }]}>
        <View>
          <TextInput
            style={[styles.inputField, { paddingHorizontal: 40 }]}
            onChangeText={(e) => setSearch(e)}
            value={search}
            placeholder="Search product name or barcode"
          />

          {search.length > 0 ? (
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.searchIcons}
              onPress={() => setSearch("")}
            >
              <Close />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.searchIcons}
              onPress={() =>
                NavigateToDetails(props.navigation, "inventory", "scan_barcode")
              }
            >
              <Barcode />
            </TouchableOpacity>
          )}
          <View style={[styles.searchIcons, { left: 0 }]}>
            <Search />
          </View>
        </View>
        <Text style={[styles.semibold17, { paddingTop: 10 }]}>
          {search.length == 0
            ? "All Product's: " + searchFilter.length
            : "Result Found: " + searchFilter.length}
        </Text>
      </View>
    );
  };
  return (
    <View style={[{ backgroundColor: "white", height: "100%" }]}>
      {header()}
      <View style={[{ marginTop: 10, marginBottom: 100 }]}>
        {searchFilter.length > 0 && (
          <FlatList
            keyboardShouldPersistTaps={"handled"}
            columnWrapperStyle={styles.watch_layout}
            nestedScrollEnabled={true}
            data={searchFilter}
            numColumns={1}
            renderItem={({ item }) => <ProductCard {...props} data={item} />}
            ListHeaderComponent={() => <></>}
            ListFooterComponent={() => <Text></Text>}
          />
        )}
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.product.loading,
    products: state.product.products,
    modify: state.product.modify,
  };
};

export default connect(mapStateToProps, {
  setProducts,
  fetchProducts,
  modifyFormFields,
})(Inventory);
const styles = StyleSheet.create(externalStyle);
