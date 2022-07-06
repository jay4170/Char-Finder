import canvas from "../images/robot-city/Canvas/city.jpg";
import farnsworth from "../images/robot-city/Characters/farnsworth.jpg";
import lrr from "../images/robot-city/Characters/Lrrr.jpg";
import mojojojo from "../images/robot-city/Characters/mojojojo.jpg";

const robotCity = () => {
  return {
    title: "Robot City",
    gameNo: 0,
    canvas: canvas,
    characters: [
      {
        name: "Robo-Farnsworth",
        src: farnsworth,
        found: false,
      },
      { name: "Robo-Lrr", src: lrr, found: false,  },
      { name: "Robo-Mojo-Jojo", src: mojojojo, found: false,  },
    ],
  };
};
export default robotCity;
