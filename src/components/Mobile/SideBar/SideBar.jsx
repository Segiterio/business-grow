import React from "react";
import navbarData from "../../../Data/nav.json";
import { RxCross1 } from "react-icons/rx";
import { SideBarContainer,Nav } from "./SideBarStyle";
const SideBar = ({setMobileSideBar}) => {
  return (
    <SideBarContainer>
    <div>
        <RxCross1 onClick={() => {
             setMobileSideBar(false)
        }} size={"1.5rem"}/>
    </div>
      <Nav>
        {navbarData.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </Nav>
    </SideBarContainer>
  );
};

export default SideBar;
