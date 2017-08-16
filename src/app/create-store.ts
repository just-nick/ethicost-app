import { createStore, applyMiddleware, combineReducers } from 'redux';
//import * as promiseMiddleware from 'redux-promise';
import {apiMiddleware} from 'redux-api-middleware';
import {scoreReducer} from './score/score.reducer';
//import {CoffeeSaintsReducers, reducers} from './reducers';

export default function(data?: any) {
    let reducer = combineReducers({
        scoreReducer
    });
    return applyMiddleware(
        apiMiddleware
    )(createStore)(reducer, data);
}