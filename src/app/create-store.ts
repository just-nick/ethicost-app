import {applyMiddleware, combineReducers, createStore} from "redux";
import {apiMiddleware} from "redux-api-middleware";
import {scoreReducer} from "./score/score.reducer";
import {sessionReducer} from "./session/session.reducer";
import { merchantReducer } from "./transaction/transaction.reducer";

export default function (data?: any) {
    let reducer = combineReducers({
        sessionReducer,
        scoreReducer,
        merchantReducer
    });
    return applyMiddleware(
        apiMiddleware
    )(createStore)(reducer, data);
}