import scoreReducer from './score-reducer';
import { combineReducers } from 'redux';

const rootReducer  = combineReducers({
  score: scoreReducer,
})

export default rootReducer;
