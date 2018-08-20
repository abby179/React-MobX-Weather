import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('weatherStore')
@observer
export default class Details extends Component {

  render() {
    const { current, city } = this.props.weatherStore

    return (
      <div className="details-container">
        <i className={`wi wi-yahoo-${current.code}`}></i>
        <h2>{`${current.day}, ${current.date}`}</h2>
        <p>{city}</p>
        <p>{current.text}</p>
        <p>min temp: {current.low} degrees</p>
        <p>max temp: {current.high} degrees</p>
      </div>
    )
  }
}
