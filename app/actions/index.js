/**
 * @author <a href="mailto:stefanmayer13@gmail.com">Stefan Mayer</a>
 */

import { CALL_API } from '../middleware/api';

import {
    GET_DEVICES,
    GET_DEVICES_SUCCESS,
    GET_DEVICES_FAILURE,
} from '../ActionTypes';

function fetchDevices() {
    return {
        [CALL_API]: {
            types: [GET_DEVICES, GET_DEVICES_SUCCESS, GET_DEVICES_FAILURE],
            endpoint: `/v1/devices`,
        },
    };
}

export function loadDevices() {
    return (dispatch) => dispatch(fetchDevices());
}
