import React, { useState, useEffect, useNavigate } from "react";
import Desktop from "./technology/background-technology-desktop.jpg";
import iPad from "./technology/background-technology-tablet.jpg";
import mobile from "./technology/background-technology-mobile.jpg";
import Dimensions from "./Dimensions.js";
import launchPortrait from "./technology/image-launch-vehicle-portrait.jpg";
import capsulePortrait from "./technology/image-space-capsule-portrait.jpg";
import spacePortPortrait from "./technology/image-spaceport-portrait.jpg";
import launchLandscape from "./technology/image-launch-vehicle-landscape.jpg";
import capsuleLandscape from "./technology/image-space-capsule-landscape.jpg";
import spacePortLandscape from "./technology/image-spaceport-landscape.jpg";
import Menu from "./Menu";
import "./Technology.css";

function Technology() {
  const [myDevice, setMydevice] = useState("Desktop");
  const launchTitle = "LAUNCH VEHICLE";
  const capsuleTitle = "SPACE CAPSULE";
  const spacePortTitle = "SPACEPORT";
  const launchContent =
    "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
  const capsuleContent =
    "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
  const spacePortContent =
    "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";
  const [currentPic, setCurrentPic] = useState(launchPortrait);
  const [title, setTitle] = useState(launchTitle);
  const [content, setContent] = useState(launchContent);
  const [highlighted, setHighlighted] = useState("one");
  const { height, width } = Dimensions();
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
  useEffect(() => {
    if (width < 1024 && title == launchTitle) {
      setCurrentPic(launchLandscape);
    } else if (width >= 1024 && title == launchTitle) {
      setCurrentPic(launchPortrait);
    } else if (width >= 1024 && title == capsuleTitle) {
      setCurrentPic(capsulePortrait);
    } else if (width < 1024 && title == capsuleTitle) {
      setCurrentPic(capsuleLandscape);
    } else if (width >= 1024 && title == spacePortTitle) {
      setCurrentPic(spacePortPortrait);
    } else if (width < 1024 && title == spacePortTitle) {
      setCurrentPic(spacePortLandscape);
    }
  }, [width, height]);
  const setPicture = (value) => {
    if (value === "launch" && width >= 1024) {
      setCurrentPic(launchPortrait);
      setTitle(launchTitle);
      setContent(launchContent);
      setHighlighted("one");
    } else if (value === "launch" && width < 1024) {
      setCurrentPic(launchLandscape);
      setTitle(launchTitle);
      setContent(launchContent);
      setHighlighted("one");
    } else if (value === "capsule" && width >= 1024) {
      setCurrentPic(capsulePortrait);
      setTitle(capsuleTitle);
      setContent(capsuleContent);
      setHighlighted("two");
    } else if (value === "capsule" && width < 1024) {
      setCurrentPic(capsuleLandscape);
      setTitle(capsuleTitle);
      setContent(capsuleContent);
      setHighlighted("two");
    } else if (value === "port" && width >= 1024) {
      setCurrentPic(spacePortPortrait);
      setTitle(spacePortTitle);
      setContent(spacePortContent);
      setHighlighted("three");
    } else if (value === "port" && width < 1024) {
      setCurrentPic(spacePortLandscape);
      setTitle(spacePortTitle);
      setContent(spacePortContent);
      setHighlighted("three");
    }
  };
  let dots = (
    <span>
      <span className=" dot one" onClick={() => setPicture("launch")}>
        <p className="numbers">1</p>
      </span>
      <span className=" dot two" onClick={() => setPicture("capsule")}>
        <p className="numbers">2</p>
      </span>
      <span className=" dot three" onClick={() => setPicture("port")}>
        <p className="numbers">3</p>
      </span>
    </span>
  );
  return (
    <div className="App">
      <Menu></Menu>
      {width >= 1024 ? (
        <div className="technology-content">
          <div id="launch-prompt">
            <div className="dots">{dots}</div>

            <div className="launch-facts">
              <span id="launch-title">
                <h2>03 SPACE LAUNCH 101</h2>
              </span>
              <div id="terminology">
                <p id="the-terminology">THE TERMINOLOGY</p>
                <h1>{title}</h1>
                <p id="content">{content}</p>
              </div>
            </div>
          </div>

          <div className="technology-picture">
            <img src={currentPic} />
          </div>
        </div>
      ) : (
        <div className="technology-content">
          <div id="launch-prompt">
            <div className="dots">{dots}</div>

            <div className="launch-facts">
              <div id="terminology">
                <p id="the-terminology">THE TERMINOLOGY</p>
                <h1>{title}</h1>
                <p id="content">{content}</p>
              </div>
            </div>
          </div>

          <div className="technology-picture">
            <img src={currentPic} />
          </div>
          <span id="launch-title">
            <h2>03 SPACE LAUNCH 101</h2>
          </span>
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
        .${highlighted} {
          background-color: white;
          color: black;
        }
      `}</style>
    </div>
  );
}

export default Technology;
