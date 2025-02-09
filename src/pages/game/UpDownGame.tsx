import React from 'react'
import { useState } from "react";
import ModalGame from '../../components/modal/ModalGame';
import { Link } from 'react-router';
import CardGame from '../../components/Cards/CardGame';

function CardTop() {
    return (
      <div className="w-full h-auto flex flex-row justify-between items-center py-[12px] text-white">
        <div className="flex flex-row items-center gap-2">
          <div className="relative w-10 overflow-hidden bg-cover">
            <img src="/src/assets/logo-up&down-game_S100.png" alt="" className="w-full mx-auto" />
          </div>
          <div className="text-sm font-medium tracking-wider leading-4 text-light-200">
            Up & Down <br />Games
          </div>
        </div>
        <div className="flex justify-center items-center align-baseline pr-3 rounded-lg border border-secondary">
            {/* <div className='align-icon_2cap bg-green-300'> */}
                <img src="/src/assets/logo_OG.png" alt="" className='w-[40px]'/>
            {/* </div> */}
            <div className='text-sm font-light'>99.999</div>
        </div>
      </div>
    )
}

// const UpDownGame: React.FC  = () => {
const UpDownGame = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  // const [isOpen, onClose] = useState(false)
  return (
    <div className="wrapper w-full h-screen">
        <div className="top -mt-4">
          <header className='mb-4'>
            <nav>
              <Link to='/games' className='flex items-center align-baseline gap-2 text-sm font-medium'>
                <span className='inline-block w-5 h-5'>
                  <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
                  </svg>
                </span>
                Exit Game
              </Link>
            </nav>
          </header>
          <CardTop />
          <button className='w-full max-w-[100%] my-10 py-3.5 rounded-xl text-base font-medium tracking-wide bg-accent'
            onClick={() => setIsOpen(true)}
          >
            Play Game
          </button>
        </div>
        <div className="content h-screen overflow-y-scroll group">
            <ul className="list-card_play-game flex flex-col justify-center w-full gap-4">
                <CardGame />
                <CardGame />
                <CardGame />
            </ul>
        </div>
        {isOpen && (
          <div className="bottom absolute top-0 left-0 w-full h-screen bg-black/20">
            <ModalGame isOpen={isOpen} onClose={() => setIsOpen(false)} />
          </div>
        )}
    </div>
  )
}

export default UpDownGame
