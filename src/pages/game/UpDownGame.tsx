import React from 'react'

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

function Button() {
    return (
        <button className='w-full max-w-[100%] my-10 py-3.5 rounded-xl text-base font-medium tracking-wide bg-accent'>
            Create Game
        </button>
    )
}

function CardGame() {
    return (
        <div className='wrap-card-game flex justify-evenly w-full px-5 py-3 rounded-xl border border-secondary'>
            <div className="left flex-col justify-center gap-2 space-y-2.5 p-2">
                <img src="/src/assets/btc-logo.svg" alt="" className='w-14 h-14 mx-auto rounded-full bg-secondary'/>
                <div className='flex flex-col gap-0.5'>
                    <div className='text-sm font-light text-light_100'>Price Predict</div>
                    <div className='flex justify-center items-center align-baseline gap-1'>
                        <span className='align-icon_1cap'>
                            <img src="/src/assets/icon_tagprice.svg" alt="" className='w-full' />
                        </span>
                        <div className='text-[11px] font-semibold'>$10</div>
                    </div>
                </div>
            </div>
            
            <div className='center flex-col text-center my-auto flex-auto'>
                <div className='flex justify-center items-center align-baseline space-x-0.5'>
                    {/* <span className='align-icon_1cap'>
                        <img src="/src/assets/icon_timer.svg" alt="" className='w-full' />
                    </span> */}
                    <div className='text-xl font-normal tracking-wider'>56:12</div>
                </div>
                <p className='text-xs font-extralight mx-auto text-light_200'>Time Left</p>
            </div>

            <div className="right flex-col justify-center gap-2 space-y-2.5 p-2">
                <img src="/src/assets/logo_up.png" alt="" className='w-14 h-14 mx-auto rounded-full bg-secondary'/>
                {/* <img src="/src/assets/logo_down.png" alt="" className='w-14 h-14 mx-auto rounded-full bg-secondary'/> */}
                <div className='flex flex-col gap-0.5'>
                    <div className='text-sm font-light text-light_100'>Your Predict</div>
                    <div className='flex justify-center items-center align-baseline gap-1'>
                        <span className='align-icon1cap'>
                            <img src="/src/assets/icon_up-arrow.svg" alt="" className='w-full' />
                            {/* <img src="/src/assets/icon_down-arrow.svg" alt="" className='w-full' /> */}
                        </span>
                        <div className='text-[11px] font-semibold'>Up</div>
                        {/* <div className='text-[11px] font-semibold'>Down</div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}


function FormGame() {
    return (
        <div className='w-full h-full bg-black/20'>
            
        </div>
    )
}

const UpDownGame = () => {
  return (
    <div className="wrapper">
        <div className="top">
            <CardTop />
            <Button />
        </div>
        <div className="content">
            <div className="list-card_play-game flex flex-col justify-center w-full gap-4">
                <CardGame />
                <CardGame />
                <CardGame />
            </div>
        </div>
        <div className="bottom">
            <FormGame />
        </div>
    </div>
  )
}

export default UpDownGame
