import React from 'react';

const PhotoIndexItem = props => {
  return (
    <div>
      <ul>
        <li><h1>{props.photo.title}</h1></li>
        <li><h1>{props.photo.description}</h1></li>
        <img src={props.photo.photoUrl} alt=""/>
      </ul>
      <br/>
      
    </div>
  );
}

export default PhotoIndexItem;