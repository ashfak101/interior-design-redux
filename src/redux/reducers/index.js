import { combineReducers } from "redux";
import { blogsReducer } from "./blogsReducer";
import { cartReducer } from "./cartReducer";
import { courseReducer } from "./courseReducer";
import { quizReducer } from "./quizReducer";


const reducer = combineReducers({

    allCourse: courseReducer,
    allBlogs: blogsReducer,
    allCart: cartReducer,
    allQuiz: quizReducer,
});

export default reducer;