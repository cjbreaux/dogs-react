import scoreReducer from './score-reducer';
import { combineReducers } from 'redux';

const rootReducer  = combineReducers({
  playerInfo: scoreReducer
})

export default rootReducer;
