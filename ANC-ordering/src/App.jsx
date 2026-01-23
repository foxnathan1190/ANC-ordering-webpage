import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Antelope from './components/Antelope'
import BirdHouse from './components/BirdHouse'
import Carnivore from './components/Carnivore'
import Herpetarium from './components/Herpetarium'
import Insectarium from './components/Insectarium'
import JOTA from './components/JOTA'
import PrimateHouse from './components/PrimateHouse'
import RiversEdge from './components/RiversEdge'
import SeaLion from './components/SeaLion'

function App() {

  return (
    <>
      <Router> {/* Route set up */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Antelope" element={<Antelope />} />
          <Route path="/BirdHouse" element={<BirdHouse />} />
          <Route path="/Carnivore" element={<Carnivore />} />
          <Route path="/Herpetarium" element={<Herpetarium />} />
          <Route path="/Insectarium" element={<Insectarium />} />
          <Route path="/JOTA" element={<JOTA />} />
          <Route path="/PrimateHouse" element={<PrimateHouse />} />
          <Route path="/RiversEdge" element={<RiversEdge />} />
          <Route path="/SeaLion" element={<SeaLion />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
