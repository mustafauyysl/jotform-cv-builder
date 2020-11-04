import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';


export default function cvListReducer(state=initialState.cvs,action) {
    switch (action.type) {
        case actionTypes.GET_CV_SUCCESS:
            return action.payload
        default:
            return state;
    }
}