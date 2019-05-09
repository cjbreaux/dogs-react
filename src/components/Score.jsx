import React from 'react';
import PropTypes from 'prop-types';
import '../Score.scss';
import { connect } from 'react-redux';
import { addHighScore, watchLatestPlayer, updateScore } from '../actions/firebase'

function Score(props){
  let submitScore = null;
  let _name = null;
  if (props.playerKey) {
    submitScore = <div><button type='button' onClick={updateScoreInFirebase}>Update Score</button></div>
  } else if (props.score > 0) {
    submitScore = <div><input type='text' id='name' ref={(input) => {_name = input;}}></input><button type='button' onClick={sendScoreToFirebase}>Submit Score</button></div>
  }

  function updateScoreInFirebase() {
    const { dispatch } = props;
    dispatch(updateScore(props.playerKey, props.score));
  }

  function sendScoreToFirebase() {
    const { dispatch } = props;
    dispatch(addHighScore(_name.value, props.score))
    dispatch(watchLatestPlayer());
  }

    return(
      <div className='scoreDisplay'>
        <h2>Your Score Is</h2>
        <h1 className='number'>{props.score}</h1>
        {submitScore}
      </div>
    )
}

Score.propTypes = {
  score: PropTypes.number,
  name: PropTypes.string,
  playerKey: PropTypes.string
}

const mapStateToProps = state => {
  return {
    score: state.playerInfo.score,
    name: state.playerInfo.name,
    playerKey: state.playerInfo.playerKey
  }
}

export default connect(mapStateToProps)(Score);
