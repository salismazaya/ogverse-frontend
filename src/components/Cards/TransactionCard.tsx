import React from "react";

interface CardTransactionProps {
  token: string;
  abbr: string;
  total: number;
  value: string;
}

export default function CardTransaction(props: CardTransactionProps) {
  return (
    <div className="wrap-gradient_left">
      <div className="content">
        <Card {...props} />
      </div>
    </div>
  );
}

export const Card: React.FC<CardTransactionProps> = ({
  token,
  abbr,
  total,
  value,
}) => {
  return (
    <div className="card-transaction bg-gradient_right">
      <div className="right">
        <div className="logo-crypto">
          <img src="/src/assets/btc-logo.svg" alt="crypto logo" />
        </div>
        <div className="flex flex-col justify-between gap-1">
          <div className="relative flex align-baseline items-center gap-1.5">
            <div className="text-base font-medium tracking-wider leading-0">
              {abbr}
            </div>
            <span className="inline-block px-2.5 text-[10px] font-extralight tracking-wide rounded-full border border-secondary">
              XRD
            </span>
          </div>
          <div className="text-sm font-light text-gray-300">{token}</div>
        </div>
      </div>

      <div className="flex flex-col justify-between text-right text-sm font-light tracking-wide">
        <div className="text-gray-300">{total}</div>
        <div>{value}</div>
      </div>
    </div>
  );
};
