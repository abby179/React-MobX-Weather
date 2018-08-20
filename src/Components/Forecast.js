import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import qs from 'qs'
import key from 'weak-key'

@inject('weatherStore')
@withRouter
@observer
export default class Forecast extends Component {

  componentDidMount() {
    this.props.weatherStore.clean()
    this.props.weatherStore.setCity(this.getCity())
    this.props.weatherStore.loadWeather(this.getCity())
  }

  componentDidUpdate(previousProps) {
    if (this.getCity(this.props) !== this.getCity(previousProps)) {
      this.props.weatherStore.clean()
      this.props.weatherStore.setCity(this.getCity())
      this.props.weatherStore.loadWeather(this.getCity())
    }
  }

  getCity(props = this.props) {
    return qs.parse(props.location.search.slice(1)).city
  }

  handleClick = (index) => {
    this.props.history.push(`/details/${this.getCity()}`)
    this.props.weatherStore.loadCurrent(index)
  }

  render() {
    const { allWeather, isLoading, error } = this.props.weatherStore
    const city = this.getCity()

    if (isLoading) {
      return (
        <div className="forecast-container">
          <h1 className="forecast-heading">Loading</h1>
        </div>
      )
    }

    if (error) {
      return (
        <div className="forecast-container">
          <h3 className="error-heading">Opps, something went wrong.</h3>
          <h3 className="error-heading">Please try another city!</h3>
        </div>
      )
    }

    return (
      <div className="forecast-container">
        <h1 className="forecast-heading">{city}</h1>

          <div className="forecast-content">
            {allWeather.map((data, index) => (
              <div key={key(data)} className="forecast-item" onClick={this.handleClick.bind(this, index)}>
                <i className={`wi wi-yahoo-${data.code}`}></i>
                <h2>{`${data.day}, ${data.date}`}</h2>
              </div>
            ))}
          </div>
      </div>
    )
  }
}
