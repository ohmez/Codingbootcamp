/* eslint-disable no-template-curly-in-string */
import React, { Component } from "react";

class Form extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    username: "",
    password: ""
  };
  handleChange = event => {
    console.log(event.target);
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
    
  };
  handleFormSubmit = event => {
    event.preventDefault();
    // alert('Username: ${this.state.username}\nPassword: ${this.state.password}');
    this.setState({
      username: "",
      password: ""
    });
  };

  render() {
    return (
      <form>
        <p>Username: {this.state.username}</p>
        <p>Password: {this.state.password}</p>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
          />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button onClick={this.handleFormSubmit}>Submit</button>
      </form>
    );
  }
}

export default Form;
