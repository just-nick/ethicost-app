import {Action} from "redux";

export interface SessionAction extends Action {
    authenticated: boolean
}

export namespace SessionActions {
    export const GET_AUTHENTICATION_STATUS = Symbol('GET_AUTHENTICATION_STATUS');

    export function get() {
        const token = localStorage.getItem('idToken');

        return {
            type: GET_AUTHENTICATION_STATUS,
            authenticated: (token && token.length > 0)
        };
    }
}
