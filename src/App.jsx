
import { Route, Routes } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Pokemon from './pages/Pokemon'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='pokemon' element={<Pokemon/>}/>
      </Route>

      <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
  
}

export default App
