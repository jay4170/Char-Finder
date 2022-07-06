import React from "react";
import GameBoard from "./GameBoard";
import robotCity from "../utils/robot-city";
import StopWatch from "./StopWatch";

export default function Game() {
  return (
    <div>
      

      <GameBoard selectedGame={robotCity()} />
    </div>
  );
}
