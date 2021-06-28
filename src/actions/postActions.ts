import { FETCH_DATA } from "./types";
import { Dispatch } from 'redux';

export const fetchData = (dispatch) => (dispatch: Dispatch) => {
    console.log('fetching...')
    fetch('../stackline_frontend_assessment_data_2021.json')
    .then(res => res.json())
    .then(data => dispatch({
        type: FETCH_DATA,
        payload: data
    }))
};
