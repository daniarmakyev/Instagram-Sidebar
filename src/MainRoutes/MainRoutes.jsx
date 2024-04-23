import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import MainLayut from '../MainLayout/MainLayut'


const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<MainLayut/>}>
            <Route path='/' element={<Home/>}/>
        </Route>
    </Routes>
  )
}

export default MainRoutes
