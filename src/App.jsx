import { useState } from 'react'
import SearchBar from './assets/Components/SearchBar'
import DailyWeather from './assets/Components/DailyWeather'
import DaySelect from './assets/Components/DaySelect'
import weatherIcon from './assets/images/weather-icon-png-11102.png'
import { forecasts } from './data'
import './App.css'
import { data } from './data'

function App() {
  console.log(data)
  const [ selectedCity, setSelectedCity ] = useState('Pittsburgh')
  const [ dayAmount, setDayAmount] = useState(7)
  const [ forecast, setForecast ] = useState(forecasts[forecasts.findIndex(item => item['city'] === selectedCity)].daily.slice(0, dayAmount))

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
      <SearchBar title='Pittsburgh' onSelect={handleLocation}/>
      <SearchBar title='Chicago' onSelect={handleLocation}/>
      <SearchBar title='McKinney' onSelect={handleLocation}/>
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
