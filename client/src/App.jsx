import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Layout from './Layout'
import Jobs from './pages/Jobs'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ContactUs from './pages/ContactUs'
import Employers from './pages/Employers'
import Profile from './pages/Profile'


function App() {

  return (
    <>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/jobs' element={<Jobs/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/contactus' element={<ContactUs/>}/>
            <Route path='/employers' element={<Employers/>}/>
            <Route path='/profile' element={<Profile/>}/>
          </Route>
        </Routes>
    </>
  )
}

export default App
