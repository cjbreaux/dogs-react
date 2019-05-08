import constants from './../constants';
const { type, initialState } = constants;

export default (state = initialState, action) => {
  const {score} = action;
  switch(action.type) {
    case type.ADD_SCORE:
    let newState = Object.assign({}, state, {
      score
    })
    return newState;
    default:
      return state;
  }
}
