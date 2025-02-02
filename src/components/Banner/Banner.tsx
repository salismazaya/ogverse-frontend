import React from "react";
import PropTypes from "prop-types";

export default function Banner({
  labelName,
  bannerName,
}: {
  labelName: string;
  bannerName: string;
}) {
  return (
    <div className="banner">
      {/* <img src={banner} alt="" className=''/> */}
      <div className="absolute w-[74px] h-[30px] leading-[30px] text-center left-[50%] -top-4 -translate-x-[50%] text-sm font-light tracking-wide rounded-lg bg-primary text-slate-300">
        {labelName}
      </div>
      <img src="/src/assets/banner.png" alt="" className="relative" />
      <div className="absolute top-[50%] -translate-y-[50%] text-2xl tracking-wide font-light">
        {bannerName}
      </div>
    </div>
  );
}

Banner.propTypes = {
  labelName: PropTypes.string.isRequired,
  bannerName: PropTypes.string.isRequired,
};
