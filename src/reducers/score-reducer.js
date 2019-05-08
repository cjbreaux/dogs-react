import constants from './../constants';
const { type } = constants;

export default (state = {}, action) => {
  const {score} = action;
  switch(action.type) {
    case type.ADD_SCORE:
      return score;
      default:
      return state;
  }
}
