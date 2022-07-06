import { collection, getDocs } from "firebase/firestore/lite";
import React, { useState } from "react";
import db from "./config";

export default function GameBoard(props) {
  const title = props.selectedGame.title;
  const canvas = props.selectedGame.canvas;
  const gameNo = props.selectedGame.gameNo;

  const [chars, setChars] = useState(props.selectedGame.characters);
  const winningCoords = getStoredCoords(db, gameNo);

  async function getStoredCoords(db, gameNo) {
    let charAndCoords = [];
    //query data base, based on the gameNo selected
    const col = collection(db, "coords");
    const snapshot = await getDocs(col);
    const coordList = snapshot.docs[gameNo].data();

    //turn the data into an array of objects {name:dave,coords:[1,2]}
    charAndCoords = Object.keys(coordList).map((key) => {
      const char = { name: key, coords: coordList[key] };
      return char;
    });

    //return the array

    return charAndCoords;
  }

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

  const charList = chars.map((char, i) => (
    <div
      key={i}
      className={`w-full grid ${
        char.found && "grayscale"
      } justify-items-center m-2 border text-center p-2`}
    >
      <img className="h-20 md:h-32 xl:64" alt="" src={char.src} />
      <h1 className={char.found ? `line-through` : undefined}>{char.name}</h1>
    </div>
  ));

  return (
    <div
      className="grid grid-cols-1 justify-items-center	"
      onClick={coordsHandler}
    >
      <div className="grid w-full w-max-32 grid-flow-col justify-evenly">
        {charList}
      </div>
      <div className=" grid text-center">
        <h1>{title}</h1>
        <img alt={title} src={canvas}></img>
      </div>
    </div>
  );
}
