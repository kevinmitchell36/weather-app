import SearchBar from './assets/Components/SearchBar'
import weatherIcon from './assets/images/weather-icon-png-11102.png'
import DailyWeather from './assets/Components/DailyWeather'
import { forecast } from './data'
import './App.css'

function App() {
  const currentLocation = forecast[0].daily
  console.log(currentLocation[0].image)
  return (
    <>
     <section className='banner'>
      <h1>Welcome to Weather or Not</h1>
      <p>When would you like to run today?</p>
      <img src={weatherIcon} alt="" />
      <SearchBar />
     </section>
     <section className="forecast">
      <h1>Your forecast</h1>
      <p>Select from the right for different day amounts</p>
      {currentLocation.map(day => 
        <DailyWeather image={day.image}
          day={day.day}
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
