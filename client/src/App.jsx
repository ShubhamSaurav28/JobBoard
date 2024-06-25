import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Layout from './Layout'
import Jobs from './pages/Jobs'

function App() {

  return (
    <>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/jobs' element={<Jobs/>}/>
          </Route>
        </Routes>
    </>
  )
}

export default App
