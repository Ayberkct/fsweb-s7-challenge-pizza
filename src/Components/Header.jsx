import React from "react";
import styled from "styled-components";
import "../Css/Font.css";

const HeaderContainer = styled.div`
  background: #ce2829;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 207px;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  font-family: "Quattrocento";
  font-weight: bold;
  font-size: 40px;
`;

function Header() {
  return <HeaderContainer>Teknolojik Yemekler</HeaderContainer>;
}

export default Header;
