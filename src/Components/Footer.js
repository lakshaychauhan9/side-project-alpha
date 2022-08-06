import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="left">Source code link</div>
      <div className="right">developers contact link link</div>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  div {
    margin-inline: 100px;
    &.left {
      border-left: 2px solid red;
      border-top: 2px solid red;
    }
    &.right {
      border-right: 2px solid red;
      border-bottom: 2px solid red;
    }
  }
`;
