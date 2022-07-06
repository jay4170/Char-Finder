import React, { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Footer from "./Constants/Footer";
import Header from "./Constants/Header";
import LeaderBoard from "./LeaderBoard";
import Game from "./Game";
import { serverTimestamp, Timestamp } from "firebase/firestore/lite";



function App() {
  const [time,setTime] = useState(new Timestamp())
  console.log(time);
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
