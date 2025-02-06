import React, { ReactNode, useEffect, useState } from 'react'
import { AnimatePresence, motion } from "motion/react"
import "../../assets/css/splash.css"

type SplashScreenProps = {
  children: ReactNode;
};

const SplashScreen: React.FC<SplashScreenProps>  = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [timeLeft, setTimeLeft] = useState<number>(3);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);

    const countdownInterval = setInterval(() => {
      setTimeLeft((prev) => (prev > 1 ? prev - 1 : 0));
    }, 1000);

    return () => {
    clearTimeout(timer);
    clearInterval(countdownInterval);
    };
  }, []);
  
  return (
    <div className={`transition-colors ${loading ? "bg-white" : "bg-black"} z-50`}>
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 flex flex-col items-center justify-center text-black text-2xl font-bold"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, bounce: 0.35 }}
          >
            <div className="flex flex-col items-center" style={{   width: "100%", height: "100%" }}>
              <div className="splash-screen--container">
                <div className="splash-screen--animation">
                  <div className="splash-screen--logo-container">
                    <div className="splash-screen--logo">
                      <img src="/src/assets/logo_OG.png" alt="logo og" className="w-full h-full" />
                    </div>
                  </div>
                </div>
                <div className="splash-screen--logo-text font-normal text-[#c84cfa]">OGverse</div>
                <span className="absolute bottom-10 left-[50%] -translate-x-[50%] text-base font-light italic">Loading... {timeLeft}s</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
        
      {/* {!loading && <div className="splash-screen--circle" />} */}
      {!loading && <div className="text-white w-full">
        <div className="splash-screen--circle"></div>
        {children}
      </div>}
    </div>
  )
}

export default SplashScreen
