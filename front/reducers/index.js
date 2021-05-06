import {HYDRATE} from 'next-redux-wrapper'
import {combineReducer} from 'redux'
import user from './user'
import post from './post'

const initialState = {
    user: {
        
    },
    post: {
        
    }
}



const rootReducer = (state=initialState, action)=>{

    switch (action.type) {
        case HYDRATE : 
            console.log('hydrate', action)
            return {...state, ...action.payload};
        
        default:
            return state;
    }
}
export default rootReducer;