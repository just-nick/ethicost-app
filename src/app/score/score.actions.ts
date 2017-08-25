import {ApiRequestFactory} from '../common/api-request.factory';

export namespace ScoreActions {
    export const GET_SCORE = Symbol('GET_SCORE');
    export const GET_SCORE_SUCCESS = Symbol('GET_SCORE_SUCCESS');
    export const GET_SCORE_FAILURE = Symbol('GET_SCORE_FAILURE');

    export function get() {
        return ApiRequestFactory.get([
                GET_SCORE,
                GET_SCORE_SUCCESS,
                GET_SCORE_FAILURE
            ],
            '/api/score'
        );
    }
}