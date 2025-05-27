import partlyCloudyImg from './assets/images/partly-cloudy.png'
import rainyImg from './assets/images/rainy.png'
import sunnyImg from './assets/images/sunny.png'
import windyImg from './assets/images/windy.png'

export const forecasts = [
  {
    city: 'Pittsburgh',
    daily: [
      {name: 'Monday', image: rainyImg, description: 'Rainy', high: '80', low: '68'},
      {name: 'Tuesday', image: sunnyImg, description: 'Sunny', high: '90', low: '75'},
      {name: 'Wednesday', image: sunnyImg, description: 'Sunny', high: '88', low: '71'},
      {name: 'Thursday', image: sunnyImg, description: 'Sunny', high: '84', low: '72'},
      {name: 'Friday', image: windyImg, description: 'Windy', high: '84', low: '71'},
      {name: 'Saturday', image: partlyCloudyImg, description: 'Partly Cloudy', high: '77', low: '61'},
      {name: 'Sunday', image: rainyImg, description: 'Rainy', high: '75', low: '59'},
    ]
  },
  {
    city: 'Chicago',
    daily: [
      {name: 'Monday', image: windyImg, description: 'Windy', high: '80', low: '68'},
      {name: 'Tuesday', image: sunnyImg, description: 'Sunny', high: '90', low: '75'},
      {name: 'Wednesday', image: sunnyImg, description: 'Sunny', high: '88', low: '71'},
      {name: 'Thursday', image: sunnyImg, description: 'Sunny', high: '84', low: '72'},
      {name: 'Friday', image: windyImg, description: 'Windy', high: '84', low: '71'},
      {name: 'Saturday', image: partlyCloudyImg, description: 'Partly Cloudy', high: '77', low: '61'},
      {name: 'Sunday', image: rainyImg, description: 'Rainy', high: '75', low: '59'},
    ]
  },
  {
    city: 'McKinney',
    daily: [
      {name: 'Monday', image: sunnyImg, description: 'Sunny', high: '80', low: '68'},
      {name: 'Tuesday', image: sunnyImg, description: 'Sunny', high: '90', low: '75'},
      {name: 'Wednesday', image: sunnyImg, description: 'Sunny', high: '88', low: '71'},
      {name: 'Thursday', image: sunnyImg, description: 'Sunny', high: '84', low: '72'},
      {name: 'Friday', image: windyImg, description: 'Windy', high: '84', low: '71'},
      {name: 'Saturday', image: partlyCloudyImg, description: 'Partly Cloudy', high: '77', low: '61'},
      {name: 'Sunday', image: rainyImg, description: 'Rainy', high: '75', low: '59'},
    ]
  },
  
]