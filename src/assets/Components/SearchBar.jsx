
function SearchBar({text, onSelect}) {
  return (
    <div>
      <input type="text" onChange={(e) => onSelect(e.target.value)} placeholder="Search Your City" />
    </div>
  )
}

export default SearchBar
