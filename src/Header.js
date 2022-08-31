// import React, { useState } from "react";
// import styled, { css } from "styled-components";
// import {useNavigate} from "react-router-dom"

// export const Header = () => {
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false);
//   const HeaderWrapper = styled.header`
//     // padding: 18px 0;
//     color: white;
//     position: fixed;
//     background: ${open ? "rgba(255,255,255, 1)" : "none"};
//     left: -100px;
//     // top: -10px;
//     right: 0;
//     bottom: auto;
//     z-index: ${open ? "1" : "2"};
//     height: 100vh;
//   `;

//   const Wrapper = styled.div`
//     * {
//       box-sizing: border-box;
//       opacity: 1;
//     }
//   `;
//   const MenuToggle = styled.div`
//     z-index: 9999;
//     width: 30px;
//     height: 30px;
//     transform: rotate(0deg);
//     transition: all 0.25s ease-in;
//     cursor: pointer;
//     margin-left: auto;
//     span {
//       display: block;
//       position: absolute;
//       height: 4px;
//       width: 100%;
//       //   background: ${(props) => (props.open ? "white" : "#fffff")};
//       background: ${(props) => (props.open ? "#111111" : "#ffff")};
//       border-radius: 9px;
//       opacity: 1;
//       left: 0;
//       transform: rotate(0deg);
//       transition: ${(props) =>
//         props.open ? "all 0.25s ease-in" : "all 0.25s ease-out"};
//     }
//     span:nth-child(1) {
//       top: ${(props) => (props.open ? "calc(50% - 2px)" : "10%")};
//       transform-origin: left center;
//     }
//     span:nth-child(2) {
//       top: ${(props) => (props.open ? 0 : "calc(50% - 2px)")};
//       left: ${(props) => (props.open ? "calc(50% - 2px)" : null)};
//       width: ${(props) => (props.open ? "4px" : null)};
//       height: ${(props) => (props.open ? "100%" : null)};
//       transform-origin: left center;
//     }
//     span:nth-child(3) {
//       top: calc(90% - 4px);
//       transform-origin: left center;
//       width: ${(props) => (props.open ? 0 : null)};
//       opacity: ${(props) => (props.open ? 0 : 1)};
//     }
//   `;

//   const RotateContainer = styled.div`
//     height: 100%;
//     width: 100%;
//     transition: ${(props) =>
//       props.open ? "all 0.25s ease-in-out" : "all 0.25s ease-in-out"};
//     transform: ${(props) => (props.open ? "rotate(-45deg)" : "none")};
//   `;
//   const MenuWrapper = styled.div`
//     position: fixed;
//     overflow: hidden;
//     top: ${(props) => (props.open ? "0" : "-100%")};
//     right: 1px;
//     z-index: 0;
//     margin-top: 66px;
//     width: 100vw;
//     height: 100vh;
//     transition: ${(props) =>
//       props.open ? "all 0.25s ease-out" : "all 0.6s ease-out"};
//     // box-shadow: ${(props) =>
//       props.open ? "0px 4px 20px -5px rgba(232,232,232,1)" : "none"};
//     padding: 12px;
//     background: ${(props) =>
//       props.open ? "0px 4px 20px -5px rgba(232,232,232,1)" : "none"};
//     line-height: 15vh;
//     z-index: ${open ? "2" : "1"};
//   `;
//   const Menu = styled.div`
//     * {
//       display: ${open ? "visible" : "none"};
//       color: #111111;
//     }
//   `;
//   const toggleMenu = () => {
//     setOpen(!open);
//   };
//   const move = (value) => {
//     navigate(value);
//   };
//   return (
//     <Wrapper>
//       <HeaderWrapper id="header">
//         <MenuToggle onClick={toggleMenu} open={open}>
//           <RotateContainer open={open}>
//             <span />
//             <span />
//             <span />
//           </RotateContainer>
//         </MenuToggle>
//       </HeaderWrapper>
//       <MenuWrapper open={open}>
//         <Menu open={open}>
//           <Menu>
//             <span onClick={() => move("/")}>00 Home</span>
//           </Menu>
//           <Menu href="/">
//             <span onClick={() => move("/destination")}>01 Destination</span>
//           </Menu>
//           <Menu href="/">
//             <span onClick={() => move("/crew")}>02 Crew</span>
//           </Menu>
//           <Menu href="/">
//             <span onClick={() => move("/technology")}>03 Technology</span>
//           </Menu>
//         </Menu>
//       </MenuWrapper>
//       <style jsx>{``}</style>
//     </Wrapper>
//   );
// };
import React, { useState } from "react";
import { ResponsiveNavbar } from "react-hamburger-menus";
import "react-hamburger-menus/dist/style.css";
import { GhostNavbar } from "react-hamburger-menus";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const move = (value) => {
    navigate(value);
  };

  return (
    <div>
      <GhostNavbar
        styles={{
          fontColor: "#fff",
          fontHoverColor: "black",
          listHoverColor: ["transparent", "#fff"],
          floatButtonX: 1,
          floatButtonY: 0,

          navigationButton: {
            borderRadius: "5px",
            width: "50px",
          },
          navigationBackground: {
            backgroundColor: "black",
          },
          navigationButton: {
            backgroundColor: "black",
          },
          iconColor: "#fff",
        }}
      >
        <ul
          style={{
            fontFamily: 'font-family: "Lato", sans-serif',
            fontSize: "5px",
          }}
        >
          <li>
            {" "}
            <a href="/">00 Home</a>
          </li>
          <li>
            <a href="/destination ">01 Destination</a>
          </li>
          <li>
            <a href="/crew ">02 Crew</a>
          </li>
          <li>
            <a href="/technology">03 Technology</a>
          </li>
        </ul>
      </GhostNavbar>
    </div>
  );
};
export default Header;
