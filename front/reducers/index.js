const initialState = {
    user: {
        isLoggedIn: false,
        user: null,
        signUpData:{},
        loginData: {}
    },
    post: {
        mainPosts:[]
    }
}

const login=(data)=>{
    return {
        type: 'LOG_IN',
        data
    }
}


const rootReducer = (state=initialState, action)=>{

    switch (action.type) {
        case 'CHANGE_NICKNAME' :
            return {
                ...state,
                name: action.data
            }
    }
}
export default rootReducer;