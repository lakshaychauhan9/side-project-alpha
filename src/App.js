import "./App.css";
import React, { useState } from "react";
import "./Components/RadioButtonStyle.css";
import { FaRegCheckCircle } from "react-icons/fa";

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

function App() {
  const [largeScreen, setLargeScreen] = useState({});
  const [mediumScreen, setMediumScreen] = useState({});
  const [smallScreen, setSmallScreen] = useState({});
  const [extraSmallScreen, setExtraSmallScreen] = useState({});

  const [currentData, setCurrentData] = useState([]);
  const [currentOutput, setCurrentOutput] = useState([]);

  const dataA5 = {
    DivA: 11,
    DivB: 5,
    DivC: 5,
    DivD: 5,
    DivE: 5,
  };

  const dataB5 = {
    DivA: 11,
    DivB: 11,
    DivC: 11,
    DivD: 11,
    DivE: 11,
  };
  const dataC5 = {
    DivA: 11,
    DivB: 3,
    DivC: 3,
    DivD: 3,
    DivE: 11,
  };

  const dataD5 = {
    DivA: 11,
    DivB: 5,
    DivC: 5,
    DivD: 8,
    DivE: 8,
  };

  const dataA6 = {
    DivA: 11,
    DivB: 5,
    DivC: 5,
    DivD: 5,
    DivE: 5,
    DivF: 7,
  };

  const dataB6 = {
    DivA: 11,
    DivB: 11,
    DivC: 11,
    DivD: 11,
    DivE: 11,
    DivF: 11,
  };

  const dataC6 = {
    DivA: 11,
    DivB: 3,
    DivC: 3,
    DivD: 3,
    DivE: 11,
    DivF: 8,
  };

  const dataD6 = {
    DivA: 11,
    DivB: 5,
    DivC: 5,
    DivD: 8,
    DivE: 8,
    DivF: 5,
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

  const outputMUIFiveDivs = [
    `
            <Grid item xs={${extraSmallScreen.DivA}} sm={${smallScreen.DivA}} md={${mediumScreen.DivA}} lg={${largeScreen.DivA}}>`,

    <br />,
    ` 
          <Div A/>`,
    <br />,
    ` 
      </Grid>`,
    <br />,
    ` 
            <Grid item xs={${extraSmallScreen.DivB}} sm={${smallScreen.DivB}} md={${mediumScreen.DivB}} lg={${largeScreen.DivB}}>`,

    <br />,
    ` 
        <Div B />`,
    <br />,
    ` 
      </Grid>`,
    <br />,
    ` 
            <Grid item xs={${extraSmallScreen.DivC}} sm={${smallScreen.DivC}} md={${mediumScreen.DivC}} lg={${largeScreen.DivC}}>`,
    <br />,
    ` 
        <Div C/>`,
    <br />,
    ` 
      </Grid>`,
    <br />,
    ` 
            <Grid item xs={${extraSmallScreen.DivD}} sm={${smallScreen.DivD}} md={${mediumScreen.DivD}} lg={${largeScreen.DivD}}>`,
    <br />,
    ` 
        <Div D/>`,
    <br />,
    ` 
      </Grid>`,
    <br />,
    ` 
      <Grid item xs={${extraSmallScreen.DivE}} sm={${smallScreen.DivE}} md={${mediumScreen.DivE}} lg={${largeScreen.DivE}}>`,
    <br />,
    ` 
        <Div E/>`,
    <br />,
    ` 
      </Grid>`,
    <br />,
    ` 
      
      `,
  ];

  const outputMUISixDivs = [
    `
            <Grid item xs={${extraSmallScreen.DivA}} sm={${smallScreen.DivA}} md={${mediumScreen.DivA}} lg={${largeScreen.DivA}}>`,

    <br />,
    ` 
          <Div A/>`,
    <br />,
    ` 
      </Grid>`,
    <br />,
    ` 
            <Grid item xs={${extraSmallScreen.DivB}} sm={${smallScreen.DivB}} md={${mediumScreen.DivB}} lg={${largeScreen.DivB}}>`,

    <br />,
    ` 
        <Div B />`,
    <br />,
    ` 
      </Grid>`,
    <br />,
    ` 
            <Grid item xs={${extraSmallScreen.DivC}} sm={${smallScreen.DivC}} md={${mediumScreen.DivC}} lg={${largeScreen.DivC}}>`,
    <br />,
    ` 
        <Div C/>`,
    <br />,
    ` 
      </Grid>`,
    <br />,
    ` 
            <Grid item xs={${extraSmallScreen.DivD}} sm={${smallScreen.DivD}} md={${mediumScreen.DivD}} lg={${largeScreen.DivD}}>`,
    <br />,
    ` 
        <Div D/>`,
    <br />,
    ` 
      </Grid>`,
    <br />,
    ` 
      <Grid item xs={${extraSmallScreen.DivE}} sm={${smallScreen.DivE}} md={${mediumScreen.DivE}} lg={${largeScreen.DivE}}>`,
    <br />,
    ` 
        <Div E/>`,
    <br />,
    ` 
      </Grid>`,
    <br />,
    ` 
      <Grid item xs={${extraSmallScreen.DivF}} sm={${smallScreen.DivF}} md={${mediumScreen.DivF}} lg={${largeScreen.DivF}}>`,
    <br />,
    ` 
        <Div F/>`,
    <br />,
    ` 
      </Grid>`,
    <br />,
    ` 
      
      `,
  ];

  return (
    <>
      <div className="main-container">
        <h2>Select no. of Divs or Containers</h2>
        <div className="radio-buttons">
          <label className="custom-radio">
            <input
              type="radio"
              name="numberOfDiv"
              onClick={() => {
                setCurrentData(dataForFiveDivs);
                setCurrentOutput(outputMUIFiveDivs);
              }}
            />
            <span className="radio-btn">
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
                setCurrentOutput(outputMUISixDivs);
              }}
            />
            <span className="radio-btn">
              <FaRegCheckCircle className="icon-custom" />
              <div className="hobbies-icon">6</div>
            </span>
          </label>
        </div>
      </div>

      {currentData.length > 2 ? (
        <>
          <div className="main-container">
            <h2>Select Layout for Large Screens</h2>
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
      ) : (
        <>Select Div</>
      )}
      <h2 style={{ margin: "100px", textAlign: "center" }}>{currentOutput}</h2>
    </>
  );
}

export default App;
