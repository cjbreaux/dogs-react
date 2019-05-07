import React from 'react';
import PropTypes from 'prop-types';

function DogSelect(props){
    return(
      <div>
      <h1>'Dog Select'</h1>
      <select>
      {props.dogList.map((dogs) =>
        <option value={dogs}>{dogs}</option>
      )}
      </select>
      <button type='submit' >Choose</button>
      </div>
    )
}


DogSelect.propTypes = {
  dogList: PropTypes.array
}

export default DogSelect

// onClick=({props.onChoice(dogChoice)})
