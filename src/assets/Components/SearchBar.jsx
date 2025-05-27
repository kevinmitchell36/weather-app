
function SearchBar({children, onSelect}) {
  return (
    <div>
      <button onClick={onSelect}>{children}</button>
    </div>
  )
}

export default SearchBar
