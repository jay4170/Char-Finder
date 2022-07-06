import React, { useState } from "react";
import db from "../utils/config";
import getStoredCoords from "../utils/getStoreCoords";
import CharList from "./CharList";
import StopWatch from "./StopWatch";

export default function GameBoard(props) {
  const title = props.selectedGame.title;
  const canvas = props.selectedGame.canvas;
  const gameNo = props.selectedGame.gameNo;
  const [chars, setChars] = useState(props.selectedGame.characters);
  const winningCoords = getStoredCoords(db, gameNo);

  

  const coordsHandler = (e) => {
    const clickedX = Math.round(
      (e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100
    );
    const clickedY = Math.round(
      (e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) * 100
    );

    winningCoords.then((arr) => {
      arr.forEach((char) => {
        if (
          !char.found &&
          clickedY > char.coords[1] - 2 &&
          clickedY < char.coords[1] + 2 &&
          clickedX > char.coords[0] - 2 &&
          clickedX < char.coords[0] + 2
        ) {
          charUpdater(char);

          alert(`You found ${char.name}`);
        }
      });
    });
  };

  const charUpdater = (char) => {
    const tempChars = [...chars];
    tempChars.forEach((element) => {
      if (element.name === char.name) {
        element.found = true;
      }
    });
    setChars(tempChars);
  };

  

  return (
    <div
      className="grid grid-cols-1 justify-items-center	"
      onClick={coordsHandler}
    >
      <StopWatch />
      <div className="grid w-full w-max-32 grid-flow-col justify-evenly">
        {CharList(chars)}
      </div>
      <div className=" grid text-center">
        <h1>{title}</h1>
        <img alt={title} src={canvas}></img>
      </div>
    </div>
  );
}
