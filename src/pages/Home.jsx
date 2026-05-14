import { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import NotFound from './NotFound'
import CountryCard from '../components/CountryCard';


function Home() {
    // 3. declare query state, initialise to empty string
    const [query, setQuery] = useState('');
    const [Countries, setCountries] = useState([]);
    const [Loading, setLoading] = useState(false);
    const [Error, setError] = useState(null);

    useEffect(() => {

        if (!query) return;

        const timer = setTimeout(() => {
            setLoading(true);

            fetch(`https://restcountries.com/v3.1/name/${query}`)
                .then((res) => {
                    if (!res.ok) throw new Error("Country not Found!");
                    return res.json();
                })
                .then((data) => {
                    setCountries(data);
                    setError(null);
                })
                .catch(() => {
                    setCountries([]);
                    setError("No countries found!");
                })
                .finally(() => {
                    setLoading(false);
                });
        }, 400);

        return () => clearTimeout(timer);
    }, [query]);

    return (
        <div className="home">
            <SearchBar query={query} onQueryChange={setQuery} />

            {/* 5. show a loading paragraph when loading is true */}
            {Loading && <p className="home__status">Loading...</p>}
            {/* 6. show an error paragraph when error is set */}
            {Error && <div>
                <NotFound title={Error} showLink={false} />
                <p className="home__status home__status--error">{Error}</p>
            </div>}

            {/* 7. when not loading, no error, countries.length > 0:
              render div.cards-grid, map countries to CountryCard
              use country.cca3 as the key prop */}
            {!Loading && !Error && Countries.length > 0 && (
                <div className="cards-grid">
                    {Countries.map((country) => (
                        <CountryCard country={country} key={country.cca3} />
                    ))}
                </div>
            )}

            {/* 8. when not loading, no error, no countries, empty query:
              show "Start searching to explore countries." */}
            {!Loading && !Error && Countries.length === 0 && !query && (
                <p className="home__status">Start searching to explore countries.</p>
            )}
        </div>

    )
}

export default Home;