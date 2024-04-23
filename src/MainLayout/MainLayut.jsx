import React from 'react'
import SideBar from '../components/SideBar/SideBar'
import { Outlet } from 'react-router-dom'

const MainLayut = () => {
  return (
    <div>
        <SideBar/>
        <Outlet/>
    </div>
  )
}

export default MainLayut
