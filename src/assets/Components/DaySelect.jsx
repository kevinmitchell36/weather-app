
function DaysSelect({amount, onDayChoice, children}) {
  return (
    <div>
      <button onClick={() => onDayChoice({amount})}>{children}</button>      
    </div>
  )
}

export default DaysSelect
