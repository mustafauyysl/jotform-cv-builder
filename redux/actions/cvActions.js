import * as actionTypes from './actionTypes';

const API_KEY = 'daab1c634006d6af36c6df6ecac7c54d';
const FORM_ID = '203063398519056';
const FETCH_SUBMISSIONS = 'https://api.jotform.com/';

export function changeCv(cv) {
    return { type: actionTypes.CHANGE_CV, payload: cv };
}
export function getCvsSuccess(cvs) {
    return { type: actionTypes.GET_CV_SUCCESS, payload: cvs }
}
export function getCvs(){
    return function(dispatch) {
        let url = FETCH_SUBMISSIONS+'form/'+FORM_ID+'/submissions?apiKey='+API_KEY;
        let newArray = []
        return fetch(url)
            .then((response) => response.json())
            .then((response) => response.content.map(x => newArray.push(x)))
            .then((response) => response = newArray)
            .then((result) => dispatch(getCvsSuccess(result)));
    };
}

export function deleteCv(submissionId) {
    return function() {
        let url = FETCH_SUBMISSIONS+'submission/'+submissionId+'?apiKey='+API_KEY;
        return fetch(url, {
            method: 'DELETE',
        })
    }
}