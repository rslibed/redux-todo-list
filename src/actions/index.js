import types from './types';
import axios from 'axios';

const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=rslibed408,';

export function addItem (item) {
    const request = axios.post(BASE_URL + '/todos' + API_KEY, item);
    return {
        type: types.ADD_ITEM,
        payload: request
    }
}

export function getItems () {
    const request = axios.get(BASE_URL + '/todos' + API_KEY);
    return {
        type: types.GET_ITEMS,
        payload: request
    }
}

export function getSingleItem (id) {
    const request = axios.get(BASE_URL + '/todos/' + id + API_KEY)
    return {
        type: types.GET_SINGLE_ITEM,
        payload: request
    }
}

export function deleteSingleItem (id) {
    const request = axios.delete(BASE_URL + '/todos/' + id + API_KEY)
    return {
        type: types.DELETE_SINGLE_ITEM,
        payload: request
    }
}

export function toggleDeleteModal (toggleDelete) {
    console.log("TOGGLE DELETE VALUE: ", toggleDelete)
    let displayValue = toggleDelete;
    if (displayValue === 'none') {
        displayValue = 'block';
    } else {
        displayValue = 'none';
    }
    return {
        type: types.TOGGLE_DELETE_MODAL,
        payload: displayValue
    }
}