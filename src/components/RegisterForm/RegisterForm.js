import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class RegisterForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    username: '',
    password: '',
  };

  registerUser = (event) => {
    event.preventDefault();

    this.props.dispatch({
      type: 'REGISTER',
      payload: {
        firstName: this.state.first,
        lastName: this.state.lastName,
        username: this.state.username,
        password: this.state.password,
      },
    });
  }; // end registerUser

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  render() {
    return (
      <form className="formPanel" onSubmit={this.registerUser}>
        <h2>Create iCloset Account</h2>
        {this.props.store.errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {this.props.store.errors.registrationMessage}
          </h3>
        )}
        <div>
          <label htmlFor="first-name">
            First Name:
            <input
              placeholder="First Name"
              type="text"
              name="first-name"
              value={this.state.firstName}
              required
              onChange={this.handleInputChangeFor('firstName')}
            />
          </label>
        </div>
    
        <div>
          <label htmlFor="last-name">
            Last Name:
            <input
              placeholder="Last Name"
              type="text"
              name="last-name"
              value={this.state.lastName}
              required
              onChange={this.handleInputChangeFor('lastName')}
            />
          </label>
        </div>

        <div>
          <label htmlFor="username">
            Username:
            <input
            placeholder="Username"
              type="text"
              name="username"
              value={this.state.username}
              required
              onChange={this.handleInputChangeFor('username')}
            />
          </label>
        </div>

        <div>
          <label htmlFor="password">
            Password:
            <input
              placeholder="Password"
              type="password"
              name="password"
              value={this.state.password}
              required
              onChange={this.handleInputChangeFor('password')}
            />
          </label>
        </div>
        {/* figure out what to do with button when done with first name and last name input set */}
        <div>
          <input className="btn" type="submit" name="submit" value="Create Account" />
        </div>
      </form>
    );
  }
}


export default connect(mapStoreToProps)(RegisterForm);
