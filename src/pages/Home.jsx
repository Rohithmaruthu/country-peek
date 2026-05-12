import { useState } from 'react'
import SearchBar from '../components/SearchBar'
import NotFound from './NotFound'

function Home() {
    // 3. declare query state, initialise to empty string
    const [query, setQuery] = useState('');

    return (
        // 4. div.home
        //    - SearchBar — pass query and the setter as props
        //    - p.home__placeholder — "Start searching to explore countries."

        <div className="home">
            <SearchBar query={query} onQueryChange={setQuery} />
        </div>
    )
}

export default Home;