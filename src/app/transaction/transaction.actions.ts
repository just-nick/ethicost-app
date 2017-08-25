import {ApiRequestFactory} from '../common/api-request.factory';

export namespace MerchantActions {
    export const GET_MERCHANTS = Symbol('GET_MERCHANTS');
    export const GET_MERCHANTS_SUCCESS = Symbol('GET_MERCHANTS_SUCCESS');
    export const GET_MERCHANTS_FAILURE = Symbol('GET_MERCHANTS_FAILURE');

    export function get() {
        return ApiRequestFactory.get([
                GET_MERCHANTS,
                GET_MERCHANTS_SUCCESS,
                GET_MERCHANTS_FAILURE
            ],
            '//www.mocky.io/v2/599fd3882c0000110a51d5a0'
        );
    }
}