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
import Footer from "./Footer";
import GameBoard from "./GameBoard";
import Header from "./Header";
import LeaderBoard from "./LeaderBoard";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<GameBoard />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
