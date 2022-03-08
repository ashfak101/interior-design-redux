export const fetchBlogs = () => {
    return (
        async (dispatch)=>{
            await fetch("blogs.json")
            .then((res) => res.json())
            .then((data) => dispatch({ type: "SET_BLOGS", payload: data }));
        }
    )
}