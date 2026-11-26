import Team from '../src/pages/Team'
import Clients from '../src/pages/Clients'
import Dashboard from '../src/pages/Dashboard'
import Calendar from '../src/pages/Calendar'
import Settings from '../src/pages/Settings'
import Login from '../src/pages/Login'
import Projects from '../src/pages/Projects'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ="/Login" element={<Login/>}/>
      <Route path ="/Projects" element={<Projects/>}/>
      <Route path ="/Team" element={<Team/>}/>
      <Route path ="/Clients" element={<Clients/>}/>
      <Route path ="/Dashboard" element={<Dashboard/>}/>
      <Route path ="/Calendar" element={<Calendar/>}/>
      <Route path ="/Settings" element={<Settings/>}/>

    </Routes>
    </BrowserRouter>
  )
}
export default App
