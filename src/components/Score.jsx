import React from 'react';
import PropTypes from 'prop-types';
import '../Score.scss';

function Score(props){
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

export default Score
