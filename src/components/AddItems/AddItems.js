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
class AddItems extends React.Component {

    // make change function here for the text input fields 


  handleBack = () => {
    console.log('back button clicked!');

    this.props.history.push('/home'); // Sending user back to the previous page (Home)
    
  }

  render() {
    return (
      <>
      <div>
        <button onClick={this.handleBack}>Back</button>
      </div>
      {/* Figure out how to get the images to display */}
        <div>
            <h2>Add Item</h2>
            <p>Add an item to a closet!</p>
        </div>
        <div>
            <form>
                <label>
                    Item:
                    <select>
                        <option value="tops">Tops</option>
                        <option value="bottoms">Bottoms</option>
                        <option value="hoodies">Hoodies</option>
                        <option value="jackets">Jackets</option>
                        <option value="shoes">Shoes</option>
                        <option value="socks">Socks</option>
                        <option value="hats">Hats</option>
                    </select>
                </label>
                <br />
                <label>
                    Season:
                    <select>
                        <option value="fall">Fall</option>
                        <option value="winter">Winter</option>
                        <option value="spring-summer">Spring/Summer</option>
                    </select>
                </label>
                <br />
                <label>
                    Item Description:
                    <input type="text" placeholder="description" ></input>
                </label>
                <br />
                <label>
                    Date:
                    <input type="date" ></input>
                </label>
                <br />
                <label>
                    Item Value ($):
                    <input type="number" placeholder="value"></input>
                </label>
                <br />
                <label>
                    Item Condition:
                    <select>
                        <option value="new">New</option>
                        <option value="good">Good</option>
                        <option value="average">Average</option>
                        <option value="poor">Poor</option>
                    </select>
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
      <div>
        <LogOutButton className="log-in" /> 
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

export default AddItems;
