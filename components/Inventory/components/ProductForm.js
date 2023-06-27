import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { externalStyle } from "../../../styles/externalStyle";
import colors from "../../../config/colors";
import * as ImagePicker from "expo-image-picker";
import Barcode from "../../Svg/Barcode";
import {
  setProductBarcode,
  setProductDescription,
  setProductName,
  setProductPrice,
  clearFormFields,
  setProductImage,
  modifyFormFields,
  setProductId,
} from "../../../redux";
import { connect } from "react-redux";

const NavigateToDetails = (navigation, prevScreen, name) => {
  navigation.navigate(name, {
    prevScreen,
  });
};

const ProductForm = (props) => {
  const page = props.route.name;
  const navigationData = props.route.params?.navigationData;
  useEffect(() => {
    if (page != "view_product") {
      props.modifyFormFields(true);
      props.clearFormFields();
    } else if (props.route.params?.modify) {
      props.modifyFormFields(true);
      setFields();
    } else {
      props.modifyFormFields(false);
      setFields();
    }
    props.setProductBarcode(
      props.route.params?.barcode || navigationData?.barcode || ""
    );
  }, [props.route]);
  const setFields = () => {
    props.setProductDescription(navigationData?.description);
    props.setProductPrice(navigationData?.price);
    props.setProductName(navigationData?.name);
    props.setProductBarcode(navigationData?.barcode);
    props.setProductImage(navigationData?.image);
    props.setProductId(navigationData?._id);
  };
  const imagePickerHandler = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowEditing: true,
      // aspect: [16, 9],
      quality: 1,
    });
    const source = { uri: result.uri };
    props.setProductImage(source);
  };

  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps={"handled"}>
      <View style={[styles.wrapper, { marginVertical: 20 }]}>
        <View>
          <Text style={styles.label}>Barcode</Text>
          <View>
            <TextInput
              editable={props.modify}
              selectTextOnFocus={props.modify}
              defaultValue={props.barcode || navigationData?.barcode}
              style={[
                styles.inputField,
                !props.modify && { backgroundColor: colors.gray },
                { paddingRight: 50 },
              ]}
              keyboardType="number-pad"
              onChangeText={(e) => props.setProductBarcode(e)}
            />
            {props.modify && (
              <TouchableOpacity
                onPress={() => {
                  NavigateToDetails(props.navigation, page, "scan_barcode");
                }}
                style={styles.barcodeBtn}
              >
                <Barcode />
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View>
          <Text style={styles.label}>Name</Text>
          <TextInput
            editable={props.modify}
            selectTextOnFocus={props.modify}
            defaultValue={navigationData?.name || props.name}
            style={[
              styles.inputField,
              !props.modify && { backgroundColor: colors.gray },
            ]}
            onChangeText={(e) => props.setProductName(e)}
          />
        </View>
        <View>
          <Text style={styles.label}>Description</Text>
          <TextInput
            editable={props.modify}
            selectTextOnFocus={props.modify}
            defaultValue={navigationData?.description || props.description}
            numberOfLines={5}
            multiline={true}
            style={[
              styles.inputField,
              {
                paddingVertical: 10,
                paddingHorizontal: 10,
                textAlignVertical: "top",
                fontSize: 15,
              },
              !props.modify && { backgroundColor: colors.gray },
            ]}
            disabledInputStyle={{ opacity: 1 }}
            onChangeText={(e) => props.setProductDescription(e)}
          />
        </View>
        <View>
          <Text style={styles.label}>Price</Text>
          <TextInput
            editable={props.modify}
            selectTextOnFocus={props.modify}
            defaultValue={
              navigationData?.price.toString() || props.price?.toString()
            }
            style={[
              styles.inputField,
              !props.modify && { backgroundColor: colors.gray },
            ]}
            onChangeText={(e) => props.setProductPrice(e)}
            keyboardType="number-pad"
          />
        </View>
        <View>
          <Text style={styles.label}>Upload Image</Text>
          <View style={styles.imageUpload}>
            <Image
              style={[
                {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  aspectRatio: 17 / 11,
                },
                styles.imageUpload,
                { borderColor: colors.gray },
              ]}
              source={{
                uri: props.image?.uri || props.image,
              }}
            />
            {props.modify && (
              <TouchableOpacity
                style={styles.scanButton}
                onPress={imagePickerHandler}
              >
                <Text style={styles.scanButtonText}>Choose Image</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const mapStateToProps = (state) => {
  return {
    loading: state.product.loading,
    barcode: state.product.product_barcode,
    price: state.product.product_price,
    description: state.product.product_description,
    name: state.product.product_name,
    modify: state.product.modify,
    image: state.product.product_image,
  };
};

export default connect(mapStateToProps, {
  setProductBarcode,
  setProductDescription,
  setProductName,
  setProductPrice,
  setProductImage,
  clearFormFields,
  modifyFormFields,
  setProductId,
})(ProductForm);
const styles = StyleSheet.create(externalStyle);
