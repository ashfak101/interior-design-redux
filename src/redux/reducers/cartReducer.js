const initialState = {
    cart: [],
  subTotal: 0,
  total: 0,
  vat: 0,
  disCountPrice: 0,
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart:  action.payload
            };
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload),
            };
        case "SET_SUBTOTAL":
            return {
                ...state,
                subTotal: action.payload,
            };
        case "SET_TOTAL":
            return {
                ...state,
                total: action.payload,
            };
        case "SET_VAT":
            return {
                ...state,
                vat: action.payload,
            };
        case "SET_DISCOUNT":
            return {
                ...state,
                disCountPrice: action.payload,
            };
        default:
            return state;
    }
}