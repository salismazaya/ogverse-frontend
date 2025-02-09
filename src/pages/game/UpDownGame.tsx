import React from 'react'
import { useState } from "react";

const items = [
  { name: "Bitcoin", img: "/src/assets/btc-logo.svg" },
  { name: "Bitcoin", img: "/src/assets/btc-logo.svg" },
  { name: "Bitcoin", img: "/src/assets/btc-logo.svg" },
  { name: "Bitcoin", img: "/src/assets/btc-logo.svg" }
];

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
        </div>
    )
}


const DropdownSelect = () => {
  const [selectedItem, setSelectedItem] = useState<{ name: string; img: string } | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (item: { name: string; img: string }) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left w-full">
    {/* <div className="relative inline-block text-left w-64"> */}
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex justify-between items-center w-full px-4 py-4 text-white bg-primary rounded-lg focus:outline-none border border-accent"
        >
          <div className='flex align-baseline items-center'>
            {selectedItem ? (
              <>
                <img src={selectedItem.img} alt={selectedItem.name} className="w-10 h-w-10 mr-2" />
                <span className='text-xl font-medium'>
                  {selectedItem.name}
                </span> 
              </>
            ) : (
              "Select an item"
            )}
          </div>
          <div className="flex flex-row">
            <span className="align-icon_2cap text-light_100">
            {isOpen ? (
              <svg data-slot="icon" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5"></path>
              </svg>
            ) : (
              <svg data-slot="icon" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
              </svg>
            )}
            </span>
          </div>
        </button>
      </div>
      {isOpen && (
        <div className="absolute mt-2 w-full bg-primary border border-accent rounded-lg shadow-lg overflow-hidden">
          {items.map((item) => (
            <div
              key={item.name}
              onClick={() => handleSelect(item)}
              className="px-4 py-2 cursor-pointer hover:bg-secondary overflow-hidden flex items-center"
            >
              <img src={item.img} alt={item.name} className="w-6 h-6 mr-2" />
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


// import { useState } from "react";

interface SelectableButtonListProps {
  options: string[];
}

const SelectableButtonList: React.FC<SelectableButtonListProps> = ({ options }) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleSelection = (item: string) => {
    setSelectedItem((prevSelected) => (prevSelected === item ? null : item));
  };

  return (
    <div className="flex flex-wrap gap-2 w-full p-0">
      {options.map((option) => (
        <button
          key={option}
          className={`px-4 py-2 text-base font-semibold rounded-lg transition-all duration-300 
            ${
              selectedItem === option
                ? "bg-secondary text-light_100 border-2 border-accent hover:bg-secondary" 
                : "bg-primary text-accent border border-accent"
            }
          `}
          onClick={() => handleSelection(option)}
        >
          {selectedItem === option ? `✓ ${option}` : option}
        </button>
      ))}
    </div>
  );
};

// export default SelectableButtonList;


function SelectedButton() {
  return (
    <div className='flex justify-center space-x-12 items-center my-12'>
      <button className='max-w-[160px] h-[58px]'>
        <img src="/src/assets/btn_down-rectangle.png" alt="" className='w-full' />
      </button>
      <button className='max-w-[160px] h-[58px]'>
        <img src="/src/assets/btn_up-rectangle.png" alt="" className='w-full' />
      </button>
    </div>
  )
}

function FormGame() {
  const options: string[] = ["$1", "$5", "$10", "$15", "$20"];

  return (
      <div className='relative w-full h-full bg-black/60'>
        <div className="absolute bottom-0 left-0 w-full h-[50%] px-8 py-6 rounded-t-3xl backdrop-blur-sm border border-secondary bg-black">
          <DropdownSelect />
          <div className="w-full h-auto my-8 flex items-center justify-center">
            <SelectableButtonList options={options} />
          </div>
          <SelectedButton />
          
        </div>
      </div>
  )
}

const UpDownGame = () => {
  return (
    <div className="wrapper w-full h-screen">
        <div className="top">
            <CardTop />
            <Button />
        </div>
        <div className="content h-screen overflow-y-scroll group">
            <ul className="list-card_play-game flex flex-col justify-center w-full gap-4">
                <CardGame />
                <CardGame />
                <CardGame />
            </ul>
        </div>
        {/* <div className="bottom absolute top-0 left-0 w-full h-screen bg-black/20">
            <FormGame />
        </div> */}
    </div>
  )
}

export default UpDownGame
