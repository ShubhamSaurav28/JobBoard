import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Layout from './Layout'
import Jobs from './pages/Jobs'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ContactUs from './pages/ContactUs'
import Employers from './pages/Employers'
import Profile from './pages/Profile'
import PostJob from './pages/PostJob'
import RegisterCompany from './pages/RegisterCompany'
import { AppState } from './context/UserContext'
import ProtectedRoutes from './ProtectedRoutes'
import ProfileEdit from './pages/ProfileEdit'



function App() {
  const { user } = AppState();
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
            <Route path='/profile' element={<ProtectedRoutes page={<Profile/>} />}/>
            <Route path='/postjob' element={<ProtectedRoutes page={<PostJob/>} />}/>
            <Route path='/registercompany' element={<ProtectedRoutes page={<RegisterCompany/>} />}/>
            <Route path='/profile/:id' element={<ProtectedRoutes page={<ProfileEdit/>} />}/>
          </Route>
        </Routes>
    </>
  )
}

export default App
