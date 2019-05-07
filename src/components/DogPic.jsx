import React from 'react';
import PropTypes from 'prop-types';
import '../DogPics.scss';




function DogPic(props){



  console.log(props.dogPicture);
    return(
      <div className='center'>
        <h1 className='text'>What kind of doggie is this?</h1>
        <img className='picture' src={props.dogPicture} alt="Adorable of a puppy"/>
      </div>
    )
};

DogPic.propTypes = {
  dogPicture: PropTypes.string,
}

export default DogPic
