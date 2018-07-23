import {
    GET_PROXY_REQUEST,
    GET_PROXY_REQUEST_SUCCESS,
    GET_PROXY_REQUEST_ERROR,
} from './../types';

import proxyAPI from './../api/api';

export const getProxyRequest = () => ({
    type: GET_PROXY_REQUEST,
    data: {
       error: false,
       status: 'PENDING', 
    }    
});

export const getProxyRequestSuccess = proxyList => ({
    type: GET_PROXY_REQUEST_SUCCESS,
    data: {
        error: false,
        status: 'FINISHED',
        data: proxyList 
    }
});

export const getProxyRequestError = err => ({
    type: GET_PROXY_REQUEST_ERROR,
    data: {
        error: true,
        status: 'ERROR',
        msg: err 
    }
});

export const getProxy = () => dispatch => {
    dispatch(getProxyRequest());
    proxyAPI.getProxy()
        .then(body => dispatch(getProxyRequestSuccess(body.data)))
        .catch(err => dispatch(getProxyRequestError(err)));
}
