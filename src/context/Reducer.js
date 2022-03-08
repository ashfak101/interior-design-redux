export const reducer = (state, action) => {
  switch (action.type) {
    case "cart":
      return {
        ...state,
        cart: action.value,
      };
    case "vat":
      return {
        ...state,
        vat: action.value,
      };

    case "finalTotal":
      return {
        ...state,
        finalTotal: action.value,
      };
    case "discount":
      return {
        ...state,
        disCountPrice: action.value,
      };

    case "results":
      return {
        ...state,
        results: action.value,
      };

    case "blogs":
      return {
        ...state,
        blogs: action.value,
      };

    case "quizResults":
      return {
        ...state,
        quizResults: action.value,
      };
    default:
      return state;
  }
};
