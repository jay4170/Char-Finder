import React, { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Footer from "./components/Constants/Footer";
import Header from "./components/Constants/Header";
import LeaderBoard from "./components/LeaderBoard";
import Game from "./components/Game";
import StopWatch from "./components/StopWatch";

function App() {
  return (
    <div className="absolute w-full">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Game />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
