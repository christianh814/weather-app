const request = require('postman-request')
const weatherstackToken = process.env.WEATHER_STACK_TKN

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=' + weatherstackToken + '&query=' + latitude + ',' + longitude + '&units=f'
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback(body.error.info, undefined)
        } else {
            callback(undefined, 'It is currenly ' + body.current.temperature + ' degrees. It feels like ' + body.current.feelslike + ' degrees out. Humidity is at ' + body.current.humidity + '%')
        }
    })
}

module.exports = forecast