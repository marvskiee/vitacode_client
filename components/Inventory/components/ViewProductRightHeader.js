import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ToastAndroid,
} from "react-native";
import React, { useState, useEffect } from "react";
import { externalStyle } from "../../../styles/externalStyle";
import { firebase } from "../../../config/firebase_config";
import { getDownloadURL, ref, getStorage } from "firebase/storage";

import { connect } from "react-redux";
import {
  modifyFormFields,
  updateProductRequest,
  setProducts,
  setProductImage,
  errorUpdateProduct,
} from "../../../redux";
import config from "../../../config/axios_config";
import colors from "../../../config/colors";
import {
  connectionErrorToast,
  formErrorToast,
  updateSuccessToast,
} from "../../Toast";
const ViewProductRightHeader = (props) => {
  const [tempImage, setTempImage] = useState();

  const saveHandler = () => {
    const newData = {
      _id: props._id,
      name: props.name,
      barcode: props.barcode,
      description: props.description,
      price: props.price,
      image: props.image?.uri || props.image,
    };
    if (
      newData.barcode.length > 0 &&
      newData.price.length > 0 &&
      newData.description.length > 0 &&
      newData.name.length > 0
    ) {
      props.updateProductRequest();
      const newImage = props.image?.uri;
      if (newImage) {
        // console.log(tempImage);
        deleteFromFirebase(tempImage);
        uploadImage({ ...newData, image: newImage });
      } else {
        updateHandler(newData);
      }
    } else {
      formErrorToast();
    }
  };
  const deleteFromFirebase = (url) => {
    try {
      let pictureRef = firebase.storage().refFromURL(url);
      pictureRef
        .delete()
        .then(() => {
          console.log("Image deleted");
        })
        .catch((err) => {
          connectionErrorToast();
          props.errorUpdateProduct();
          console.log(err);
        });
    } catch (e) {
      // connectionErrorToast();
      props.errorUpdateProduct();
    }
  };
  const updateHandler = async (newData) => {
    await config
      .put("product/update", newData)
      .then(() => {
        console.log("checker: ", newData.image);
        props.setProductImage(newData.image);
        getOnlineProducts();
      })
      .catch((e) => {
        props.errorUpdateProduct();

        connectionErrorToast();
        console.log("Error:" + e.message);
      });
  };
  const uploadImage = async (newData) => {
    try {
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
          updateHandler({ ...newData, image: x });
        });
      } catch (e) {
        props.errorUpdateProduct();
        connectionErrorToast();
        console.log(e);
      }
    } catch (e) {
      props.errorUpdateProduct();
      connectionErrorToast();
      console.log(e);
    }
  };
  const getOnlineProducts = async () => {
    // props.requestProductsStorage();
    setTimeout(async () => {
      await config
        .get("product/")
        .then((res) => {
          updateSuccessToast();
          props.setProducts(res.data.data || []);
        })
        .catch((e) => {
          connectionErrorToast();
          console.log("Error:" + e.message);
        });
    }, 2000);
  };
  return (
    <View style={styles.viewProductHeader}>
      {props.modify ? (
        <TouchableOpacity style={styles.headerButton} onPress={saveHandler}>
          <Text style={styles.headerButtonText}>Save</Text>
        </TouchableOpacity>
      ) : props.loading ? (
        <View style={[styles.headerButton, { backgroundColor: colors.gray }]}>
          <Text style={[styles.headerButtonText, { color: colors.black }]}>
            Submitting...
          </Text>
        </View>
      ) : (
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => {
            props.modifyFormFields(true);
            setTempImage(props.image);
            console.log("Edit:", props.image);
          }}
        >
          <Text style={styles.headerButtonText}>Edit</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedItem: state.product.selectedItem,
    loading: state.product.loading,
    modify: state.product.modify,
    name: state.product.product_name,
    description: state.product.product_description,
    price: state.product.product_price,
    barcode: state.product.product_barcode,
    image: state.product.product_image,
    _id: state.product.product_id,
  };
};

export default connect(mapStateToProps, {
  modifyFormFields,
  updateProductRequest,
  setProductImage,
  setProducts,
  errorUpdateProduct,
})(ViewProductRightHeader);

const styles = StyleSheet.create(externalStyle);
