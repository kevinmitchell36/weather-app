
function Hourly({image, hour, temp, feels}) {
  const imageIcon = `https://openweathermap.org/img/wn/${image}.png`
  return (
    <ul>
      <li>
        <img src={imageIcon} alt="weather image" />
        <p>{hour}</p>
        <p>{temp} C</p>
        <p>{feels} C</p>
      </li>
    </ul>
  )
}

export default Hourly
