import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { observer } from 'mobx-react'

import Header from './Header'
import Home from './Home'
import Forecast from './Forecast'
import Details from './Details'

import '../css/App.css'
import '../css/weather-icons.min.css'

@withRouter
@observer
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/forecast" component={Forecast} />
          <Route path="/details/:city" component={Details} />
        </Switch>
      </div>
    )
  }
}

export default App
