import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React from "react";
import { connect } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  clearFormFields,
  setProducts,
  addProductRequest,
  successAddedProductRequest,
  errorAddedProductRequest,
} from "../../../redux";
import { externalStyle } from "../../../styles/externalStyle";
import { firebase } from "../../../config/firebase_config";
import { getDownloadURL, ref, getStorage } from "firebase/storage";
import {
  connectionErrorToast,
  formErrorToast,
  successToast,
} from "../../Toast";
import config from "../../../config/axios_config";
import colors from "../../../config/colors";

const NewProductRightHeader = (props) => {
  const saveHandler = () => {
    const newData = {
      barcode: props.barcode,
      price: props.price,
      description: props.description,
      name: props.name,
    };
    if (
      newData.barcode.trim().length > 0 &&
      newData.price.trim().length > 0 &&
      newData.description.trim().length > 0 &&
      newData.name.trim().length > 0 &&
      props.image?.uri.length > 0
    ) {
      props.addProductRequest();
      uploadImage(newData);
    } else {
      formErrorToast();
    }
  };
  const uploadImage = async (newData) => {
    const response = await fetch(props.image?.uri);
    const blob = await response.blob();
    const filename = props.image?.uri.substring(
      props.image?.uri.lastIndexOf("/") + 1
    );
    var refr = firebase.storage().ref().child(filename).put(blob);
    try {
      await refr;
      const storage = getStorage();
      const reference = ref(storage, filename);
      await getDownloadURL(reference).then((x) => {
        addHandler(newData, x);
      });
    } catch (e) {
      console.log(e);
      props.errorAddedProductRequest();
      connectionErrorToast();
    }
  };
  const storeData = async (data) => {
    try {
      await AsyncStorage.setItem(
        "products",
        JSON.stringify([...props.products, data])
      );
      props.setProducts([...props.products, data]);
      successToast();
      props.navigation.navigate({
        name: "inventory",
        params: { barcode: "" },
        merge: true,
      });
    } catch (e) {
      console.log("Warning get in NewProductFormHeader.js: " + e.message);
      connectionErrorToast();
    }
    props.clearFormFields();
  };
  const addHandler = async (data, image) => {
    await config
      .post("product/add", { ...data, image })
      .then((res) => storeData({ ...res.data.data, image }))
      .catch((e) => {
        console.log("Error:" + e.message);
        connectionErrorToast();

        props.errorAddedProductRequest();
      });
  };
  return (
    <>
      {!props.loading ? (
        <TouchableOpacity
          style={styles.headerButton}
          activeOpacity={0.7}
          onPress={saveHandler}
        >
          <Text style={styles.headerButtonText}>Save</Text>
        </TouchableOpacity>
      ) : (
        <View style={[styles.headerButton, { backgroundColor: colors.gray }]}>
          <Text style={[styles.headerButtonText, { color: colors.black }]}>
            Submitting...
          </Text>
        </View>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.product.loading,
    barcode: state.product.product_barcode,
    price: state.product.product_price,
    description: state.product.product_description,
    name: state.product.product_name,
    products: state.product.products,
    image: state.product.product_image,
  };
};

export default connect(mapStateToProps, {
  clearFormFields,
  setProducts,
  addProductRequest,
  successAddedProductRequest,
  errorAddedProductRequest,
})(NewProductRightHeader);

const styles = StyleSheet.create(externalStyle);
