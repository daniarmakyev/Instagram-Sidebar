import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import MainLayut from '../MainLayout/MainLayut'
import Search from '../components/Search/Search'
import Explore from '../components/Explore/Explore'


const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<MainLayut/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/search' element={<Search/>}/>
            <Route path='/explore' element={<Explore/>}/>
        </Route>
    </Routes>
  )
}

export default MainRoutes
