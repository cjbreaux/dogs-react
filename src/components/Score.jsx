import React from 'react';
import PropTypes from 'prop-types';
import '../Score.scss';
import { connect } from 'react-redux';

function Score(props){
  console.log(props);
    return(
      <div className='scoreDisplay'>
        <h2>Your Score Is</h2>
        <h1 className='number'>{props.score}</h1>
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
