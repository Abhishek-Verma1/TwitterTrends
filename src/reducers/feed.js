import * as actions from '../constants/actions/feed';

const initialState = {
    feed: null,
    isFetching: false,
    error: null
};

export default function feed(state = initialState, action) {
    switch (action.type) {
        case actions.GET_TWITTER_TRENDS_REQUEST:
            return {
                ...state,
                isFetching: false,
                feed: null,
                error: null
            };
        case actions.GET_TWITTER_TRENDS_SUCCESS:
            return {
                ...state,
                isFetching: true,
                feed: action.payload,
                error: null
            };
        case actions.GET_TWITTER_TRENDS_FAILURE:
            return {
                ...state,
                isFetching: true,
                feed: null,
                error: action.error
            };
        default:
            return state;
    }
}