import React, { useState, useEffect } from "react";
import {
  Text,
  FlatList,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import ProductCard from "./ProductCard";
import { BarCodeScanner } from "expo-barcode-scanner";
import { connect } from "react-redux";
import colors from "../../../config/colors";
import CardLayout from "../../ScanNow/components/CardLayout";
import { externalStyle } from "../../../styles/externalStyle";

function ScanBarcode(props) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const prevScreen = props.route?.params.prevScreen;
  const width = Dimensions.get("window").width;
  const [selected, setSelected] = useState();
  const [localBarcode, setLocalBarcode] = useState([]);
  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    if (prevScreen != undefined) {
      props.navigation.navigate({
        name: prevScreen,
        params: { barcode: data, modify: prevScreen == "view_product" },
        merge: true,
      });
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  const quickBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    const search = props.products.filter((p) => p.barcode === data);
    setLocalBarcode(search);
  };
  const quickScan = () => {
    return (
      <>
        <View
          style={{
            height: 200,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {scanned && (
            <View style={styles.scanWrapper}>
              <TouchableOpacity
                style={styles.scanButton}
                onPress={() => setScanned(undefined)}
              >
                <Text style={styles.scanButtonText}>Scan again</Text>
              </TouchableOpacity>
            </View>
          )}
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : quickBarCodeScanned}
            style={[
              prevScreen == undefined
                ? { height: width + 130, overflow: "hidden" }
                : { height: "100%" },
            ]}
          />
        </View>
        <View style={{ padding: 20, paddingVertical: 10 }}>
          <Text style={{ fontFamily: "semibold" }}>
            Barcode Match: {localBarcode.length}
          </Text>
        </View>
        {/* <View style={{ marginBottom: 10 }}> */}
        <FlatList
          keyboardShouldPersistTaps={"handled"}
          // columnWrapperStyle={styles.watch_layout}
          nestedScrollEnabled={true}
          data={localBarcode}
          numColumns={1}
          renderItem={({ item }) => (
            <CardLayout data={item} view={true} selected={selected} />
          )}
          ListFooterComponent={() => <Text style={{ paddingBottom: 5 }}></Text>}
        />
        {/* </View> */}
      </>
    );
  };
  const inventory = () => {
    return (
      <>
        <View
          style={{
            height: "100%",
            backgroundColor: "white",
            overflow: "hidden",
          }}
        >
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={[{ height: "100%" }]}
          />
        </View>
      </>
    );
  };

  return (
    <View style={styles.container}>
      {prevScreen == undefined ? quickScan() : inventory()}
    </View>
  );
}
const mapStateToProps = (state) => {
  return {
    products: state.product.products,
  };
};
export default connect(mapStateToProps, {})(ScanBarcode);

const styles = StyleSheet.create(externalStyle);
