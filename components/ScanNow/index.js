import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { externalStyle } from "../../styles/externalStyle";
import ScanBarcode from "../Inventory/components/ScanBarcode";

const ScanNow = (props) => {
  return <ScanBarcode></ScanBarcode>;
};

export default ScanNow;

const styles = StyleSheet.create(externalStyle);
