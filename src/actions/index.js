import constants from './../constants';
const { type } = constants;

export function getPlayerKey(playerKey) {
  return {
    type: type.UPDATE_KEY,
    playerKey: playerKey
  }
}

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

export function saveHighScore(highScoreArr) {
  return {
    type: type.UPDATE_SCORES,
    highScores: highScoreArr
  }
}

export function returningPlayer(returningPlayerInfo) {
  return {
    type: type.RETURNING_PLAYER,
    score: returningPlayerInfo.savedScore,
    name: returningPlayerInfo.name
  }
}
