import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers';

const initialState={};
const middleware=[thunk];

const mi_store=createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware)
    )
)

export default mi_store;