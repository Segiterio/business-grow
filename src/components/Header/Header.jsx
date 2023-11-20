import React from "react";
import { HeaderContainer, Nav, Wrapper, Ham } from "./HeaderStyle";
import navbarData from "../../Data/nav.json";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = ({ setMobileSideBar }) => {
  return (
    <Wrapper $border>
      <HeaderContainer>
        <div>Logo.</div>
        <Nav>
          {navbarData.map((item) => (
            <div key={item.id}>{item.title}</div>
          ))}
        </Nav>
        <Ham>
          <RxHamburgerMenu
            style={{ verticalAlign: "middle" }}
            onClick={() => {
              setMobileSideBar(true);
            }}
          />
        </Ham>
      </HeaderContainer>
    </Wrapper>
  );
};

export default Header;
