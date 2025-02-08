import React from 'react'
import { Outlet } from 'react-router'
import BottomNav from '../components/Bottom/BottomNav'
import SplashScreen from '../components/loader/SplashScreen'

const MainLayout = () => {
  return (
    <>
    <SplashScreen>
      <header></header>
      <main className='text-secondary'>
        {/* <div className="pattern" /> */}
        <Outlet />
      </main>
      <footer className="text-white absolute w-full h-[84px] bottom-0 left-0">
        <BottomNav />
      </footer>
    </SplashScreen>
    </>
  )
}

export default MainLayout
