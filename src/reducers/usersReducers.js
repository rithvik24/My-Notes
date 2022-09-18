const usersInitialState = {
    loading : false,
    data : {},
    errors : false
}

const usersReducers = (state = usersInitialState, action) => {
    switch(action.type) {
        case 'SET_USER' : {
            return {...state, data : action.payload }
        }
        default : {
            return { ...state }
        }
    }
}

export default usersReducers