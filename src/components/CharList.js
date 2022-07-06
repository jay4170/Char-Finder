import React from 'react'

export default function CharList(chars) {
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
  return charList
}
