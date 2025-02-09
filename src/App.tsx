import "./App.css";
import DevModeInstruction from "./components/DevModeInstruction";
import Navbar from "./components/Navbar";
import DocumentationSection from "./components/DocumentationSection";
import HelloTokenSection from "./components/HelloTokenSection";
import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/home/Home";
import Leaderboard from "./pages/leaderboard/Leaderboard";
import Task from "./pages/task/Task";
import Referral from "./pages/referral/Referral";
import Game from "./pages/game/Game";
import UpDownGame from "./pages/game/UpDownGame";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} >
          <Route index element={<Home />} />
          <Route path="/leaderboards" element={<Leaderboard />} />
          <Route path="/referral" element={<Referral />} />
          <Route path="/tasks" element={<Task />} />
          <Route path="/games" element={<Game />} />
        </Route>
        <Route path="/games/updown" element={<UpDownGame />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
