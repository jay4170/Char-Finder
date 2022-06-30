import React from "react";
import GameBoard from "./GameBoard";
import robotCity from "./robot-city";

export default function Game() {
  const robot = robotCity();
  const coordsHandler = (e) => {
    const x = Math.round(
      (e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100
    );
    const y = Math.round(
      (e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) * 100
    );
    console.log(x + "  " + y);
  };
  return (
    <div onClick={coordsHandler}>
      <GameBoard selectedGame={robot} />
    </div>
  );
}
