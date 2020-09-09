import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';

class UserPage extends Component {
  // this component doesn't do much to start, just renders some user info to the DOM

  handleSendToMyCloset = () => {
    this.props.history.push('/myCloset');
  }

  render() {
    return (
      <div>
        <h1 id="welcome">Welcome, {this.props.store.user.firstname}!</h1>
        <p>Your iCloset ID is: {this.props.store.user.id}</p>
        <p>Click on the 'MyClosets' button below to view your seasonal closets!</p>
        <button onClick={this.handleSendToMyCloset}>MyClosets</button>
        {/* Take the br tags out when you start styling the application */}
        <br />
        <br />

        <LogOutButton className="log-in" />
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
