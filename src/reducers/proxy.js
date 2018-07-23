import {
    GET_PROXY_REQUEST,
    GET_PROXY_REQUEST_SUCCESS,
    GET_PROXY_REQUEST_ERROR,
    CLEAR_LINK_INFO
} from './../types';

export default function proxy(state = {}, action = {}) {
    switch (action.type) {
        case GET_PROXY_REQUEST:
            return action.data;
        case GET_PROXY_REQUEST_SUCCESS:
            return action.data;
        case GET_PROXY_REQUEST_ERROR:
            return action.data;
        case CLEAR_LINK_INFO:
            return action.data;
        default:
            return state;
    }
}