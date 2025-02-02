import React from "react";
// import PropTypes from "prop-types";

export default function TaskCard({
  taskName,
  isDone,
}: {
  taskName: string;
  isDone: boolean;
}) {
  return (
    <li
      className={`card-task border" ${
        isDone
          ? "border-accent/10 bg-accent/5"
          : "border-transparent bg-primary"
      } `}
    >
      <div className="left">
        <div className="w-10 h-10 overflow-hidden rounded-sm bg-primary">
          <img src="/src/assets/avatar.png" alt="" className="w-10 h-10" />
        </div>
        <div className="flex flex-col justify-between">
          <div className="text-base font-light tracking-normal leading-4 text-light-100">
            {taskName}
          </div>
          <div className="flex align-baseline items-center gap-1 h-4 leading-4">
                <span className="icon align-icon_1cap">
                  <img src="/src/assets/icon_point.svg" alt="icon point" />
                </span>
                <span className="text-xs font-medium text-light_100">+100</span>
            </div>
        </div>
      </div>

      {isDone ? <IconDone /> : <Icon />}
    </li>
  );
}

function Icon() {
    return (
        <button className="flex justify-center items-center w-8 h-8 bg-primary rounded-full cursor-pointer">
            <span className="w-6 h-6 ml-0.5 text-light_200">
                <svg data-slot="icon" aria-hidden="true" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m8.25 4.5 7.5 7.5-7.5 7.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
            </span>
        </button>
    );
}

function IconDone() {
    return (
        <button className="flex justify-center items-center w-7 h-7 bg-accent/80 rounded-full cursor-not-allowed">
            <span className="w-[18px] h-[18px] text-white">
                <svg data-slot="icon" aria-hidden="true" fill="none" strokeWidth="4" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m4.5 12.75 6 6 9-13.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
            </span>
        </button>
    );
}
