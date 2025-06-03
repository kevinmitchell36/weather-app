import { useState } from 'react'
import SearchBar from './assets/Components/SearchBar'
import DailyWeather from './assets/Components/DailyWeather'
import DaySelect from './assets/Components/DaySelect'
import weatherIcon from './assets/images/weather-icon-png-11102.png'
import { forecasts, data } from './data'
import './App.css'
const apiKey = import.meta.env.VITE_API_KEY

function App() {
  const [ selectedCity, setSelectedCity ] = useState('Pittsburgh')
  const [ dayAmount, setDayAmount] = useState(7)
  const [ forecast, setForecast ] = useState(forecasts[forecasts.findIndex(item => item['city'] === selectedCity)].daily.slice(0, dayAmount))

  function directGeocode(city) {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city.title}&limit=5&appid=${apiKey}`)
    .then(res => res.json())
    .then(data => getWeather(data[0].lat, data[0].lon))
    
  }

  function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&appid=${apiKey}`)
    .then(res =>  res.json())
    .then(data => console.log(data))
  }

  function handleLocation(location) {
    let chosenLocation = location.title
    setSelectedCity(chosenLocation)
    setForecast(forecasts[forecasts.findIndex(item => item['city'] === chosenLocation)].daily)
  }

  function handleDayChoice(number) {
    let daysToSet = number.amount
    setDayAmount(daysToSet)
    setForecast(forecasts[forecasts.findIndex(item => item['city'] === selectedCity)].daily.slice(0, daysToSet))
  }


  return (
    <>
     <section className='banner'>
      <h1>Welcome to Weather or Not</h1>
      <p>When would you like to run today?</p>
      <img src={weatherIcon} alt="" />
      <SearchBar title='London' onSelect={directGeocode}/>
     </section>
     <section className="forecast">
      <h1>Your forecast</h1>
      <p>Select from the right for different day amounts</p>
      {forecast.map(day => 
        <DailyWeather
          key={day.name} 
          image={day.image}
          day={day.name}
          description={day.description} 
          high={day.high} 
          low={day.low}>
        </DailyWeather>
      )}      
     </section>
     <section className='day-select'>
      <DaySelect amount={5} onDayChoice={handleDayChoice}>5 day</DaySelect>
      <DaySelect amount={7} onDayChoice={handleDayChoice}>7 day</DaySelect>
     </section>
    </>
  )
}

export default App
