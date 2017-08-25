import {applyMiddleware, combineReducers, createStore} from "redux";
import {apiMiddleware} from "redux-api-middleware";
import {scoreReducer} from "./score/score.reducer";
import {sessionReducer} from "./session/session.reducer";

export default function (data?: any) {
    let reducer = combineReducers({
        sessionReducer,
        scoreReducer
    });
    return applyMiddleware(
        apiMiddleware
    )(createStore)(reducer, data);
}