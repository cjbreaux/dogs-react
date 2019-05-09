import React from 'react';
import PropTypes from 'prop-types';
import '../Score.scss';
import { connect } from 'react-redux';
import { addHighScore, watchLatestPlayer } from './../actions';

function Score(props){
  let submitScore = null;
  let _name = null;
  if (props.score > 0) {
    submitScore = <div><input type='text' id='name' ref={(input) => {_name = input;}}></input><button type='button' onClick={sendScoreToFirebase}>Submit Score</button></div>
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
  score: PropTypes.number
}

const mapStateToProps = state => {
  return {
    score: state.playerInfo.score
  }
}

export default connect(mapStateToProps)(Score);
