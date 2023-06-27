// REDUX
import { Provider } from "react-redux";
import store from "./redux/store";

import React from "react";
import { StyleSheet, Text } from "react-native";
import { useFonts } from "expo-font";

// NAVIGATION
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";
import HomeHeaderLeft from "./components/Home/components/HomeHeaderLeft";
import HomeHeaderRight from "./components/Home/components/HomeHeaderRight";
import Inventory from "./components/Inventory";
import DownloadUpload from "./components/DownloadUpload";
import ScanNow from "./components/ScanNow";
import { externalStyle } from "./styles/externalStyle";
import InventoryRightHeader from "./components/Inventory/components/InventoryRightHeader";
import ProductCard from "./components/Inventory/components/ProductCard";
import ProductForm from "./components/Inventory/components/ProductForm";
import ViewProductRightHeader from "./components/Inventory/components/ViewProductRightHeader";
import ScanBarcode from "./components/Inventory/components/ScanBarcode";
import Guide from "./components/Home/components/Guide";
import NewProductRightHeader from "./components/Inventory/components/NewProductRightHeader";

export default function App() {
  const Stack = createNativeStackNavigator();
  const [loaded] = useFonts({
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    semibold: require("./assets/fonts/Poppins-SemiBold.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen
            title="VitaStore"
            name="home"
            component={Home}
            options={(props) => ({
              title: "",
              // headerShadowVisible: false,
              headerStyle: styles.semibold17,
              headerLeft: () => <HomeHeaderLeft {...props} />,
              headerRight: () => <HomeHeaderRight {...props} />,
            })}
          />
          <Stack.Screen
            title="Inventory"
            name="inventory"
            component={Inventory}
            options={(props) => ({
              title: "",
              headerTitle: () => (
                <Text style={styles.semibold17}>Inventory</Text>
              ),
              headerRight: () => <InventoryRightHeader {...props} />,
            })}
          />

          <Stack.Screen
            title=""
            name="scan_product_now"
            component={ScanNow}
            options={() => ({
              title: "",
              headerTitle: () => (
                <Text style={styles.semibold17}>Scan Product</Text>
              ),
            })}
          />
          <Stack.Screen
            title=""
            name="add_product"
            component={ProductForm}
            options={(props) => ({
              title: "",
              headerTitle: () => (
                <Text style={styles.semibold17}>New Product</Text>
              ),
              headerRight: () => <NewProductRightHeader {...props} />,
            })}
          />
          <Stack.Screen
            title=""
            name="view_product"
            component={ProductForm}
            options={(props) => ({
              title: "",
              headerTitle: () => <Text style={styles.semibold17}>Product</Text>,
              headerRight: () => <ViewProductRightHeader />,
            })}
          />
          <Stack.Screen
            title=""
            name="scan_barcode"
            component={ScanBarcode}
            options={(props) => ({
              title: "",
              headerTitle: () => (
                <Text style={styles.semibold17}>Scan Barcode</Text>
              ),
            })}
          />
          <Stack.Screen
            title=""
            name="guide"
            component={Guide}
            options={(props) => ({
              title: "",
              headerTitle: () => <Text style={styles.semibold17}>Guide</Text>,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create(externalStyle);
