import { feedService } from '../services/feed';
import { NavigationActions } from 'react-navigation';
import * as actions from '../constants/actions/feed';

function handleResponse(type, payload) {
    console.log({ type, payload })
    return { type, payload };
}

function handleError(type, error) {
    console.log({ type, error })
    return { type, error };
}

export function getTwitterTrends(access_token) {
    return dispatch => {
        dispatch(handleResponse(actions.GET_TWITTER_TRENDS_REQUEST));

        feedService.getTwitterTrends(access_token)
            .then(
                feeds => {
                    dispatch(handleResponse(actions.GET_TWITTER_TRENDS_SUCCESS, feeds));
                },
                error => {
                    dispatch(handleError(actions.GET_TWITTER_TRENDS_FAILURE, error));
                    alert(error);
                }
            );
    }
};