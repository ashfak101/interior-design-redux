export const fetchCourses = () => {
  return( async (dispatch) => {
    await fetch("course.json")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "SET_PRODUCTS", payload: data }));
  });
};

export const selectedCourse = (payload) => {
    
  return {
    

    type: "SELECTED_PRODUCT",
    payload,
  };
};
