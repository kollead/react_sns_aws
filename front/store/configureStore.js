import {createWrapper} from 'next-redux-wrapper';
import {compose, createStore, applyMiddleware} from 'redux'
import reducer from '../reducers/index'
import {composeWithDevTools} from 'redux-devtools-extension'

const configureStore = () => {
    const middlewares = []
    const enhencer = process.env.NODE_ENV === 'production'
        ? compose(applyMiddleware(...middlewares))
        : composeWithDevTools(applyMiddleware(...middlewares))
    const store =  createStore(reducer, enhencer);
    return store;
};

const wrapper = createWrapper(configureStore, {
    debug: process.env.NODE_ENV === 'development', 
});

export default wrapper;