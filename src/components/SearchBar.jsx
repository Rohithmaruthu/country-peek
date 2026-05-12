// SearchBar.jsx
// 1. accept query and onQueryChange as props
// 2. render a div.search-bar containing a controlled input
//    - value bound to query
//    - onChange calls onQueryChange with e.target.value
//    - placeholder: "Search for a country..."
//    - aria-label for accessibility

function SearchBar(props) {

    const { query, onQueryChange } = props;

    return (
        <div className="search-bar">
            <input
                type="text"
                className="search-bar__input"
                value={query}
                onChange={(e) => onQueryChange(e.target.value)}
                placeholder="Search for a country..."
                aria-label="Search for a country..."
            />
        </div>
    )
}

export default SearchBar;