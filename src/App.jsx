import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./components/Header"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import CountryPage from "./pages/CountryPage"

function App() {
  return (
    // 3. wrap everything in BrowserRouter
    //    render Header above main — it must appear on every page

    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:code" element={<CountryPage />} />
          <Route path="/favourites" element={<div>Favourites Placeholder</div>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>

    // 4. inside main, set up Routes with 4 Route entries:
    //    - "/" → Home
    //    - "/country/:name" → placeholder div
    //    - "/favourites" → placeholder div
    //    - "*" → NotFound


  )
}

export default App