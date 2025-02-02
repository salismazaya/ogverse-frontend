import React from 'react'

const ConnectWalletBtn = () => {
  return (
    <button
      type="button"
      className="connect-btn"
    >
      <div>Connect Wallet</div>
      <span className="icon align-icon_2cap">
        <svg
          data-slot="icon"
          aria-hidden="true"
          fill="none"
          strokeWidth="1.5"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </span>
    </button>
  )
}

export default ConnectWalletBtn
