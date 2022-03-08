import { combineReducers } from "redux";
import { blogsReducer } from "./blogsReducer";
import { courseReducer } from "./courseReducer";


const reducer = combineReducers({

    allCourse: courseReducer,
    allBlogs: blogsReducer

});

export default reducer;