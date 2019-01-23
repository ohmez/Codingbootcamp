import React, { Component } from "react";
import logo from "./logo.svg";
import {Container} from 'reactstrap';
import "./App.css";
import Navbar from "./components/Navbar";
import API from "./utils/API";
import CustomerList from "./components/CustomerList";
import {BrowserRouter as Router, Route} from "react-router-dom";


class App extends Component {
  state = {
    page: 'list',
    test: true,
    customers: []
  }
  componentDidMount() {
    API.getCustomers()
    .then((res) => this.setState({customers: res.data}))
  };

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
        {this.state.page === 'list'?<h1>List</h1> />: <h1>Add</h1>}
      <Router>
        <Route exact path="/list" render={(props) => <CustomerList list={this.state.customers} />} />
      </Router>
        
      </Container>
      
    );
  };
}

export default App;
