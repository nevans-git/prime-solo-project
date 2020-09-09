import React, {Component} from 'react';
import LogOutButton from '../LogOutButton/LogOutButton'; // Remember to import this whenever you use the logout button

// import { Component } from 'react';

// import FallClosetPic from 'FallClosetPic.jpg'



// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'


// If you needed to add local state or other things,
// you can make it a class component like:

// FIGURE OUT THE ROUTING... MIGHT HAVE TO JUST PUSH EVERYTHING TO ONE LOCATION
class MyCloset extends React.Component {

  handleFallImageClick = (id) => {
    console.log('fall image was clicked!');
  

    this.props.history.push(`/closetItemPage`); // REMEMBER TO SETUP ROUTE FOR THIS in APP.JS
    
  }
  
  handleWinterImageClick = () => {
    console.log('winter image was clicked!'); // REMEMBER TO SETUP ROUTE FOR THIS in APP.JS
  
    this.props.history.push('/closetItemPage'); // Need to figure out how to trigger Winter closet specifically after the user clicks on this image
    
  }
  
  handleSpringSummerImageClick = () => {
    console.log('spring/summer image was clicked!'); // MIGHT HAVE TO DO SPECIFIC SAGA STUFF TO GET THE NEXT PAGE TO LOAD THE RIGHT DATA
  
    this.props.history.push('/closetItemPage'); // REMEMBER TO SETUP ROUTE FOR THIS in APP.JS
    
  }

  render() {
    return (
      <>
      {/* Figure out how to get the images to display */}
      <div>
      <h2>MyClosets</h2>
      <div>
        <h3>Fall</h3>
        <img src={"./FallClosetPic.jpg"} alt='fall image' onClick={this.handleFallImageClick} />
      </div>
      <div>
        <h3>Winter</h3>
        <img src={'./WinterClosetPic.jpg'} alt='winter image' onClick={this.handleWinterImageClick}/>
      </div>
      <div>
        <h3>Spring/Summer</h3>
        <img src={"./SpringSummerCloset.jpg"} alt='spring/summer image' onClick={this.handleSpringSummerImageClick}/>
      </div>
      <br/>
      <div>
        <LogOutButton className="log-in" /> 
      </div>
      </div>
    </>
    )
  }
}

// const MyCloset = () => (
//   <>
//   {/* Figure out how to get the images to display */}
//   <div>
//     <h2>MyClosets</h2>
//     <div>
//       <h3>Fall</h3>
//       <img src={"FallClosetPic.jpg"} alt='fall image' onClick={handleFallImageClick()} />
//     </div>
//     <div>
//       <h3>Winter</h3>
//       <img src={'WinterClosetPic.jpg'} alt='winter image' onClick={handleWinterImageClick()}/>
//     </div>
//     <div>
//       <h3>Spring/Summer</h3>
//       <img src={"SpringSummerCloset.jpg"} alt='spring/summer image' onClick={handleSpringSummerImageClick()}/>
//     </div>
//     <br/>
//     <div>
//       <LogOutButton className="log-in" /> 
//     </div>
//   </div>
//   </>
// );

export default MyCloset;
