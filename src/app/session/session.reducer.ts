import {SessionAction, SessionActions} from "./session.actions";
import {ISessionStore} from "./session.store";

const initialState: ISessionStore = {
    authenticated: false,
};

export function sessionReducer(state: ISessionStore = initialState, action: SessionAction): ISessionStore {
    switch (action.type) {
        case SessionActions.GET_AUTHENTICATION_STATUS:
            return {
                ...state,
                authenticated: action.authenticated
            };

        default:
            return state;
    }
}
