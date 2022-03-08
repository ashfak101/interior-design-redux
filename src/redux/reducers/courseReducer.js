const initialState ={
    courses: [  
    ],
    singleCourse: {},
    err:'',
}

export const courseReducer = (state = initialState, action) => {
    switch (action.type){
        case "SET_PRODUCTS":
            return{
                ...state,
                courses: action.payload

            }
         case "SET_ERROR":
            return{
                ...state,
                err: action.payload
            }
            
         case "SELECTED_PRODUCT":  
           return{
                ...state,
                singleCourse: state.courses.find((course) => course.id === action.payload)
           } 

         default:
            return state;   
    }


}