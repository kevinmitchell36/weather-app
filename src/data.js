import partlyCloudyImg from './assets/images/partly-cloudy.png'
import rainyImg from './assets/images/rainy.png'
import sunnyImg from './assets/images/sunny.png'
import windyImg from './assets/images/windy.png'

export const forecast = [
  {
    location: 'Pittsburgh',
    daily: [
      {day: 'Monday', image: partlyCloudyImg, description: 'Partly Cloudy', high: '80', low: '68'},
      {day: 'Tuesday', image: sunnyImg, description: 'Sunny', high: '90', low: '75'},
      {day: 'Wednesday', image: sunnyImg, description: 'Sunny', high: '88', low: '71'},
      {day: 'Thursday', image: sunnyImg, description: 'Sunny', high: '84', low: '72'},
      {day: 'Friday', image: windyImg, description: 'Windy', high: '84', low: '71'},
      {day: 'Saturday', image: partlyCloudyImg, description: 'Partly Cloudy', high: '77', low: '61'},
      {day: 'Sunday', image: rainyImg, description: 'Rainy', high: '75', low: '59'},
    ]
  }
]