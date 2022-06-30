import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useRouteMatch,
  useParams,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Footer from "./Constants/Footer";
import GameBoard from "./GameBoard";
import Header from "./Constants/Header";
import LeaderBoard from "./LeaderBoard";
import Game from "./Game";

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
