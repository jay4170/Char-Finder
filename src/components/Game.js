import React from "react";
import GameBoard from "./GameBoard";
import robotCity from "../utils/robot-city";
//TODO:TPotentially use this to select different gameboards

export default function Game() {
  return (
    <div>
      <GameBoard selectedGame={robotCity()} />
    </div>
  );
}
