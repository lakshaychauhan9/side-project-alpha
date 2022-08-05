import React from "react";
import styled from "styled-components";
// import { useRouteMatch, useHistory } from "react-router-dom";

const PageTabs = ({ setTabsIndex }) => {
  //   let { url } = useRouteMatch();
  //   const history = useHistory();

  const handleClick = (index) => {
    setTabsIndex(index);
    // if (index !== tabsIndex) {
    //     switch (index) {
    //       case 1:
    //         history.push(`${url}`);
    //         break;
    //       case 2:
    //         history.push(`${url}/posts`);
    //         break;
    //       default:
    //         break;
    //     }
    // } else return;
  };

  return (
    <>
      <MainContainer>
        <StyledSpan
          //   className={tabsIndex === 1 ? "selectebTab" : ""}
          onClick={() => handleClick(1)}
        >
          MaterialUi
        </StyledSpan>

        <StyledSpan
          //   className={tabsIndex === 2 ? "selectebTab" : ""}
          onClick={() => handleClick(2)}
        >
          Bootstrap
        </StyledSpan>
      </MainContainer>
      {/* <div style={{ width: "50%", background: "#001e02" }}>
        {tabsIndex === 1 ? <>{muiOP}</> : "Bootstrap"}
      </div> */}
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
  /* border-bottom: 1px solid ${(props) => props.theme.PRIMARY_BORDER_COLOR}; */

  transition: all ease-in-out 250ms;
`;

const StyledSpan = styled.span`
  font-size: 21px;
  font-weight: 600;
  position: relative;
  cursor: pointer;
  margin: 10px 30px 10px 30px;
  /* color: ${(props) => props.theme.CREATOR_PAGE_TABS_COLOR}; */
  color: red;
  &.selectebTab {
    /* color: ${(props) => props.theme.CREATOR_PAGE_TABS_COLOR_SELECTED}; */
    color: green;

    &::after {
      content: "";
      /* background: ${(props) =>
        props.theme.CREATOR_PAGE_TABS_COLOR_SELECTED}; */
      background: yellow;
      display: block;
      width: 175%;
      height: 4px;
      position: absolute;
      left: 50%;
      top: 138.5%;
      transform: translate(-50%, -100%);
      border-top-left-radius: 5.5% 100%;
      border-top-right-radius: 5.5% 100%;
      z-index: 1;
    }
  }
  &:hover {
    /* color: ${(props) => props.theme.CREATOR_PAGE_TABS_COLOR_SELECTED}; */
    color: purple;
  }
`;
