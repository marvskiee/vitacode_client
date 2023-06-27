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
  SET_PRODUCT_IMAGE,
  ERROR_ADDED_PRODUCT,
  SET_PRODUCT_ID,
  SUCCESS_UPDATE_PRODUCT,
  ERROR_UPDATE_PRODUCT,
  UPDATE_PRODUCT,
} from "./productTypes";

const initialState = {
  products: [],
  product_name: "",
  product_description: "",
  product_price: "",
  product_id: "",
  product_image: null,
  product_barcode: "",
  selectedItem: "",
  modify: true,
  loading: false,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_PRODUCTS:
      return {
        ...state,
        loading: true,
      };
    case SUCCESS_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
        modify: false,
      };
    case SET_PRODUCT_NAME:
      return {
        ...state,
        product_name: action.payload,
      };
    case SET_PRODUCT_DESCRIPTION:
      return {
        ...state,
        product_description: action.payload,
      };
    case SET_PRODUCT_IMAGE:
      return {
        ...state,
        product_image: action.payload,
      };
    case SET_PRODUCT_PRICE:
      return {
        ...state,
        product_price: action.payload,
      };
    case SET_PRODUCT_BARCODE:
      return {
        ...state,
        product_barcode: action.payload,
      };
    case SET_PRODUCT_ID:
      return {
        ...state,
        product_id: action.payload,
      };
    case CLEAR_FORM_FIELDS:
      return {
        ...state,
        product_name: "",
        product_description: "",
        product_price: "",
        product_barcode: "",
        product_image: null,
        loading: false,
      };
    case MODIFY_FORM_FIELDS:
      return {
        ...state,
        modify: action.payload,
      };
    case SET_SELECTED_ITEM:
      return {
        ...state,
        selectedItem: action.payload,
      };
    case UPDATE_PRODUCT:
    case ADD_PRODUCT:
      return {
        ...state,
        loading: true,
        modify: false,
      };
    case SUCCESS_UPDATE_PRODUCT:
    case SUCCESS_ADDED_PRODUCT:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case ERROR_ADDED_PRODUCT:
    case ERROR_UPDATE_PRODUCT:
      return {
        ...state,
        loading: false,
        modify: true,
      };
    default:
      return state;
  }
};
export default productReducer;
