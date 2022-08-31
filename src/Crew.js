import React, { useState, useEffect, useNavigate } from "react";
import Desktop from "./crew/background-crew-desktop.jpg";
import iPad from "./crew/background-crew-tablet.jpg";
import mobile from "./crew/background-crew-mobile.jpg";
import Dimensions from "./Dimensions.js";
import commanderPic from "./crew/image-douglas-hurley.png";
import engineerPic from "./crew/image-anousheh-ansari.png";
import pilotPic from "./crew/image-victor-glover.png";
import specialistPic from "./crew/image-mark-shuttleworth.png";
import Menu from "./Menu";
import "./Crew.css";

function Crew() {
  const commanderTitle = "Commander";
  const engineerTitle = "Flight Engineer";
  const pilotTitle = "Pilot";
  const specialistTitle = "Mission Specialist";

  const commanderName = "Douglas Hurley";
  const engineerName = "Anousheh Ansari";
  const pilotName = "Victor Glover";
  const specialistName = "Mark Shuttleworth";

  const commanderDescription =
    "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
  const engineerDescription =
    "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.";
  const pilotDescription =
    "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.";
  const specialistDescription =
    "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.";

  const [currentTitle, setCurrentTitle] = useState(commanderTitle);
  const [currentName, setCurrentName] = useState(commanderName);
  const [currentDescription, setCurrentDescription] =
    useState(commanderDescription);
  const [currentPic, setCurrentPic] = useState(commanderPic);
  const [myDevice, setMydevice] = useState("Desktop");
  const { height, width } = Dimensions();
  const [highlightedLarge, setHighlightedLarge] = useState("one");
  console.log(highlightedLarge);
  useEffect(() => {
    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/) ||
      navigator.userAgent.match(/Windows Phone/i) ||
      navigator.userAgent.match(/ZuneWP7/i)
    ) {
      setMydevice(mobile);
    } else if (navigator.userAgent.match(/iPad/i)) {
      setMydevice(iPad);
    } else {
      setMydevice(Desktop);
    }
  }, [width, height]);

  const changeCharacterTwo = (value) => {
    try {
      console.log("Working 2");

      if (value === "commander") {
        setCurrentDescription(commanderDescription);
        setCurrentName(commanderName);
        setCurrentPic(commanderPic);
        setCurrentTitle(commanderTitle);
        setHighlightedLarge("one");
      } else if (value === "engineer") {
        setCurrentDescription(engineerDescription);
        setCurrentName(engineerName);
        setCurrentPic(engineerPic);
        setCurrentTitle(engineerTitle);
        setHighlightedLarge("two");
      } else if (value === "pilot") {
        setCurrentDescription(pilotDescription);
        setCurrentName(pilotName);
        setCurrentPic(pilotPic);
        setCurrentTitle(pilotTitle);
        setHighlightedLarge("three");
      } else if (value === "specialist") {
        setCurrentDescription(specialistDescription);
        setCurrentName(specialistName);
        setCurrentPic(specialistPic);
        setCurrentTitle(specialistTitle);
        setHighlightedLarge("four");
      }
    } catch {
      console.log("error");
    }
  };
  let dots = (
    <span>
      <span
        onClick={() => changeCharacterTwo("commander")}
        className="one dot"
      ></span>
      <span
        onClick={() => changeCharacterTwo("engineer")}
        className="two dot"
      ></span>
      <span
        onClick={() => changeCharacterTwo("pilot")}
        className="three dot"
      ></span>
      <span
        onClick={() => changeCharacterTwo("specialist")}
        className="four dot"
      ></span>
    </span>
  );
  return (
    <div className="App">
      <div className="menu-div">
        <Menu></Menu>
      </div>
      {width < 768 ? (
        <div className="crew-content">
          <div className="crew-info">
            <h3>02 MEET YOUR CREW</h3>
            <div id="title"></div>
            <div className="crew-pic">
              <img  src={currentPic} />
            </div>
            <div className="dots">{dots}</div>
            <div id="title">
              <h2>{currentTitle.toUpperCase()}</h2>
            </div>
            <div id="name">
              <h1>{currentName}</h1>
            </div>
            <div className="crew-description">
              <p>{currentDescription}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="crew-content">
          <div className="crew-info">
            <h3 id="meet">02 MEET YOUR CREW</h3>
            <span>
              <span id="reverse">
                <div id="title">
                  <h2>{currentTitle.toUpperCase()}</h2>
                </div>
                <div id="name">
                  <h1>{currentName}</h1>
                </div>
                <div className="crew-description">
                  <p>{currentDescription}</p>
                </div>
              </span>
              <div className="dots">{dots}</div>
            </span>
          </div>
          <div className="crew-pic">
            <img src={currentPic} />
          </div>
        </div>
      )}
      <style jsx>{`
        .App {
          background-image: url(${myDevice});
          height: 100vh;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          overflow: hidden;
        }
        .${highlightedLarge} {
          background-color: rgba(255, 255, 255, 1);
        }
      `}</style>
    </div>
  );
}

export default Crew;
