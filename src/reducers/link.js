import {
    GET_SHORT_LINK_REQUEST,
    GET_SHORT_LINK_REQUEST_SUCCESS,
    GET_SHORT_LINK_REQUEST_ERROR
} from './../types';

export default function link(state = {}, action = {}) {
    switch (action.type) {
        case GET_SHORT_LINK_REQUEST:
            return action.data;
        case GET_SHORT_LINK_REQUEST_SUCCESS:
            return action.data;
        case GET_SHORT_LINK_REQUEST_ERROR:
            return action.data;
        default:
            return state;
    }
}