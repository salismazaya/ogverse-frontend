import { Link } from "react-router"
import ConnectWalletBtn from "../../components/Buttons/ConnectWalletBtn"
import { useEffect, useRef, useState } from "react";
import HistoryGameCard from "../../components/Cards/HistoryGameCard";

interface CardInfoProps {
    text: string;
    point: number | string;
}

interface GameHistory {
    token: string;
    timeStamp: string;
    entryPrice: number | string;
    exitPrice: number | string;
}

export function CardTop() {
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

      <div className="reset-style_link">
        {/* <ConnectWalletBtn /> */}
        <radix-connect-button></radix-connect-button>
      </div>
    </div>
  )
}

export function CardInfo({text, point}: CardInfoProps) {
  return (
    <div className="card_info-gameplay">
      <p className="text-[10px] font-normal tracking-wide text-center text-gray-300">{text}</p>
      <div className="card-info">
        <span className="icon align-icon_1cap"></span>
        <div className="text-sm font-medium leading-0">{point}</div>
      </div>
    </div>
  )
}

export default function Game() {
  const [lists, setLists] = useState<GameHistory[]>([]);
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current === false) {
        fetch("/history-games.json")
            .then((response) => response.json())
            .then((data) => setLists(data))
            .then(() => loaded.current = true)
    }

    return () => {
        console.log();
    }
  }, [loaded])

  return (
    <div className="wrapper">
      <div className="top">
        <CardTop />
      </div>
      <h3 className="text-3xl font-normal leading-10 mx-4 my-5">143.451.01 <span className="text-gray-300">OG</span></h3>
      <div className="list-card_info-gameplay">
        <CardInfo text="Total Win" point="20"/>
        <CardInfo text="Win Rate" point="48.55%"/>
        <CardInfo text="Win Strike" point="0"/>
      </div>
      <div className="list-games">
        <div className="content">
          <div className="mt-1.5 mb-2 px-4">
            <p className="text-xl font-extralight leading-0">Your order <span className="font-normal text-accent">10</span></p>
            <div></div>
          </div>
          <ul className="list-history_games hide-scrollbar">
            {lists.map((list, index) => (
                <HistoryGameCard key={index} 
                    token={list.token}
                    timeStamp={list.timeStamp}
                    entryPrice={list.entryPrice}
                    exitPrice={list.exitPrice}
                />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
