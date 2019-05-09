import constants from './../constants';
import Firebase from 'firebase';
const { type, firebaseConfig } = constants;

Firebase.initializeApp(firebaseConfig);
const highScores = Firebase.database().ref('highScores');

export function addHighScore(_name, score) {
  return () => highScores.push({
    name: _name,
    savedScore: score
  });
}

export function watchFirebaseHighscoreRef() {
  let arr = [];
  return function (dispatch) {
    highScores.on('value', data => {
      let entries = Object.entries(data.val());
      console.log(entries);
      entries.forEach(function(entry) {
        arr.push({name: entry[1].name, savedScore: entry[1].savedScore});
      })
      console.log(arr);
      let newArr = arr.sort(function(a,b) {
        console.log(b.savedScore);
        return (b.savedScore - a.savedScore);
      })
      console.log(newArr);
    })
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
