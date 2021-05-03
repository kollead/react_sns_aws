const initialState = {
    name: '1'
    age: 22
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