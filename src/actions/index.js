import constants from './../constants'
const { type } = constants;

export function receiveScore(scoreToUpdate) {
  return {
    type: type.ADD_SCORE,
    score: scoreToUpdate
  }
}

export function updatePic(url) {
  return {
    type: type.UPDATE_PIC,
    picture: url
  }
}
