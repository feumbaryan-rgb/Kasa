import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Logement from './pages/Logement.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Error from './pages/Error.jsx'

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App