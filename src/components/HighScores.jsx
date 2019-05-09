import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function HighScores(props) {
  return(
    <div>
      <p>Current top scores:</p>
      <ul>
        {props.highScores.slice(0,3).map(function(entry, index){
          return <li key={index}>{entry.name} - {entry.savedScore}</li>
        })}

      </ul>
    </div>
  )
};

HighScores.propTypes = {
  highScores: PropTypes.array
}

const mapStateToProps = state => {
  return {
    highScores: state.playerInfo.highScores
  }
}

export default connect(mapStateToProps)(HighScores);
