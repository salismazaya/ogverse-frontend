import React, { useState } from 'react'
import PropTypes from 'prop-types';

const items = [
    { name: "Bitcoin", img: "/src/assets/btc-logo.svg" },
    { name: "Bitcoin", img: "/src/assets/btc-logo.svg" },
    { name: "Bitcoin", img: "/src/assets/btc-logo.svg" },
    { name: "Bitcoin", img: "/src/assets/btc-logo.svg" }
];


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

// function FormGame() {
// const options: string[] = ["$1", "$5", "$10", "$15", "$20"];

// return (
//     <div className='relative w-full h-full bg-black/60'
//         onClose
//     >
//         <div className="absolute bottom-0 left-0 w-full h-[50%] px-8 py-6 rounded-t-3xl backdrop-blur-sm border border-secondary bg-black">
//         <DropdownSelect />
//         <div className="w-full h-auto my-8 flex items-center justify-center">
//             <SelectableButtonList options={options} />
//         </div>
//         <SelectedButton />
        
//         </div>
//     </div>
// )
// }

const ModalGame = ({
    isOpen, onClose
}: {
    isOpen: boolean;
    onClose: () => void;
}) => {

  const options: string[] = ["$1", "$5", "$10", "$15", "$20"];

  return (
    <>
    <div className='relative w-full h-full bg-black/60'
        onClick={onClose}
    >
        <div className="absolute bottom-0 left-0 w-full h-[50%] px-8 py-6 rounded-t-3xl backdrop-blur-sm border border-secondary bg-black"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
        >
        <DropdownSelect />
        <div className="w-full h-auto my-8 flex items-center justify-center">
            <SelectableButtonList options={options} />
        </div>
        <SelectedButton />
        
        </div>
    </div>
    </>
  )
}

ModalGame.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default ModalGame
