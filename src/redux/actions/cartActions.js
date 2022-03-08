export const addToCart =(payload)=>{
    return {
        type: "ADD_TO_CART",
        payload
    }
}

export const addVat = (payload) => {
    return {
        type: "SET_VAT",
        payload,
    };
}

export const addDiscount = (payload) => {
    return {
        type: "SET_DISCOUNT",
        payload,
    };
}
export const  setSubTotal = (payload) => {
    return {
        type: "SET_SUBTOTAL",
        payload,
    };
}
 export const deletFromCart = (payload) => {
    return {
        type: "REMOVE_FROM_CART",
        payload,
    };
}