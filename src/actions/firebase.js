import constants from './../constants';
import Firebase from 'firebase';
import { saveHighScore, getPlayerKey, returningPlayer } from './index'
const { firebaseConfig } = constants

Firebase.initializeApp(firebaseConfig);
const highScores = Firebase.database().ref('highScores');

export function addHighScore(_name, score) {
  return () => highScores.push({
    name: _name,
    savedScore: score
  })}

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

export function checkPlayerKey(playerKey) {
  return function(dispatch){
    const player = highScores.child(playerKey)
    player.once('value', snapshot => {
      const values = snapshot.val();
      dispatch(returningPlayer(values))
    })
  }
}

export function updateScore(playerKey, score) {
  return function(dispatch) {
    const playerToUpdate = highScores.child(playerKey);
    playerToUpdate.update({
      savedScore: score
    });
  }
}
