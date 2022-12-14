import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//pages
import MainMenu from './pages/MainMenu';
import Element from './pages/Element';
import Compteur from './pages/compteur';
import Inverseur from './pages/Inverseur';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainMenu />} />
        <Route path='/element/:id' element={<Element />} />
        <Route path='/compteur' element={<Compteur />} />
        <Route path='/Inverseur' element={<Inverseur />} />
      </Routes>
    </BrowserRouter>
  )
}



export default App
