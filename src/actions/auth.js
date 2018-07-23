import * as actions from '../constants/actions/auth';
import { authService } from '../services/auth';
import { NavigationActions } from 'react-navigation';

import { getTwitterTrends } from './feed';

function handleResponse(type, payload) {
    console.log({ type, payload })
    return { type, payload };
}

function handleError(type, error) {
    console.log({ type, error })
    return { type, error };
}

export function Login() {
    return dispatch => {
        dispatch(handleResponse(actions.LOGIN_REQUEST));

        authService.Login()
            .then(
                response => {
                    // dispatch(handleResponse(actions.LOGIN_SUCCESS, response));
                    // alert('Login sucess!')
                    console.log({response});
                    console.log("access_token: " + response.access_token);

                    dispatch(getTwitterTrends(response.access_token));
                },
                error => {
                    dispatch(handleError(actions.LOGIN_FAILURE, error));
                    alert(error);
                }
            );
    }
};