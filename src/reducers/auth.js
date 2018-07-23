import * as actions from '../constants/actions/auth';

const initialState = {
    user: null,
    isLogin: false,
    error: null
};

export default function auth(state = initialState, action) {
    switch (action.type) {
        case actions.LOGIN_REQUEST:
            return {
                ...state,
                isLogin: true,
                user: null,
                error: null
            };
        case actions.LOGIN_SUCCESS:
            return {
                ...state,
                isLogin: false,
                user: action.payload,
                error: null
            };
        case actions.LOGIN_FAILURE:
            return {
                ...state,
                isLogin: false,
                user: null,
                error: action.error
            };
        default:
            return state;
    }
}