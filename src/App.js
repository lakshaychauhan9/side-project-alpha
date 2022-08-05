import "./App.css";
import React, { useState } from "react";
import "./Components/RadioButtonStyle.css";
import { FaRegCheckCircle } from "react-icons/fa";
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
    DivA: 11,
    DivB: 5,
    DivC: 5,
    DivD: 5,
    DivE: 5,
  };

  const dataB5 = {
    DivA: 11,
    DivB: 3,
    DivC: 3,
    DivD: 3,
    DivE: 8,
  };

  const dataC5 = {
    DivA: 11,
    DivB: 5,
    DivC: 5,
    DivD: 8,
    DivE: 8,
  };

  const dataD5 = {
    DivA: 11,
    DivB: 11,
    DivC: 11,
    DivD: 11,
    DivE: 11,
  };

  // Layout values for Six Divs
  const dataA6 = {
    DivA: 11,
    DivB: 3,
    DivC: 3,
    DivD: 3,
    DivE: 5,
    DivF: 5,
  };

  const dataB6 = {
    DivA: 11,
    DivB: 5,
    DivC: 5,
    DivD: 5,
    DivE: 5,
    DivF: 5,
  };

  const dataC6 = {
    DivA: 11,
    DivB: 5,
    DivC: 5,
    DivD: 8,
    DivE: 8,
    DivF: 8,
  };

  const dataD6 = {
    DivA: 11,
    DivB: 11,
    DivC: 11,
    DivD: 11,
    DivE: 11,
    DivF: 11,
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
    <Grid container justifyContent="space-around" alignItems="center">`,
    `
        <Grid item xs={${extraSmallScreen.DivA}} sm={${smallScreen.DivA}} md={${mediumScreen.DivA}} lg={${largeScreen.DivA}}>`,

    ` 
            <div>ONE</div>`,
    ` 
        </Grid>`,
    ` 
        <Grid item xs={${extraSmallScreen.DivB}} sm={${smallScreen.DivB}} md={${mediumScreen.DivB}} lg={${largeScreen.DivB}}>`,

    ` 
            <div>TWO</div>`,
    ` 
        </Grid>`,
    ` 
        <Grid item xs={${extraSmallScreen.DivC}} sm={${smallScreen.DivC}} md={${mediumScreen.DivC}} lg={${largeScreen.DivC}}>`,
    ` 
            <div>THREE</div>`,
    ` 
        </Grid>`,
    ` 
        <Grid item xs={${extraSmallScreen.DivD}} sm={${smallScreen.DivD}} md={${mediumScreen.DivD}} lg={${largeScreen.DivD}}>`,
    ` 
            <div>FOUR</div>`,
    ` 
        </Grid>`,
    ` 
        <Grid item xs={${extraSmallScreen.DivE}} sm={${smallScreen.DivE}} md={${mediumScreen.DivE}} lg={${largeScreen.DivE}}>`,
    ` 
            <div>FIVE</div>`,
    `
        </Grid>`,
    `
    </Grid>`,
  ];

  const outputMUISixDivs = [
    `
    <Grid container justifyContent="space-around" alignItems="center" >`,
    `
        <Grid item xs={${extraSmallScreen.DivA}} sm={${smallScreen.DivA}} md={${mediumScreen.DivA}} lg={${largeScreen.DivA}}>`,

    ` 
            <div>ONE</div>`,
    ` 
        </Grid>`,
    ` 
        <Grid item xs={${extraSmallScreen.DivB}} sm={${smallScreen.DivB}} md={${mediumScreen.DivB}} lg={${largeScreen.DivB}}>`,

    ` 
            <div>TWO</div>`,
    ` 
        </Grid>`,
    ` 
        <Grid item xs={${extraSmallScreen.DivC}} sm={${smallScreen.DivC}} md={${mediumScreen.DivC}} lg={${largeScreen.DivC}}>`,
    ` 
            <div>THREE</div>`,
    ` 
        </Grid>`,
    ` 
        <Grid item xs={${extraSmallScreen.DivD}} sm={${smallScreen.DivD}} md={${mediumScreen.DivD}} lg={${largeScreen.DivD}}>`,
    ` 
            <div>FOUR</div>`,
    ` 
        </Grid>`,
    ` 
        <Grid item xs={${extraSmallScreen.DivE}} sm={${smallScreen.DivE}} md={${mediumScreen.DivE}} lg={${largeScreen.DivE}}>`,
    ` 
            <div>FIVE</div>`,
    `
        </Grid>`,
    ` 
        <Grid item xs={${extraSmallScreen.DivF}} sm={${smallScreen.DivF}} md={${mediumScreen.DivF}} lg={${largeScreen.DivF}}>`,
    ` 
            <div>SIX</div>`,
    ` 
        </Grid>`,
    `
    </Grid>`,
  ];

  const outputBootStrapFiveDivs = [
    `
    <div class="container">`,
    `
        <div class="row align-items-center justify-content-around">`,
    `
            <div class="col-xs-${extraSmallScreen.DivA} col-sm-${smallScreen.DivA} col-md-${mediumScreen.DivA} col-lg-${largeScreen.DivA}">`,
    ` 
                <div>ONE</div>`,
    ` 
            </div>`,
    `
            <div class="col-xs-${extraSmallScreen.DivB} col-sm-${smallScreen.DivB} col-md-${mediumScreen.DivB} col-lg-${largeScreen.DivB}">`,
    ` 
                <div>TWO</div>`,
    ` 
            </div>`,
    `
            <div class="col-xs-${extraSmallScreen.DivC} col-sm-${smallScreen.DivC} col-md-${mediumScreen.DivC} col-lg-${largeScreen.DivC}">`,
    ` 
                <div>THREE</div>`,
    ` 
            </div>`,
    `
            <div class="col-xs-${extraSmallScreen.DivD} col-sm-${smallScreen.DivD} col-md-${mediumScreen.DivD} col-lg-${largeScreen.DivD}">`,
    ` 
                <div>FOUR</div>`,
    ` 
            </div>`,
    `
            <div class="col-xs-${extraSmallScreen.DivE} col-sm-${smallScreen.DivE} col-md-${mediumScreen.DivE} col-lg-${largeScreen.DivE}">`,
    ` 
                <div>FIVE</div>`,
    ` 
            </div>`,
    `
        </div>`,
    `
    </div>`,
  ];

  const outputBootStrapSixDivs = [
    `
    <div class="container">`,
    `
        <div class="row align-items-center justify-content-around">`,
    `
            <div class="col-xs-${extraSmallScreen.DivA} col-sm-${smallScreen.DivA} col-md-${mediumScreen.DivA} col-lg-${largeScreen.DivA}">`,
    ` 
                <div>ONE</div>`,
    ` 
            </div>`,
    `
            <div class="col-xs-${extraSmallScreen.DivB} col-sm-${smallScreen.DivB} col-md-${mediumScreen.DivB} col-lg-${largeScreen.DivB}">`,
    ` 
                <div>TWO</div>`,
    ` 
            </div>`,
    `
            <div class="col-xs-${extraSmallScreen.DivC} col-sm-${smallScreen.DivC} col-md-${mediumScreen.DivC} col-lg-${largeScreen.DivC}">`,
    ` 
                <div>THREE</div>`,
    ` 
            </div>`,
    `
            <div class="col-xs-${extraSmallScreen.DivD} col-sm-${smallScreen.DivD} col-md-${mediumScreen.DivD} col-lg-${largeScreen.DivD}">`,
    ` 
                <div>FOUR</div>`,
    ` 
            </div>`,
    `
            <div class="col-xs-${extraSmallScreen.DivE} col-sm-${smallScreen.DivE} col-md-${mediumScreen.DivE} col-lg-${largeScreen.DivE}">`,
    ` 
                <div>FIVE</div>`,
    ` 
            </div>`,
    `
            <div class="col-xs-${extraSmallScreen.DivF} col-sm-${smallScreen.DivF} col-md-${mediumScreen.DivF} col-lg-${largeScreen.DivF}">`,
    ` 
                <div>SIX</div>`,
    ` 
            </div>`,
    `
        </div>`,
    `
    </div>`,
  ];

  return (
    <>
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
            ) : (
              "Select Output"
            )}
          </div>
        </>
      )}
    </>
  );
}

export default App;

const OutputDiv = styled.div`
  width: 80vw;
  height: auto;
  background-color: #001200;
  color: white;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 200px;
  padding: 0px 0px 25px 0px;
  p {
    margin: 0px;
    padding: 0px;
  }
`;
