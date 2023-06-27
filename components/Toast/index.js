import { ToastAndroid } from "react-native";
export const connectionErrorToast = () => {
  ToastAndroid.show(
    "Error Ocurred, Please check your internet connection and try again later!",
    ToastAndroid.SHORT
  );
};
export const formErrorToast = () => {
  ToastAndroid.show("Please fill up the form!", ToastAndroid.SHORT);
};
export const updateSuccessToast = () => {
  ToastAndroid.showWithGravityAndOffset(
    "Product has been updated!",
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM,
    25,
    50
  );
};
export const successToast = () => {
  ToastAndroid.showWithGravityAndOffset(
    "New Product has been added!",
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM,
    25,
    50
  );
};

export const syncSuccessToast = () => {
  // ToastAndroid.show("Resources successfully synced!", ToastAndroid.SHORT);
  ToastAndroid.showWithGravityAndOffset(
    "Resources successfully synced!",
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM,
    25,
    50
  );
};
export const syncErrorToast = () => {
  ToastAndroid.showWithGravityAndOffset(
    "Please connect to the internet, resources will set to offline mode! ",
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM,
    25,
    50
  );
};
