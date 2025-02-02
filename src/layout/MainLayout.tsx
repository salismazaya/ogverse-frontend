import React from 'react'
import { Outlet } from 'react-router'
import BottomNav from '../components/Bottom/BottomNav'

const MainLayout = () => {
  return (
    <div>
      <header></header>
      <main className='text-secondary'>
        <div className="pattern" />
        <Outlet />
      </main>
      <footer className="text-white absolute w-full h-[84px] bottom-0 left-0">
        <BottomNav />
      </footer>
    </div>
  )
}

export default MainLayout
