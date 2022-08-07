import React from "react";
import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";
import { FiLink } from "react-icons/fi";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="left">
        <span>
          Source code :{" "}
          <a
            href="https://github.com/lakshaychauhan9/side-project-alpha"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub fontSize={24} />{" "}
          </a>
        </span>
      </div>
      <div className="right">
        <span>
          Developer's Contact :
          <a
            href="https://www.linkedin.com/in/lakshay-chauhan-1b338917a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLinkedin fontSize={24} />
          </a>{" "}
          <a
            href="https://twitter.com/Lakshaychauhan0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiTwitter />
          </a>
          <FiLink />
        </span>
      </div>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  margin-block: 50px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  div {
    margin-inline: 100px;
    padding: 5px;
    span {
      font-weight: 600;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      text-align: center;
      color: #444;

      a {
        text-decoration: none;
        color: #555;
        margin-left: 15px;
        &:hover {
          color: #111;
        }
      }
    }
    &.left {
      border-left: 5px solid #222;
      border-top: 5px solid #999;
    }
    &.right {
      border-right: 5px solid #999;
      border-bottom: 5px solid #222;
    }
  }
`;
