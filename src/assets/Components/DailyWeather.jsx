
function DailyWeather({image, day, description, high, low}) {
  return (
    <div>
      <li>
        <img src={image} alt="weather image" />
        <p>{day}</p>
        <p>{description}</p>
        <p>{high}</p>
        <p>{low}</p>
      </li>
    </div>
  )
}

export default DailyWeather
