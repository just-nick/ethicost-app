import {ApiRequestAction} from '../common/api-request.action';
import { MerchantStore } from "./transaction.store";
import { MerchantActions } from "./transaction.actions";

const initialState: MerchantStore = {
    merchants: [],
    loading: false
};

export function merchantReducer(state: MerchantStore = initialState, action: ApiRequestAction): MerchantStore {
    switch (action.type) {
        case MerchantActions.GET_MERCHANTS:
            console.log('Request start');
            return {
                ...state,
                loading: true
            };

        case MerchantActions.GET_MERCHANTS_SUCCESS:
            console.log('Request end');
            return {
                merchants: action.payload.value,
                loading: false
            };

        case MerchantActions.GET_MERCHANTS_FAILURE:
            console.log('Request fail', action);
            return state;

        default:
            return state;
    }
}