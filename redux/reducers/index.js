import {combineReducers} from 'redux';
import changeCvReducer from './changeCvReducer';
import cvListReducer from './cvListReducer';

const rootReducer = combineReducers({
  changeCvReducer,
  cvListReducer,
});

export default rootReducer;
