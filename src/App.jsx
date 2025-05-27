import { useState } from 'react'
import SearchBar from './assets/Components/SearchBar'
import weatherIcon from './assets/images/weather-icon-png-11102.png'
import DailyWeather from './assets/Components/DailyWeather'
import { forecasts } from './data'
import './App.css'

function App() {
  const [ selectedCity, setSelectedCity ] = useState(forecasts[0].daily)
  function handleLocation(selection) {
    let index = forecasts.map(forecast => forecast.city).indexOf(selection.title)
    let cityWeather = forecasts[index].daily
    setSelectedCity(cityWeather)
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
      {selectedCity.map(day => 
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
    </>
  )
}

export default App
