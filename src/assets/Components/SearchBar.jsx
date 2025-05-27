
function SearchBar({title, onSelect}) {
  return (
    <div>
      <button onClick={ () => onSelect({title})}>{title}</button>
    </div>
  )
}

export default SearchBar
