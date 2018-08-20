import React, { Component } from 'react'
import SearchBar from './SearchBar';

export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <span>Enter a City and State</span>
        <SearchBar direction={"column"} />
      </div>
    )
  }
}
