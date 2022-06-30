import React from "react";

export default function GameBoard(props) {
  const title = props.selectedGame.title;
  const canvas = props.selectedGame.canvas;
  const chars = props.selectedGame.characters;

  const charList = chars.map((char, i) => (
    <div key={i} className="h-full w-full m-2 border text-center p-2 ">
      <img className="" alt="" src={char.src} />
      <h1>{char.name}</h1>
    </div>
  ));

  console.log(canvas);
  return (
    <div className="grid grid-cols-1 justify-items-center	">
      <div className="flex items-center ">{charList}</div>
      <div className=" grid text-center">
        <h1>{title}</h1>
        <img alt={title} src={canvas}></img>
      </div>
    </div>
  );
}
