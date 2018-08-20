import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar';

export default class Header extends Component {
  render() {
    return (
      <div className="nav-bar">
        <Link to='/'>
          <span>Weather Forecast</span>
        </Link>
        <SearchBar direction={"row"} />
      </div>
    )
  }
}
