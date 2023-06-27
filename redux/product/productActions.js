import {
  SUCCESS_PRODUCTS,
  REQUEST_PRODUCTS,
  SET_PRODUCT_NAME,
  SET_PRODUCT_DESCRIPTION,
  SET_PRODUCT_PRICE,
  SET_PRODUCT_BARCODE,
  CLEAR_FORM_FIELDS,
  MODIFY_FORM_FIELDS,
  SET_SELECTED_ITEM,
  ADD_PRODUCT,
  SUCCESS_ADDED_PRODUCT,
  ERROR_ADDED_PRODUCT,
  SET_PRODUCT_IMAGE,
  SET_PRODUCT_ID,
  SUCCESS_UPDATE_PRODUCT,
  ERROR_UPDATE_PRODUCT,
  UPDATE_PRODUCT,
} from "./productTypes";

export const successUpdateStorage = (data) => {
  return {
    type: SUCCESS_UPDATE_PRODUCT,
    payload: data,
  };
};

export const successUpdateProduct = (data) => (dispatch) => {
  dispatch(successUpdateStorage(data));
};

export const errorUpdateStorage = () => {
  return {
    type: ERROR_UPDATE_PRODUCT,
  };
};

export const errorUpdateProduct = () => (dispatch) => {
  dispatch(errorUpdateStorage());
};

export const requestProducts = () => {
  return {
    type: REQUEST_PRODUCTS,
  };
};

export const requestProductsStorage = () => (dispatch) => {
  dispatch(requestProducts());
};

export const successProductsStorage = (data) => {
  return {
    type: SUCCESS_PRODUCTS,
    payload: data,
  };
};

export const setProducts = (data) => (dispatch) => {
  dispatch(successProductsStorage(data));
};

export const productName = (data) => {
  return {
    type: SET_PRODUCT_NAME,
    payload: data,
  };
};
export const productDescription = (data) => {
  return {
    type: SET_PRODUCT_DESCRIPTION,
    payload: data,
  };
};
export const productPrice = (data) => {
  return {
    type: SET_PRODUCT_PRICE,
    payload: data,
  };
};
export const productBarcode = (data) => {
  return {
    type: SET_PRODUCT_BARCODE,
    payload: data,
  };
};
export const productImage = (data) => {
  return {
    type: SET_PRODUCT_IMAGE,
    payload: data,
  };
};
export const productId = (data) => {
  return {
    type: SET_PRODUCT_ID,
    payload: data,
  };
};
// set the fields
export const setProductName = (data) => (dispatch) => {
  dispatch(productName(data));
};
export const setProductDescription = (data) => (dispatch) => {
  dispatch(productDescription(data));
};
export const setProductBarcode = (data) => (dispatch) => {
  dispatch(productBarcode(data));
};
export const setProductPrice = (data) => (dispatch) => {
  dispatch(productPrice(data));
};
export const setProductImage = (data) => (dispatch) => {
  dispatch(productImage(data));
};
export const setProductId = (data) => (dispatch) => {
  dispatch(productId(data));
};

//clear the fields
export const clearFields = () => {
  return {
    type: CLEAR_FORM_FIELDS,
  };
};
export const clearFormFields = () => (dispatch) => {
  dispatch(clearFields());
};

//allow editable
export const modifyForm = (data) => {
  return {
    type: MODIFY_FORM_FIELDS,
    payload: data,
  };
};
export const modifyFormFields = (data) => (dispatch) => {
  dispatch(modifyForm(data));
};

//set selected item
export const selectedItem = (data) => {
  return {
    type: SET_SELECTED_ITEM,
    payload: data,
  };
};
export const setSelectedItem = (data) => (dispatch) => {
  dispatch(selectedItem(data));
};

// add products
export const addProduct = () => {
  return {
    type: ADD_PRODUCT,
  };
};
export const addProductRequest = () => (dispatch) => {
  dispatch(addProduct());
};

// update products
export const updateProduct = () => {
  return {
    type: UPDATE_PRODUCT,
  };
};
export const updateProductRequest = () => (dispatch) => {
  dispatch(updateProduct());
};

export const successAddedProduct = (data) => {
  return {
    type: SUCCESS_ADDED_PRODUCT,
    payload: data,
  };
};
export const successAddedProductRequest = (data) => (dispatch) => {
  dispatch(successAddedProduct(data));
};

export const errorAddedProduct = () => {
  return {
    type: ERROR_ADDED_PRODUCT,
  };
};
export const errorAddedProductRequest = () => (dispatch) => {
  dispatch(errorAddedProduct());
};
