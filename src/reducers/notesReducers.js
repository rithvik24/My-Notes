const notesInitialState = {
    isLoading : false,
    data : [],
    errors : false
}

const notesReducers = (state = notesInitialState, action) => {
    switch(action.type){
        case 'SET_NOTES' : {
            return { ...state , data : [...action.payload]}
        }
        case 'ADD_NOTE' : {
           return { ...state , data : [ ...state.data , action.payload ] }
        }
        case 'EDIT_NOTE' : {
            return { ...state , data : state.data.map((ele) => {
                if(ele._id === action.payload._id){
                    return {...action.payload}
                }else{
                    return {...ele}
                }
            }) }
        }
        case 'REMOVE_NOTE' : {
            return { ...state , data : state.data.filter((ele) => {
                return ele._id !== action.payload._id
            })}
        }
        default : {
            return {...state}
        }   
    }
}
export default notesReducers