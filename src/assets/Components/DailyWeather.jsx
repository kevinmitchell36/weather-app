
function DailyWeather({image, day, description, high, low}) {
  const imageIcon = `https://openweathermap.org/img/wn/${image}.png`
  return (
    <ul>
      <li>
        <img src={imageIcon} alt="weather image" />
        <p>{day}</p>
        <p>{description}</p>
        <p>{high}</p>
        <p>{low}</p>
      </li>
    </ul>
  )
}

export default DailyWeather
