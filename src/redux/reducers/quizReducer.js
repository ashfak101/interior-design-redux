



const initialState = {
    quizResults: [],
    quizs:[],
    loading: true,
}




export const quizReducer = (state = initialState, action) => {
    switch (action.type) {
        case "QUIZ_RESULT":
            return {
                ...state,
               
                quizResults: action.payload,
            };
         case "SET_QUIZ":
            return {
                ...state,
                loading: false,
                quizs: action.payload,
            };   
        default:
            return state;
    }
}