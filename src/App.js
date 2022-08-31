import { useState, useEffect, useNavigate } from "react";
import "./App.css";
import Dimensions from "./Dimensions.js";
import Desktop from "./home/background-home-desktop.jpg";
import iPad from "./home/background-home-tablet.jpg";
import mobile from "./home/background-home-mobile.jpg";
import logo from "./shared/logo.svg";
import { Header } from "./Header";
import Menu from "./Menu";

function App() {
  const [myDevice, setMydevice] = useState("Desktop");
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
  console.log(myDevice);
  return (
    <div className="App">
      <Menu></Menu>
      <div className="page-content">
        <div className="info-content">
          <span>
            <h3>
              SO, YOU WANT TO TRAVEL TO <h1 id="space">SPACE</h1>
            </h3>
          </span>
          <span>
            <h5 className="info">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </h5>
          </span>
        </div>
        <div className="prompt">
          <h2> EXPLORE</h2>
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
}

export default App;
