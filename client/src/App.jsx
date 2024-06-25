import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Layout from './Layout'
import Jobs from './pages/Jobs'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

function App() {

  return (
    <>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/jobs' element={<Jobs/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
          </Route>
        </Routes>
    </>
  )
}

export default App
