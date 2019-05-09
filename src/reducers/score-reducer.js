import constants from './../constants';
const { type, initialState } = constants;

export default (state = initialState, action) => {
  let newState;
  const {score, picture, highScores, playerKey, name} = action;
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
    case type.UPDATE_KEY:
    newState = Object.assign({}, state, {
      playerKey
    })
    return newState;
    case type.RETURNING_PLAYER:
    newState = Object.assign({}, state, {
      score,
      name
    })
    return newState
    default:
      return state;
  }
}
