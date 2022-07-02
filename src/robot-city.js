import canvas from "./images/robot-city/Canvas/city.jpg";
import farnsworth from "./images/robot-city/Characters/farnsworth.jpg";
import lrr from "./images/robot-city/Characters/Lrrr.jpg";
import mojojojo from "./images/robot-city/Characters/mojojojo.jpg";

const robotCity = () => {
  return {
    title: "Robot City",
    canvas: canvas,
    characters: [
      { name: "Robo-Farnsworth", src: farnsworth, coords: [42, 22] },
      { name: "Robo-Lrr", src: lrr, coords: [74, 67] },
      { name: "Robo-Mojo-Jojo", src: mojojojo, coords: [23, 46] },
    ],
  };
};
export default robotCity;
