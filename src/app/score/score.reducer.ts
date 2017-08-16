import {ScoreStore} from './score.store';
import {ApiRequestAction} from '../common/api-request.action';
import {ScoreActions} from './score.actions';

const initialState: ScoreStore = {
    value: 0,
    loading: false
};

export function scoreReducer(state: ScoreStore = initialState, action: ApiRequestAction): ScoreStore {
    switch (action.type) {
        case ScoreActions.GET_SCORE:
            console.log('Request start');
            return {
                ...state,
                loading: true
            };

        case ScoreActions.GET_SCORE_SUCCESS:
            console.log('Request end');
            return {
                value: action.payload.value,
                loading: false
            };

        case ScoreActions.GET_SCORE_FAILURE:
            console.log('Request fail', action);
            return state;

        default:
            return state;
    }
}