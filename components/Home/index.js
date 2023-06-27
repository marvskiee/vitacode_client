import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import Greeting from "./components/Greeting";
import HomeCard from "./components/HomeCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { externalStyle } from "../../styles/externalStyle";
import Camera from "../Svg/Camera";
import Store from "../Svg/Store";
import Sync from "../Svg/Sync";
import { connect } from "react-redux";
import { setProducts, requestProductsStorage, requestSync } from "../../redux";
import Loading from "../Loading";
import colors from "../../config/colors";
import config from "../../config/axios_config";
import Search from "../Svg/Search";
import { syncErrorToast, syncSuccessToast } from "../Toast";
const Home = (props) => {
  useEffect(() => {
    getOnlineProducts();
  }, []);
  const getOnlineProducts = async () => {
    props.requestProductsStorage();
    setTimeout(async () => {
      await config
        .get("product/")
        .then((res) => {
          syncSuccessToast();
          storeData(res.data.data);
        })
        .catch(async (e) => {
          syncErrorToast();
          console.log("Error:" + e.message);
          await getData();
        });
    }, 2000);
  };
  const storeData = async (data) => {
    try {
      await AsyncStorage.setItem("products", JSON.stringify(data));
      props.setProducts(data || []);
    } catch (e) {
      console.log("Warning set in Home.js: " + e);
    }
  };
  const getData = async () => {
    try {
      const storedProducts = await AsyncStorage.getItem("products");
      console.log(storedProducts);
      props.setProducts(JSON.parse(storedProducts) || []);
    } catch (e) {
      console.log("Warning Occur in Home.js: " + e.message);
    }
  };
  const menuData = [
    {
      icon: <Camera />,
      title: "Scan Product",
      features: [
        "Search products by scanning barcode only.",
        "Quick scan",
        "Show products base on search.",
      ],
      gradient: [colors.blue, colors.blue],
      page: "scan_product_now",
    },
    {
      icon: <Store />,
      title: "Inventory",
      features: [
        "Search products by name and barcode number.",
        "Show all listed products.",
        "Edit product details.",
        "Manage new products.",
      ],
      gradient: [colors.violet, colors.violet],
      page: "inventory",
    },
  ];
  return (
    <View>
      {props.loading && <Loading />}
      <ScrollView style={styles.container}>
        <StatusBar
          animated={true}
          backgroundColor="#fff"
          barStyle="dark-content"
          hidden={false}
        />
        <View style={[styles.wrapper, { marginBottom: 8 }]}>
          <Greeting />
          {menuData &&
            menuData.map((data, index) => (
              <HomeCard {...props} key={index} data={data} />
            ))}
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.syncBtn} onPress={getOnlineProducts}>
        <Sync />
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.product.loading,
  };
};

export default connect(mapStateToProps, {
  setProducts,
  requestProductsStorage,
  requestSync,
})(Home);

const styles = StyleSheet.create(externalStyle);
