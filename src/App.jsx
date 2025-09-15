
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Layout from './Components/Layout'
import Contact from './Pages/contact'
import Services from './Pages/services'


function App() {
  

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route> 
        
      </Routes>
    </Router>
  )
}

export default App
