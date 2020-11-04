import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function changeCvReducer(state=initialState.currentCv,action) {
    switch(action.type) {
        case actionTypes.CHANGE_CV:
            return action.payload
        default:
            return state;
    }
}