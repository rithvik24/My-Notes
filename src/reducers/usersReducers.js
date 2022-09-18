const usersInitialState = {
    loading : false,
    data : {},
    errors : false
}

const usersReducers = (state = usersInitialState, action) => {
    switch(action.type) {
        default : {
            return { ...state }
        }
    }
}

export default usersReducers