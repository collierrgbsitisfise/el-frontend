import {
    GET_SHORT_LINK_REQUEST,
    GET_SHORT_LINK_REQUEST_SUCCESS,
    GET_SHORT_LINK_REQUEST_ERROR
} from './../types';

import linkAPI from './../api/api';

export const getShortLinkRequest = link => ({
    type: GET_SHORT_LINK_REQUEST,
    data: {
       error: false,
       status: 'PENDING', 
    }    
});

export const getShortLinkRequestSuccess = link => ({
    type: GET_SHORT_LINK_REQUEST_SUCCESS,
    data: {
        error: false,
        status: 'FINISHED',
        data: link 
    }
});

export const getShortLinkRequestError = err => ({
    type: GET_SHORT_LINK_REQUEST_ERROR,
    data: {
        error: true,
        status: 'ERROR',
        msg: err 
    }
});


export const getLink = (link,privateOnly=false,isOnceAvailable=false) => dispatch => {
    dispatch(getShortLinkRequest(link));
    linkAPI.getShortLink(link,privateOnly,isOnceAvailable)
        .then(body => dispatch(getShortLinkRequestSuccess(body.data)))
        .catch(err => dispatch(getShortLinkRequestError(err)));
}