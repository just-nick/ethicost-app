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
            '//www.mocky.io/v2/5993c3ec1200008b09313d99'//'/api/score'
        );
    }
}