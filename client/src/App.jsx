import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Home from './pages/Home'
import Create from './pages/Create'
import Details from './pages/Details'

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<LandingPage/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/create' element={<Create/>} />
          <Route path='/:id' element={<Details/>} />
          {/* <Route path='*' element={<Home/>} /> */}
      </Routes>
  )
}

export default App;