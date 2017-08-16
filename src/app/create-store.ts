import { createStore, applyMiddleware, combineReducers } from 'redux';
//import * as promiseMiddleware from 'redux-promise';
//import {apiMiddleware} from 'redux-api-middleware';
//import {CoffeeSaintsReducers, reducers} from './reducers';

export default function(data?: any) {
    let reducer = combineReducers({});
    // return applyMiddleware(
    //     apiMiddleware
    // )(createStore)(reducer, data);
    return createStore(reducer, data);
}