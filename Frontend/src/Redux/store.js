import {createStore,applyMiddleware} from 'redux'
import Reducer from './reducers/rootreducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


const store=createStore(Reducer,composeWithDevTools(
    applyMiddleware(thunk)))
    // store.dispatch(fetch())

export default store