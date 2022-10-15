import * as types from "./actionTypes";
const init = {
  products: [],
  isLoading: false,
  isError: false,
};
const reducer = (state = init, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: payload,
      };
    case types.GET_PRODUCT_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    

    default:
      return state;
  }
};
export { reducer };
