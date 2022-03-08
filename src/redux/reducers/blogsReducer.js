const initialState ={
    blogs: []
}

export const blogsReducer = (state = initialState, action) => {
     switch (action.type){
            case "SET_BLOGS": 
                return{
                    ...state,
                    blogs: action.payload
                }
            default: return state;    
     }
}