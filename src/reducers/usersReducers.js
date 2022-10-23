const usersInitialState = {
    isLoading : true,
    data : {},
    errors : false
}

const usersReducers = (state = usersInitialState, action) => {
    switch(action.type) {
        case 'GET_USER' : {
            return {...state , data : action.payload}
        }
        case 'IS_LOADING' : {
            return { ...state , isLoading : false}
        }
        default : {
            return { ...state }
        }
    }
}

export default usersReducers