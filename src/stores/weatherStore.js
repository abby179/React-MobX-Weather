import { observable, action } from 'mobx'

import agent from '../agent'

class WeatherStore {
  @observable allWeather = []
  @observable isLoading = false
  @observable current = null
  @observable city = null
  @observable error = undefined

  @action loadWeather(city) {
    this.isLoading = true
    return agent.getWeather(city)
      .then(action((data) => {
        this.allWeather = data.query.results.channel.item.forecast
      }))
      .finally(action(() => this.isLoading = false))
      .catch((error) => this.error = error.message)
  }

  @action setCity(city) {
    this.city = city
  }

  @action loadCurrent(index) {
    this.current = this.allWeather[index]
  }

  @action clean() {
    this.allWeather = []
    this.city = null
    this.error = undefined
  }

}

export default new WeatherStore()