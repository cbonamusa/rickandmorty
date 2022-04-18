import {createStore, applyMiddleware, compose} from 'redux';
import thunk from "redux-thunk";
import appReducers from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension';



const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;
const enhancers = storeEnhancers(applyMiddleware(thunk));


export const store = createStore(
   appReducers(),  
   composeWithDevTools(enhancers)
);


