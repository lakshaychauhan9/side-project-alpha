import React from "react";
import styled from "styled-components";

const PageTabs = ({ setTabsIndex, tabsIndex }) => {
  const handleClick = (index) => {
    setTabsIndex(index);
  };

  return (
    <>
      <MainContainer>
        <StyledSpan
          className={tabsIndex === 1 ? "selectebTab" : ""}
          onClick={() => handleClick(1)}
        >
          MaterialUi
        </StyledSpan>

        <StyledSpan
          className={tabsIndex === 2 ? "selectebTab" : ""}
          onClick={() => handleClick(2)}
        >
          Bootstrap
        </StyledSpan>
        <StyledSpan
          className={tabsIndex === 3 ? "selectebTab" : ""}
          onClick={() => handleClick(3)}
        >
          Mui + Styled Components full code
        </StyledSpan>
      </MainContainer>
    </>
  );
};

export default PageTabs;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-block: 10px 30px;
  transition: all ease-in-out 250ms;
`;

const StyledSpan = styled.span`
  font-size: 21px;
  font-weight: 600;
  position: relative;
  cursor: pointer;
  margin: 10px 30px 10px 30px;
  color: #373737;
  &.selectebTab {
    color: #111;

    &::after {
      content: "";
      background: #ccc;
      display: block;
      width: 105%;
      height: 5px;
      position: absolute;
      left: 50%;
      top: 138.5%;
      transform: translate(-50%, -100%);
      z-index: 1;
    }
  }
  &:hover {
    color: #111;
  }
`;
