import { collection, getDoc, getDocs } from "firebase/firestore/lite";

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
export default getStoredCoords