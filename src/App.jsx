import { useState, useEffect } from 'react'
import SearchBar from './assets/Components/SearchBar'
import DailyWeather from './assets/Components/DailyWeather'
import DaySelect from './assets/Components/DaySelect'
import Hourly from './assets/Components/Hourly'
import weatherIcon from './assets/images/weather-icon-png-11102.png'
import './App.css'
const apiKey = import.meta.env.VITE_API_KEY

function App() {
  const [ searchedCity, setSearchedCity ] = useState('London')
  const [ selectedCity, setSelectedCity ] = useState()
  const [ daily, setDaily ] = useState([])
  const [ hourly, setHourly ] = useState([])
  

  useEffect(() => {
    directGeocode(searchedCity)
    function directGeocode(city) {
      fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`)
      .then(res => res.json())
      .then(data => getWeather(data[0].lat, data[0].lon))
    }
    function getWeather(lat, lon) {
      fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&appid=${apiKey}`)
      .then(res =>  res.json())
      .then(data => {
        setSelectedCity(data),
        setDaily(data.daily),
        setHourly(data.hourly.slice(24))
      })
    }
  }, [searchedCity])
  
  function handleInputChange(event) {
    setSearchedCity(event)
  }
  
  function handleDayChoice(number) {
    if (number.amount === 3) {
      setDaily(daily.slice(0, -number.amount))
    } else {
      setDaily(selectedCity.daily)
    }
  }
  
 

  return (
    <>
     <section className='banner'>
      <h1>Welcome to Weather or Not</h1>
      <p>When would you like to run today?</p>
      <img src={weatherIcon} alt="" />
      <SearchBar text={searchedCity} onSelect={handleInputChange}/>
     </section>
     <section className="forecast">
      <h1>Your forecast</h1>
      <p>Select from the right for different day amounts</p>
      {!selectedCity && <p>Please enter a city</p> }
      {selectedCity ? (
      <div>
        { daily.map(day => 
          <DailyWeather
            key={day.dt} 
            image={day.weather[0].icon}
            description={day.weather[0].description} 
            high={day.temp.max} 
            low={day.temp.min}>
          </DailyWeather>
        )}  
      </div>
      ) : null}
     </section>
     <section className='day-select'>
      <DaySelect amount={3} onDayChoice={handleDayChoice}>5 day</DaySelect>
      <DaySelect amount={0} onDayChoice={handleDayChoice}>8 day</DaySelect>
     </section>
     <section className='hourly'>
      {!hourly && <p>Please enter a city</p>}
      {hourly ? (
     <div>
      {hourly.map(hour => 
      
       <Hourly key={hour.dt} image={hour.weather[0].icon} hour={new Date(hour.dt * 1000).getHours()} temp={Math.round(hour.temp - 273.15)} feels={Math.round(hour.feels_like - 273.15)}></Hourly>
      )}
     </div>
      ): null}
     </section>
    </>
  )
}

export default App
