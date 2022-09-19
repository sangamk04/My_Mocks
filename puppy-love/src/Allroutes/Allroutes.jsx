import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Home from "../Components/Home"
import Puppy from '../Components/PuppyPage'
import SearchPage from '../Components/SearchPage'
const Allroutes = () => {
  return (
    <div>
  <Routes>
    <Route path="/" element={<Home/>}>      
    </Route>

    <Route path="/puppy" element={<Puppy />}>      
    </Route>

    <Route path="/search" element={<SearchPage/>}>      
    </Route>

  </Routes>
    </div>
  )
}

export default Allroutes