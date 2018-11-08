import React, { Component } from 'react';
import PresidentList from './components/PresidentList';
import './App.css';

class HelloCorcoran extends Component {

  state = {
      loadedPresidents: [],
      isLoading: true
  }

  LoadingOrNot = () => {
    if (this.state.isLoading) {
      return <img src="loading.gif"/>
    } else {
      return <PresidentList />
    }
  }

  componentDidMount() {
    fetch('http://localhost:4000/api/presidents/')
    .then(res => res.json())
    .then(json => console.log(json))
  }

  render() {
    return (
      <div className="App">
        <h1> Welcome, Corcoran! </h1>
        {this.LoadingOrNot()}
      </div>
    );
  }
}

export default HelloCorcoran;
