import React from 'react'

import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'


const AllRoutes = () => {

  return (
    <Routes>
        <Route excat path = '/' Component={Home} />
        <Route excat path='/Auth' Component={Auth}/>
    </Routes>
  )
}

export default AllRoutes
