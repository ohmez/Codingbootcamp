import React, { Component } from "react";
import logo from "./logo.svg";
import {Container} from 'reactstrap';

import "./App.css";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    page: 'list',
    test: true,
  }
  handlePageChange = newPage => this.setState({page: newPage});
  
  clientLIst = () => {
    let cState = this.state;
    cState.page = 'list';
    this.setState(cState);
  }
  addNew = () => {
    let cState = this.state;
    cState.page = 'add';
    this.setState(cState);
  }
  render() {
    return (
      <Container fluid>
        <Navbar currentPage={this.state.page} handlePageChange={this.handlePageChange}></Navbar>
        {this.state.page === 'list'? <h1>List</h1>: <h1>Add</h1>}
      </Container>
      
    );
  };
}

export default App;
