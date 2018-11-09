import React, { Component } from 'react';
import PresidentList from './components/PresidentList';
import { Button } from 'react-bootstrap';
import './App.css';

class HelloCorcoran extends Component {

  state = {
      loadedPresidents: [],
      isLoading: true
  }

  LoadingOrNot = () => {
    if (this.state.isLoading) {
      return <img alt="loading" src="loading.gif"/>
    } else {
      return <PresidentList displayPresidents={this.displayPresidents}/>
    }
  }

  displayPresidents = () => {
    return this.state.loadedPresidents.map((president) =>
       <li key={president.id}> {president.name} </li>)
  }

  displayAscending = () => {
    fetch('http://localhost:4000/api/presidents/ascending')
    .then(res => res.json())
    .then(json => this.setState({
      loadedPresidents: json,
      isLoading: false
    }))
  }

  displayDescending = () => {
    fetch('http://localhost:4000/api/presidents/descending')
    .then(res => res.json())
    .then(json => this.setState({
      loadedPresidents: json,
      isLoading: false
    }))
  }

  displayChronological = () => {
    fetch('http://localhost:4000/api/presidents/')
    .then(res => res.json())
    .then(json => this.setState({
      loadedPresidents: json,
      isLoading: false
    }))
  }

  componentDidMount() {
    fetch('http://localhost:4000/api/presidents/')
    .then(res => res.json())
    .then(json => this.setState({
      loadedPresidents: json,
      isLoading: false
    }))
  }

  render() {
    return (
      <div className="App">
        <h1> Welcome, Corcoran! </h1>
        <div className="button-bar">
          <Button onClick={this.displayAscending} bsStyle="primary"> Ascending </Button>
          <Button onClick={this.displayChronological} bsStyle="success"> Chronological </Button>
          <Button onClick={this.displayDescending} bsStyle="danger"> Descending </Button>
        </div>
        {this.LoadingOrNot()}
      </div>
    );
  }
}

export default HelloCorcoran;
