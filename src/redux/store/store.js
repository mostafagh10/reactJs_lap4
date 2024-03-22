import { combineReducers , applyMiddleware , createStore} from 'redux'
import {thunk} from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { userreducer } from '../reducer/userreducer';
import { productreducer } from '../reducer/productreducer';

const reducer = combineReducers({
    user : userreducer,
    products : productreducer,
});

const initialstate = {};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialstate,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;