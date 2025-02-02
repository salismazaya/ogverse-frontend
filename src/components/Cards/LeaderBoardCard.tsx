import React from "react";
import PropTypes from "prop-types";

export default function LeaderBoardCard({
  nickname,
  username,
  total,
  rank,
}: {
  nickname: string;
  username: string;
  total: number;
  rank: number;
}) {
  return (
    <li className="card-laderboard even:bg-gradient_left odd:bg-gradient_right relative">
      {rank === 1 ? (
        <img src="/src/assets/medal-first-place.png" alt="" className="absolute top-0 right-2.5 w-11 h-11" />
      ):(
        rank === 2 ? (
          <img src="/src/assets/medal-second-place.png" alt="" className="absolute top-0 right-2.5 w-11 h-11" />
        ):(
          rank === 3 ? (
            <img src="/src/assets/medal-third-place.png" alt="" className="absolute top-0 right-2.5 w-11 h-11" />
          ):""
        )
      )}
    {/* <li className="card-laderboard even:bg-gradient_left odd:bg-gradient-to_right"> */}
      <div className="left">
        <div className="relative w-[34px] h-[34px] overflow-hidden rounded-full bg-primary">
          <img
            src="/src/assets/avatar.png"
            alt=""
            className="w-10 h-10 aspect-square object-cover"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="text-xs font-normal tracking-wide leading-none">
            {nickname} <span className="text-xs text-gray-500">/</span>{" "}
            <span className="text-[10px] font-extralight">{username}</span>
          </div>
          <div className="flex align-baseline items-center gap-1">
            <div className="icon align-icon_1cap">
              <img src="/src/assets/icon_point.svg" alt="icon point" />
            </div>
            <span className="text-xs font-extralight -tracking-wide text-light_100 leading-none">
              {total}
            </span>
          </div>
        </div>
      </div>
      <div className="right">
        <div
          className={`rank ${
            rank <= 3 && rank >= 0 ? "bg-transparent text-transparent" : ""
          } `}
        >
          {rank}
        </div>
      </div>
    </li>
  );
}

LeaderBoardCard.propTypes = {
  nickname: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  rank: PropTypes.number.isRequired,
};
