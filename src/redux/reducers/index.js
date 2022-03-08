import { combineReducers } from "redux";
import { blogsReducer } from "./blogsReducer";
import { cartReducer } from "./cartReducer";
import { courseReducer } from "./courseReducer";


const reducer = combineReducers({

    allCourse: courseReducer,
    allBlogs: blogsReducer,
    allCart: cartReducer
});

export default reducer;