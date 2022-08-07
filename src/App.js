import React, { useState } from "react";
import "./Components/RadioButtonStyle.css";
import { FaRegCheckCircle } from "react-icons/fa";
// import { SiMaterialui, SiBootstrap, SiStyledcomponents } from "react-icons/si";
import styled from "styled-components";

import {
  LayoutA5,
  LayoutB5,
  LayoutC5,
  LayoutD5,
} from "./Components/layoutsForFiveDivs";

import {
  LayoutA6,
  LayoutB6,
  LayoutC6,
  LayoutD6,
} from "./Components/layoutsForSixDivs";
import PageTabs from "./Components/PageTabs";
import Footer from "./Components/Footer";

function App() {
  const [largeScreen, setLargeScreen] = useState({});
  const [mediumScreen, setMediumScreen] = useState({});
  const [smallScreen, setSmallScreen] = useState({});
  const [extraSmallScreen, setExtraSmallScreen] = useState({});

  const [currentData, setCurrentData] = useState([]);

  const [noOfDivs, setNoOfDivs] = useState(null);

  const [tabsIndex, setTabsIndex] = useState(0);

  //Grid item value for xs/sm/lg for respective divs , eg: For div A xs={11}, for div B xs={5}

  const dataA5 = {
    DivOne: 11,
    DivTwo: 5,
    DivThree: 5,
    DivFour: 5,
    DivFive: 5,
  };

  const dataB5 = {
    DivOne: 11,
    DivTwo: 3,
    DivThree: 3,
    DivFour: 3,
    DivFive: 8,
  };

  const dataC5 = {
    DivOne: 11,
    DivTwo: 5,
    DivThree: 5,
    DivFour: 8,
    DivFive: 8,
  };

  const dataD5 = {
    DivOne: 11,
    DivTwo: 11,
    DivThree: 11,
    DivFour: 11,
    DivFive: 11,
  };

  // Layout values for Six Divs
  const dataA6 = {
    DivOne: 11,
    DivTwo: 3,
    DivThree: 3,
    DivFour: 3,
    DivFive: 5,
    DivSix: 5,
  };

  const dataB6 = {
    DivOne: 11,
    DivTwo: 5,
    DivThree: 5,
    DivFour: 5,
    DivFive: 5,
    DivSix: 5,
  };

  const dataC6 = {
    DivOne: 11,
    DivTwo: 5,
    DivThree: 5,
    DivFour: 8,
    DivFive: 8,
    DivSix: 8,
  };

  const dataD6 = {
    DivOne: 11,
    DivTwo: 11,
    DivThree: 11,
    DivFour: 11,
    DivFive: 11,
    DivSix: 11,
  };

  const dataForFiveDivs = [
    {
      data: dataA5,
      component: <LayoutA5 />,
    },
    {
      data: dataB5,
      component: <LayoutB5 />,
    },
    {
      data: dataC5,
      component: <LayoutC5 />,
    },
    {
      data: dataD5,
      component: <LayoutD5 />,
    },
  ];

  const dataForSixDivs = [
    {
      data: dataA6,
      component: <LayoutA6 />,
    },
    {
      data: dataB6,
      component: <LayoutB6 />,
    },
    {
      data: dataC6,
      component: <LayoutC6 />,
    },
    {
      data: dataD6,
      component: <LayoutD6 />,
    },
  ];

  const outputMUIFiveDivs = `
<Grid container justifyContent="space-around" alignItems="center">
  <Grid item xs={${extraSmallScreen.DivOne}} sm={${smallScreen.DivOne}} md={${mediumScreen.DivOne}} lg={${largeScreen.DivOne}}>
    <div>ONE</div>
  </Grid>
  <Grid item xs={${extraSmallScreen.DivTwo}} sm={${smallScreen.DivTwo}} md={${mediumScreen.DivTwo}} lg={${largeScreen.DivTwo}}>
    <div>TWO</div>
  </Grid>
  <Grid item xs={${extraSmallScreen.DivThree}} sm={${smallScreen.DivThree}} md={${mediumScreen.DivThree}} lg={${largeScreen.DivThree}}>
    <div>THREE</div>
  </Grid>
  <Grid item xs={${extraSmallScreen.DivFour}} sm={${smallScreen.DivFour}} md={${mediumScreen.DivFour}} lg={${largeScreen.DivFour}}>
    <div>FOUR</div>
  </Grid>
  <Grid item xs={${extraSmallScreen.DivFive}} sm={${smallScreen.DivFive}} md={${mediumScreen.DivFive}} lg={${largeScreen.DivFive}}>
    <div>FIVE</div>
  </Grid>
</Grid>
    `;
  const outputMUISixDivs = `
<Grid container justifyContent="space-around" alignItems="center">
  <Grid item xs={${extraSmallScreen.DivOne}} sm={${smallScreen.DivOne}} md={${mediumScreen.DivOne}} lg={${largeScreen.DivOne}}>
    <div>ONE</div>
  </Grid>
  <Grid item xs={${extraSmallScreen.DivTwo}} sm={${smallScreen.DivTwo}} md={${mediumScreen.DivTwo}} lg={${largeScreen.DivTwo}}>
    <div>TWO</div>
  </Grid>
  <Grid item xs={${extraSmallScreen.DivThree}} sm={${smallScreen.DivThree}} md={${mediumScreen.DivThree}} lg={${largeScreen.DivThree}}>
    <div>THREE</div>
  </Grid>
  <Grid item xs={${extraSmallScreen.DivFour}} sm={${smallScreen.DivFour}} md={${mediumScreen.DivFour}} lg={${largeScreen.DivFour}}>
    <div>FOUR</div>
  </Grid>
  <Grid item xs={${extraSmallScreen.DivFive}} sm={${smallScreen.DivFive}} md={${mediumScreen.DivFive}} lg={${largeScreen.DivFive}}>
    <div>FIVE</div>
  </Grid>
  <Grid item xs={${extraSmallScreen.DivSix}} sm={${smallScreen.DivSix}} md={${mediumScreen.DivSix}} lg={${largeScreen.DivSix}}>
    <div>SIX</div>
  </Grid>
</Grid>
    `;

  const outputBootStrapFiveDivs = `
<div class="container">
  <div class="row align-items-center justify-content-around">
    <div class="col-xs-${extraSmallScreen.DivOne} col-sm-${smallScreen.DivOne} col-md-${mediumScreen.DivOne} col-lg-${largeScreen.DivOne}">
      <div>ONE</div>
    </div>
    <div class="col-xs-${extraSmallScreen.DivTwo} col-sm-${smallScreen.DivTwo} col-md-${mediumScreen.DivTwo} col-lg-${largeScreen.DivTwo}">
      <div>TWO</div>
    </div>
    <div class="col-xs-${extraSmallScreen.DivThree} col-sm-${smallScreen.DivThree} col-md-${mediumScreen.DivThree} col-lg-${largeScreen.DivThree}">
      <div>THREE</div>
    </div>
    <div class="col-xs-${extraSmallScreen.DivFour} col-sm-${smallScreen.DivFour} col-md-${mediumScreen.DivFour} col-lg-${largeScreen.DivFour}">
      <div>FOUR</div>
    </div>
    <div class="col-xs-${extraSmallScreen.DivFive} col-sm-${smallScreen.DivFive} col-md-${mediumScreen.DivFive} col-lg-${largeScreen.DivFive}">
      <div>FIVE</div>
    </div>
  </div>
</div>
  `;

  const outputBootStrapSixDivs = `
<div class="container">
  <div class="row align-items-center justify-content-around">
    <div class="col-xs-${extraSmallScreen.DivOne} col-sm-${smallScreen.DivOne} col-md-${mediumScreen.DivOne} col-lg-${largeScreen.DivOne}">
      <div>ONE</div>
    </div>
    <div class="col-xs-${extraSmallScreen.DivTwo} col-sm-${smallScreen.DivTwo} col-md-${mediumScreen.DivTwo} col-lg-${largeScreen.DivTwo}">
      <div>TWO</div>
    </div>
    <div class="col-xs-${extraSmallScreen.DivThree} col-sm-${smallScreen.DivThree} col-md-${mediumScreen.DivThree} col-lg-${largeScreen.DivThree}">
      <div>THREE</div>
    </div>
    <div class="col-xs-${extraSmallScreen.DivFour} col-sm-${smallScreen.DivFour} col-md-${mediumScreen.DivFour} col-lg-${largeScreen.DivFour}">
      <div>FOUR</div>
    </div>
    <div class="col-xs-${extraSmallScreen.DivFive} col-sm-${smallScreen.DivFive} col-md-${mediumScreen.DivFive} col-lg-${largeScreen.DivFive}">
      <div>FIVE</div>
    </div>
    <div class="col-xs-${extraSmallScreen.DivSix} col-sm-${smallScreen.DivSix} col-md-${mediumScreen.DivSix} col-lg-${largeScreen.DivSix}">
      <div>SIX</div>
    </div>
  </div>
</div>
  `;

  // To use your own custom String for five divs ::

  const myOutputForFiveDivs = `
// dependencies  --->  npm i @mui/material styled-components
// style injection dependencies : npm i @emotion/styled @emotion/react  @mui/styled-engine-sc

import React from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";

const ComponentName = () => {
  return (
    <MainContainer>
      <Grid container justifyContent="space-around" alignItems="center">
        <Grid item xs={${extraSmallScreen.DivOne}} sm={${smallScreen.DivOne}} md={${mediumScreen.DivOne}} lg={${largeScreen.DivOne}}>
          <div className="container-box">ONE</div>
        </Grid>
        <Grid item xs={${extraSmallScreen.DivTwo}} sm={${smallScreen.DivTwo}} md={${mediumScreen.DivTwo}} lg={${largeScreen.DivTwo}}>
          <div className="container-box">TWO</div>
        </Grid>
        <Grid item xs={${extraSmallScreen.DivThree}} sm={${smallScreen.DivThree}} md={${mediumScreen.DivThree}} lg={${largeScreen.DivThree}}>
          <div className="container-box">THREE</div>
        </Grid>
        <Grid item xs={${extraSmallScreen.DivFour}} sm={${smallScreen.DivFour}} md={${mediumScreen.DivFour}} lg={${largeScreen.DivFour}}>
          <div className="container-box">FOUR</div>
        </Grid>
        <Grid item xs={${extraSmallScreen.DivFive}} sm={${smallScreen.DivFive}} md={${mediumScreen.DivFive}} lg={${largeScreen.DivFive}}>
          <div className="container-box">FIVE</div>
        </Grid>
      </Grid>
    </MainContainer>
  );
};

export default ComponentName;

const MainContainer = styled.div\`
  width: 100%;
  height: auto;

  div {
    &.container-box {
      width: 100%;
      height: 100px;
      background: #ffacac;
      margin: 5px;
    }
  }
\`;
  `;

  // To use your own custom String for six divs ::

  const myOutputForSixDivs = `
// dependencies  --->  npm i @mui/material styled-components
// style injection dependencies : npm i @emotion/styled @emotion/react  @mui/styled-engine-sc

import React from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";

const ComponentName = () => {
  return (
    <MainContainer>
      <Grid container justifyContent="space-around" alignItems="center">
        <Grid item xs={${extraSmallScreen.DivOne}} sm={${smallScreen.DivOne}} md={${mediumScreen.DivOne}} lg={${largeScreen.DivOne}}>
          <div className="container-box">ONE</div>
        </Grid>
        <Grid item xs={${extraSmallScreen.DivTwo}} sm={${smallScreen.DivTwo}} md={${mediumScreen.DivTwo}} lg={${largeScreen.DivTwo}}>
          <div className="container-box">TWO</div>
        </Grid>
        <Grid item xs={${extraSmallScreen.DivThree}} sm={${smallScreen.DivThree}} md={${mediumScreen.DivThree}} lg={${largeScreen.DivThree}}>
          <div className="container-box">THREE</div>
        </Grid>
        <Grid item xs={${extraSmallScreen.DivFour}} sm={${smallScreen.DivFour}} md={${mediumScreen.DivFour}} lg={${largeScreen.DivFour}}>
          <div className="container-box">FOUR</div>
        </Grid>
        <Grid item xs={${extraSmallScreen.DivFive}} sm={${smallScreen.DivFive}} md={${mediumScreen.DivFive}} lg={${largeScreen.DivFive}}>
          <div className="container-box">FIVE</div>
        </Grid>
        <Grid item xs={${extraSmallScreen.DivSix}} sm={${smallScreen.DivSix}} md={${mediumScreen.DivSix}} lg={${largeScreen.DivSix}}>
          <div className="container-box">SIX</div>
        </Grid>
      </Grid>
    </MainContainer>
  );
};

export default ComponentName;

const MainContainer = styled.div\`
  width: 100%;
  height: auto;

  div {
    &.container-box {
      width: 100%;
      height: 100px;
      background: #ffacac;
      margin: 5px;
    }
  }
\`;
  `;

  // main return function

  return (
    <MainContainer>
      <h1>
        Generate boiler plate code for responsive grid layouts -> MaterialUI
        Grid or Bootstrap
      </h1>
      <div className="main-container">
        <h2>Select no. of Divs or Containers</h2>
        <div className="btn-input-divs">
          <label className="custom-radio">
            <input
              type="radio"
              name="numberOfDiv"
              onClick={() => {
                setCurrentData(dataForFiveDivs);
                setNoOfDivs(5);
              }}
            />
            <span className="radio-btn btn-input-divs">
              <FaRegCheckCircle className="icon-custom" />
              <div className="hobbies-icon">5</div>
            </span>
          </label>
          <label className="custom-radio">
            <input
              type="radio"
              name="numberOfDiv"
              onClick={() => {
                setCurrentData(dataForSixDivs);
                setNoOfDivs(6);
              }}
            />
            <span className="radio-btn ">
              <FaRegCheckCircle className="icon-custom" />
              <div className="hobbies-icon">6</div>
            </span>
          </label>
        </div>
      </div>

      {currentData.length > 2 && (
        <>
          <div className="main-container">
            <h2>Select Layout for Large Screens</h2>
            <p>Screen width > 1024px desktops, laptops</p>

            <div className="radio-buttons">
              {currentData.map((item, index) => (
                <React.Fragment key={index}>
                  <label className="custom-radio">
                    <input
                      type="radio"
                      name="largeScreen"
                      onClick={() => setLargeScreen(item.data)}
                    />
                    <span className="radio-btn">
                      <FaRegCheckCircle className="icon-custom" />
                      <div className="hobbies-icon">{item.component}</div>
                    </span>
                  </label>
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="main-container">
            <h2>Select Layout for Medium Screens</h2>
            <p>Screen width > 1024px eg: desktops, laptops</p>

            <div className="radio-buttons">
              {currentData.map((item, index) => (
                <React.Fragment key={index}>
                  <label className="custom-radio">
                    <input
                      type="radio"
                      name="mediumScreen"
                      onClick={() => setMediumScreen(item.data)}
                    />
                    <span className="radio-btn">
                      <FaRegCheckCircle className="icon-custom" />
                      <div className="hobbies-icon">{item.component}</div>
                    </span>
                  </label>
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="main-container">
            <h2>Select Layout for Small Screens</h2>
            <p>Screen width > 1024px desktops, laptops</p>

            <div className="radio-buttons">
              {currentData.map((item, index) => (
                <React.Fragment key={index}>
                  <label className="custom-radio">
                    <input
                      type="radio"
                      name="smallScreen"
                      onClick={() => setSmallScreen(item.data)}
                    />
                    <span className="radio-btn">
                      <FaRegCheckCircle className="icon-custom" />
                      <div className="hobbies-icon">{item.component}</div>
                    </span>
                  </label>
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="main-container">
            <h2>Select Layout for Extra Small Screens</h2>
            <p>Screen width > 1024px desktops, laptops</p>

            <div className="radio-buttons">
              {currentData.map((item, index) => (
                <React.Fragment key={index}>
                  <label className="custom-radio">
                    <input
                      type="radio"
                      name="extraSmallScreen"
                      onClick={() => setExtraSmallScreen(item.data)}
                    />
                    <span className="radio-btn">
                      <FaRegCheckCircle className="icon-custom" />
                      <div className="hobbies-icon">{item.component}</div>
                    </span>
                  </label>
                </React.Fragment>
              ))}
            </div>
          </div>
        </>
      )}

      {noOfDivs > 0 && (
        <>
          <PageTabs setTabsIndex={setTabsIndex} />
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {tabsIndex === 1 && noOfDivs === 5 ? (
              <pre>
                <code>
                  <OutputDiv>{outputMUIFiveDivs}</OutputDiv>
                </code>
              </pre>
            ) : tabsIndex === 1 && noOfDivs === 6 ? (
              <pre>
                <code>
                  <OutputDiv>{outputMUISixDivs}</OutputDiv>
                </code>
              </pre>
            ) : tabsIndex === 2 && noOfDivs === 5 ? (
              <pre>
                <code>
                  <OutputDiv>{outputBootStrapFiveDivs}</OutputDiv>
                </code>
              </pre>
            ) : tabsIndex === 2 && noOfDivs === 6 ? (
              <pre>
                <code>
                  <OutputDiv>{outputBootStrapSixDivs}</OutputDiv>
                </code>
              </pre>
            ) : tabsIndex === 3 && noOfDivs === 5 ? (
              <pre>
                <code>
                  <OutputDiv>{myOutputForFiveDivs}</OutputDiv>
                </code>
              </pre>
            ) : tabsIndex === 3 && noOfDivs === 6 ? (
              <pre>
                <code>
                  <OutputDiv>{myOutputForSixDivs}</OutputDiv>
                </code>
              </pre>
            ) : (
              "Select Output"
            )}
          </div>
        </>
      )}
      <p>
        *this is only boiler plate code for content justified space-around and
        items align centered. Please note you will still need to style height,
        margin padding etc for inner divs as well
      </p>
      <Footer />
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #fcfcfc;
  margin: 0px;
  box-sizing: border-box;
  & > h1 {
    text-align: center;
    font-family: "Raleway", sans-serif;
    margin: 100px 200px;
    font-size: 40px;
    text-shadow: 2px 2px 2px #ff7dc7;
  }
  & > p {
    text-align: center;

    margin: 25px 250px;
  }
`;

const OutputDiv = styled.div`
  width: 70vw;
  height: auto;
  box-sizing: border-box;
  background-color: #000d00;
  color: #f0f0f0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 50px;
  padding: 10px;
  border-radius: 10px;
  border: 2px solid #eee;
  box-shadow: 0px 0px 25px 5px #272727;
  p {
    margin: 0px;
    padding: 0px;
  }
`;
