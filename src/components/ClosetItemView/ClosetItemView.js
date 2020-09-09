import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';


// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const ClosetItemView = () => (
  <div className="container">
    <div>
      <p>This page will be hidden and filled with items once I get the images in MyCloset setup </p>
    </div>
    <LogOutButton className="log-in" /> 
  </div>
);

export default ClosetItemView;
