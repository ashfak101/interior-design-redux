
export  const fetchQuiz = () => {
    return (async (dispatch) => {
        
        await fetch("/quizz.json")
            .then((res) => res.json())
            .then((data) => 
            
            dispatch({ type: "SET_QUIZ", payload: data }));
    }
        
    )
}


export const  setResults = (payload) => {
    return {
        type: "QUIZ_RESULT",
        payload
    };
}