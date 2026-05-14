import { useParams, useNavigate } from 'react-router-dom'
import useCountry from '../hooks/useCountry'
import '../styles/App.css'

function CountryPage() {
  // 1. read the country code from the URL with useParams
  // 2. set up navigate with useNavigate
  // 3. call useCountry(code) and destructure country, loading, error

  const { code } = useParams();
  const navigate = useNavigate();
  const { country, loading, error } = useCountry(code);



  // 4. handle loading state — return a status paragraph
  // 5. handle error state — return an error paragraph
  // 6. handle null country — return null

  if (loading) return <p className="page-status">Loading...</p>
  if (error) return <p className="page-status page-status--error">{error}</p>
  if (!country) return null;

  // 7. destructure the fields you need from country:
  //    name, flags, population, region, subregion,
  //    capital, languages, currencies, borders

  const { name, flags, population, region, subregion, capital, languages, currencies, borders } = country


  // 8. convert languages (object) to an array of names
  //    use Object.values() — guard against undefined

  const languageList = languages ? Object.values(languages) : [];

  // 9. convert currencies (object) to an array of names
  //    use Object.values().map(c => c.name) — guard against undefined

  const currencyList = currencies ? Object.values(currencies).map(c => c.name).join(", ") : "N/A";

  return (
    <div className="country-page">
      {/* back button — calls navigate(-1) on click */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        &larr; Back
      </button>

      <div className="country-page__layout">
        {/* flag image with alt text */}
        <img src={flags.svg} alt={flags.alt} className="country-page__flag" />

        <div className="country-page__info">
          {/* country common name as h2 */}
          <h2 className="country-page__name">{name.common}</h2>
          {/* official name as a paragraph */}
          <p className="country-page__official">{name.official}</p>

          <div className="country-page__details">
            {/* left column: population, region, subregion, capital */}
            <p><strong>Population:</strong> {population.toLocaleString()}</p>
            <p><strong>Region:</strong> {region}</p>
            <p><strong>Subregion:</strong> {subregion}</p>
            <p><strong>Capital:</strong> {capital?.join(", ") || "N/A"}</p>
            {/* right column: languages, currencies */}
            <p><strong>Languages:</strong> {languageList.join(", ")}</p>
            <p><strong>Currencies:</strong> {currencyList}</p>
          </div>

          {/* borders section — only render if borders exists and has length */}
          {borders && borders.length > 0 && (
            <div className="country-page__borders">
              <strong>Border Countries:</strong>
              <div className="country-page__border-list">
                {borders.map(border => (
                  <span key={border} className="border-badge">{border}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CountryPage