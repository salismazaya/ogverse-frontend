
function CardGame() {
    return (
        <li className='wrap-card-game flex justify-evenly w-full px-5 py-3 rounded-xl border border-secondary'>
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
                <div className='flex justify-center items-center align-baseline space-x-0'>
                    <span className='align-icon_2cap p-1'>
                        <img src="/src/assets/icon_timer.svg" alt="" className='w-full' />
                    </span>
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
        </li>
    )
}

export default CardGame;