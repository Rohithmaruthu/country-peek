import { useState, useEffect } from 'react'

function useCountry(code) {
    // 1. declare state for: country, loading (start true), error
    const [country, setCountry] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // 2. if no code, return early
        if (!code) return

        // 3. reset loading and error before each fetch
        setLoading(true)
        setError(null)

        // 4. fetch from https://restcountries.com/v3.1/alpha/${code}
        //    - check res.ok, throw if not
        //    - the response is an array — store data[0] in country state
        //    - catch errors and store the message in error state
        //    - always turn off loading in finally

        fetch(`https://restcountries.com/v3.1/alpha/${code}`)
            .then(res => {
                if (!res.ok) throw new Error("Country not found")
                return res.json()
            })
            .then(data => {
                setCountry(data[0])
            })
            .catch(err => {
                setError(err.message)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [code]) // re-runs whenever code changes

    // 5. return { country, loading, error }
    return { country, loading, error }
}

export default useCountry