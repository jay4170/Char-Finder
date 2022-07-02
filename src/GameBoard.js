import React from "react";

export default function GameBoard(props) {
  const title = props.selectedGame.title;
  const canvas = props.selectedGame.canvas;
  const chars = props.selectedGame.characters;

  const coordsHandler = (e) => {
    const x = Math.round(
      (e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100
    );
    const y = Math.round(
      (e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) * 100
    );
    //test
    //logs current click location
    console.log(x + "  " + y);

    //checked each click to the stored value of each character
    chars.forEach((char) => {
      if (
        y > char.coords[1] - 2 &&
        y < char.coords[1] + 2 &&
        x > char.coords[0] - 2 &&
        x < char.coords[0] + 2
      ) {
        alert("Test");
      }
    });
  };

  const charList = chars.map((char, i) => (
    <div
      key={i}
      className=" w-full grid  justify-items-center m-2 border text-center p-2 "
    >
      <img className="h-20 md:h-32 xl:64" alt="" src={char.src} />
      <h1>{char.name}</h1>
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
