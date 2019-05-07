import React from 'react';
import PropTypes from 'prop-types';

function DogSelect(props){



    return(
      <div>
      <h1>'Dog Select'</h1>
      <select id="dogInput">
      {props.dogList.map((dogs) =>
        <option value={dogs}>{dogs}</option>
      )}
      </select>
        <button type='button' onClick={() => {
          let dogGuess = document.getElementById('dogInput');
          let dogCompare = dogGuess.options[dogGuess.selectedIndex].value;
          console.log(dogCompare);
          props.compareGuess(dogCompare);
        }}>Choose</button>
      </div>
    )
}


DogSelect.propTypes = {
  dogList: PropTypes.array,
  compareGuess: PropTypes.func
}

export default DogSelect

// onClick=({props.onChoice(dogChoice)})
