import React from 'react'

export default function HistoryGameCard({
    token, timeStamp, entryPrice, exitPrice
}:{
    token: string;
    timeStamp: string;
    entryPrice: number | string;
    exitPrice: number | string;
}) {
  return (
    <li className="card-history_game">
      <div className="left">
        <div className="logo-crypto">
          <img src="/src/assets/btc-logo.svg" alt="" />
        </div>
        <div className="flex flex-col gap-0">
          <div className="relative flex w-fit gap-1.5 justify-between items-center">
            <span className='text-base font-medium tracking-wider leading-0'>{token}</span>
            <span className="inline-block w-5 h-5 text-green-500">
                <svg data-slot="icon" aria-hidden="true" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
            </span>
            <span className='text-xs font-light text-gray-100'>1H</span>
          </div>
          <div className="text-base font-medium tracking-wide text-red-500">Liquidated</div>
          <div className='text-[10px] text-ellipsis font-normal tracking-wide'><small className='mx-0.5 font-light text-gray-400'>Entry Price</small> {entryPrice}</div>
        </div>
      </div>

      <div className="right">
        <div className='flex items-center gap-0.5'>
            <div className='text-xs font-extralight tracking-wider leading-none'>Details</div>
            <span className='icon align-icon_2cap p-1 text-gray-100 bg-transparent'>
                <svg data-slot="icon" aria-hidden="true" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
            </span>
        </div>
        <div className='text-right'>
            <div className='text-[10px] text-ellipsis font-normal tracking-wide'><small className='mx-0.5 font-light text-gray-400'>Exit Price</small> {exitPrice}</div>
        </div>
      </div>
    </li>
  )
}
