import constants from './../constants';
const { type, initialState } = constants;

export default (state = initialState, action) => {
  let newState;
  const {score, picture, highScores} = action;
  switch(action.type) {
    case type.ADD_SCORE:
     newState = Object.assign({}, state, {
      score
    })
    return newState;
    case type.UPDATE_PIC:
     newState = Object.assign({}, state, {
      picture
    })
    return newState;
    case type.UPDATE_SCORES:
    newState = Object.assign({}, state, {
      highScores
    })
    return newState;
    default:
      return state;
  }
}
