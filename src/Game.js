import React from "react";
import GameBoard from "./GameBoard";
import robotCity from "./robot-city";

export default function Game() {

  return (
    <div>
      <GameBoard selectedGame={robotCity()} />
    </div>
  );
}
