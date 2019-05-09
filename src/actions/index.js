import constants from './../constants';
import Firebase from 'firebase';
const { type, firebaseConfig } = constants;

Firebase.initializeApp(firebaseConfig);
const highScores = Firebase.database().ref('highScores');

export function addHighScore(_name, score) {
  return () => highScores.push({
    name: _name,
    savedScore: score
  }).getKey();
}

export function watchFirebaseHighscoreRef() {
  let arr = [];
  return function (dispatch) {
    highScores.on('value', data => {
      let entries = Object.entries(data.val());
      arr = [];
      entries.forEach(function(entry) {
        arr.push({name: entry[1].name, savedScore: entry[1].savedScore});
      })
      let newArr = arr.sort(function(a,b) {
        return (b.savedScore - a.savedScore);
      })
      dispatch(saveHighScore(newArr));
    })
  }
}

export function watchLatestPlayer(){
  return function(dispatch){
    highScores.limitToLast(1).on('child_added', data => {
      dispatch(getPlayerKey(data.key));
    })
  }
}

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

function saveHighScore(highScoreArr) {
  return {
    type: type.UPDATE_SCORES,
    highScores: highScoreArr
  }
}
