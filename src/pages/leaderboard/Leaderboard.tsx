import React, { useEffect, useRef, useState } from 'react'
import Banner from '../../components/Banner/Banner';
import LeaderBoardCard from '../../components/Cards/LeaderBoardCard';

interface LeaderboardProps {
    id: string;
    nickname: string;
    username: string;
    total: number;
    rank: number;
}

const Leaderboard: React.FC = () => {
  const [lists, setLists] = useState<LeaderboardProps[]>([]);
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current === false) {
        fetch("/leaderboards.json")
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
      <div className="mt-6 mx-auto">
        <Banner bannerName="Leaderboards" labelName="TOP 100" />
      </div>
      <div className="wrap-list_leaderboard">
        <div className="content">
          <ul className="list-leaderboards hide-scrollbar">
            {lists.map((list) => (
              <LeaderBoardCard key={list.id} nickname={list.nickname} username={list.username} total={list.total} rank={list.rank} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Leaderboard
