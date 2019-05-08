import constants from './../constants'
const { type } = constants;

export function receiveScore(scoreToUpdate) {
  return {
    type: type.ADD_SCORE,
    score: scoreToUpdate
  }
}
