import { Link } from "react-router";
import ConnectWalletBtn from "../Buttons/ConnectWalletBtn";
// import ConnectWalletBtn from "./buttons/ConnectWalletBtn";

export default function CardWallet() {
  return (
    <div className="wallet-card">
      <div className="wrap-wallet">
        <div className="icon-wallet">
          <img src="/src/assets/icon_wallet.png" alt="" />
        </div>
        <div className="wallet-info">
          <p>My Wallet</p>
          <div>account_rdxxxx</div>
        </div>
      </div>

      <Link to='/' className="reset-style_link">
        <ConnectWalletBtn />
        {/* connect wallet */}
      </Link>
    </div>
  );
}
