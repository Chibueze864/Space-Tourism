import { useState, useEffect, useNavigate } from "react";
import Desktop from "./home/background-destination-desktop.jpg";
import iPad from "./home/background-destination-tablet.jpg";
import mobile from "./home/background-destination-mobile.jpg";
import Dimensions from "./Dimensions.js";
import Menu from "./Menu";
import Moon from "./home/image-moon.png";
import Europa from "./home/image-europa.png";
import Titan from "./home/image-titan.png";
import Mars from "./home/image-mars.png";
import "./Destination.css";

const Destination = () => {
  const moonContent =
    "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
  const moonDistance = "384,400 km";
  const moonTime = "3 days";
  const titanContent =
    "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
  const titanDistance = "1.6 bil. km";
  const titanTime = "7 years";
  const marsContent =
    "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
  const marsDistance = "225 mil. km ";
  const marsTime = "9 months";
  const europaContent =
    "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
  const europaDistance = "628 mil. km";
  const europaTime = "3 years";

  const [currentContent, setCurrentContent] = useState(moonContent);
  const [currentDistance, setCurrentDistance] = useState(moonDistance);
  const [currentTime, setCurrentTime] = useState(moonTime);

  const [myDevice, setMydevice] = useState("Desktop");
  const [imageDestination, setImageDestination] = useState(Moon);
  const [destination, setDestination] = useState("Moon");
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
  const destinationChange = (value) => {
    if (value == "Moon") {
      setImageDestination(Moon);
      setCurrentContent(moonContent);
      setCurrentDistance(moonDistance);
      setCurrentTime(moonTime);
    } else if (value == "Europa") {
      setImageDestination(Europa);
      setCurrentContent(europaContent);
      setCurrentDistance(europaDistance);
      setCurrentTime(europaTime);
    } else if (value == "Mars") {
      setImageDestination(Mars);
      setCurrentContent(marsContent);
      setCurrentDistance(marsDistance);
      setCurrentTime(marsTime);
    } else if (value == "Titan") {
      setImageDestination(Titan);
      setCurrentContent(titanContent);
      setCurrentDistance(titanDistance);
      setCurrentTime(titanTime);
    }
    setDestination(value);
  };

  return (
    <div className="App">
      <Menu></Menu>
      <div className="destination-content">
        <div className="destination-prompt">
          <p id="pick">01 Pick Your Destination</p>
          <img id="image" src={imageDestination} />
        </div>

        <div className="destination-info">
          <nav className="destinations">
            <ul>
              {/* <li class="item">
                <span onClick={() => destinationChange("Moon")}>
                  <a href="#">Moon</a>
                </span>
              </li>
              <li class="item">
                <span onClick={() => destinationChange("Mars")}>
                  <a href="#">Mars</a>
                </span>
              </li>
              <li class="item">
                <span onClick={() => destinationChange("Europa")}>
                  <a href="#">Europa</a>
                </span>
              </li>
              <li class="item">
                <span onClick={() => destinationChange("Titan")}>
                  <a href="#">Titan</a>
                </span>
              </li> */}
              <li class="item">
                <span onClick={() => destinationChange("Moon")}>Moon</span>
              </li>
              <li class="item">
                <span onClick={() => destinationChange("Mars")}>Mars </span>
              </li>
              <li class="item">
                {" "}
                <span onClick={() => destinationChange("Europa")}>
                  Europa
                </span>{" "}
              </li>
              <li class="item">
                <span onClick={() => destinationChange("Titan")}>Titan</span>
              </li>
            </ul>
          </nav>
          <h1 id="destination">{destination}</h1>
          <div className="current-content">{currentContent}</div>

          <div className="current">
            <div>
              AVG. DISTANCE <br></br>
              <span className="current-footnote">{currentDistance}</span>
            </div>
            <div>
              EST. TRAVEL TIME <br></br>
              <span className="current-footnote">{currentTime}</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .App {
          background-image: url(${myDevice});
          height: 100%;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};
export default Destination;
