import React from 'react';
import PropTypes from 'prop-types';
import '../DogPics.scss';
import { connect } from 'react-redux';

function DogPic(props){
  console.log(props);
    return(
      <div className='center'>
        <h1 className='text'>What kind of doggie is this?</h1>
        <img className='picture' src={props.dogPicture} alt="Adorable puppy"/>
      </div>
    )
};

DogPic.propTypes = {
  dogPicture: PropTypes.string,
}

const mapStateToProps = state => {
  console.log(state.playerInfo.picture);
  return {
    dogPicture: state.playerInfo.picture
  }
}

export default connect(mapStateToProps)(DogPic)
