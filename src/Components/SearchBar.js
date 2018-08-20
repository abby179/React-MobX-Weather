import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

@withRouter
export default class SearchBar extends Component {

  state = {
    value: ''
  }

  handleCityInput = e => {
    this.setState({value: e.target.value})
  }

  handleSubmitForm = e => {
    e.preventDefault()
    this.props.history.push({
      pathname: '/forecast',
      search: `?city=${this.state.value}`
    })
    this.setState({value: ''})
  }

  render() {
    const barDirection = this.props.direction === "column" ? "search-bar search-bar-column" : "search-bar"
    const { value } = this.state

    return (
      <div>
        <form action="" className={barDirection} onSubmit={this.handleSubmitForm}>
          <input
            type="text"
            placeholder="St. George, Utah"
            className="search-input"
            value={value}
            onChange={this.handleCityInput}
          />
          <button className="search-button">Get Weather</button>
        </form>
      </div>
    )
  }
}
