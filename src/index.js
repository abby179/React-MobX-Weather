import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'

import App from './Components/App'

import weatherStore from './stores/weatherStore'

import './css/index.css'

const stores = {
  weatherStore
}

ReactDOM.render((
  <Provider {...stores}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
), document.getElementById('root'))
