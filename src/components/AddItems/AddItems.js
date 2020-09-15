import React, {Component} from 'react';
import LogOutButton from '../LogOutButton/LogOutButton'; // Remember to import this whenever you use the logout button
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {withRouter} from 'react-router-dom';

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

    state = {
        type: 'tops',
        season_id: 1,
        item_description: '',
        last_worn: '',
        item_value: 0,
        item_condition: 'new'    
    }

    // make change function here for the text input fields 


  handleBack = () => {
    console.log('back button clicked!');

    this.props.history.push('/myCloset'); // Sending user back to the previous page (myCloset)
    
  }

  handleChangeState(property, event) {
    // checking to see what state is.... Seems like its one behind for some reason
    this.setState({
        ...this.state, // Spreading state
        [property]: event.target.value // this is a dynamic way to manipulate state
    })
    
    
  }
  
  handleSubmitItem = () => {
      console.log('add item button clicked!');

      this.props.dispatch({ type: 'SEND_ADDED_ITEMS', payload: this.state }); // LEFT
      
  }

  render() {
    console.log(this.state); // most up to date version of state before render
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
                    <select onChange={(event) => this.handleChangeState('type', event)} value={this.state.type}> 
                        <option value="tops">Tops</option>
                        <option value="bottoms">Bottoms</option>
                        <option value="hoodies">Hoodies</option>
                        <option value="jackets">Jackets</option>
                        <option value="shoes">Shoes</option>
                        <option value="socks">Socks</option>
                        <option value="hats">Hats</option>
                        <option value="jewelry">Jewelry</option>
                        <option value="bags">Bags</option>
                        <option value="luggage">Luggage</option>
                    </select>
                </label>
                <br />
                <label>
                    Season:
                    {/* onChange is working but it appears to be one behind in the console for each field */}
                    <select onChange={(event) => this.handleChangeState('season_id', event)} value={this.state.season_id}> 
                        <option value='1'>Fall</option>
                        <option value='2'>Winter</option>
                        <option value='3'>Spring/Summer</option>
                        <option value="4">Miscellaneous</option>
                    </select>
                </label>
                <br />
                <label>
                    Item Description:
                    <input type="text" placeholder="description" onChange={(event) => this.handleChangeState('item_description', event)} value={this.state.item_description}></input>
                </label>
                <br />
                <label>
                    Date:
                    <input type="date" onChange={(event) => this.handleChangeState('last_worn', event)} value={this.state.last_worn}></input>
                </label>
                <br />
                <label>
                    Item Value ($):
                    <input type="number" placeholder="value" onChange={(event) => this.handleChangeState('item_value', event)} value={this.state.item_value}></input>
                </label>
                <br />
                <label>
                    Item Condition:
                    <select onChange={(event) => this.handleChangeState('item_condition', event)} value={this.state.item_condition}>
                        <option value="new">New</option>
                        <option value="good">Good</option>
                        <option value="average">Average</option>
                        <option value="poor">Poor</option>
                    </select>
                </label>
                <br />
                {/* Figure out why there's an error when theres a button  */}
                <input type='submit' onClick={this.handleSubmitItem}></input>
                
            </form>
        </div>
        <div>
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

export default connect(mapStoreToProps)(withRouter(AddItems));
