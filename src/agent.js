import superagent from 'superagent'

const getWeather = (city) => {
  return(
    superagent
    .get(`https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${city}") and u="c"&format=json`)
    .then((request) => request.body)
  )
}

export default {getWeather: getWeather}