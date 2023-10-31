import { Route, Routes, Navigate} from 'react-router-dom'
import '../src/App.css'
import Login from './assets/components/login/Login.jsx'
import Dashboard from './assets/components/dashboard/Dashboard'
import PageNotFound from './assets/components/notFound/NotFound'
import Nosotros from './assets/components/nosotros/Nosotros'

const App = () => {

  return (
    <>
    <Routes>
      <Route path='/' element={<Navigate to="/login" replace/>} />
      <Route path='/login' element={<Login />} />
      <Route path='/home' element={<Dashboard />} />
      <Route path='/*' element={<PageNotFound/>}/>
      <Route path='/nosotros' element={<Nosotros />}/>
    </Routes>
    </>
  )
}

export default App;
