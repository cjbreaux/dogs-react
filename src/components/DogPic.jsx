import React from 'react';
import PropTypes from 'prop-types';


function DogPic(props){
  console.log(props.dogPicture);
    return(
      <div>
        <h1>Dog Pics Go Here</h1>
        <img src={props.dogPicture} />
      </div>
    )
};

DogPic.propTypes = {
  dogPicture: PropTypes.string,
}

export default DogPic
