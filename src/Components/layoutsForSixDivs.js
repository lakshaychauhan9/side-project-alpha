import React from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";

export const LayoutA6 = () => {
  return (
    <Square container justifyContent="space-around" alignItems="center">
      <Grid item xs={11}>
        <ShapeA className="one">div one</ShapeA>
      </Grid>
      <Grid item xs={3}>
        <ShapeA className="two">div two</ShapeA>
      </Grid>
      <Grid item xs={3}>
        <ShapeA className="three">div three</ShapeA>
      </Grid>
      <Grid item xs={3}>
        <ShapeA className="four">div four</ShapeA>
      </Grid>
      <Grid item xs={5}>
        <ShapeA className="five">div five</ShapeA>
      </Grid>
      <Grid item xs={5}>
        <ShapeA className="six">div six</ShapeA>
      </Grid>
    </Square>
  );
};

export const LayoutB6 = () => {
  return (
    <Square container justifyContent="space-around" alignItems="center">
      <Grid item xs={11}>
        <ShapeA className="one">div one</ShapeA>
      </Grid>
      <Grid item xs={5}>
        <ShapeA className="two">div two</ShapeA>
        {/*  */}
      </Grid>
      <Grid item xs={5}>
        <ShapeA className="three">div three</ShapeA>
        {/*  */}
      </Grid>
      <Grid item xs={5}>
        <ShapeA className="four">div four</ShapeA>
        {/*  */}
      </Grid>
      <Grid item xs={5}>
        <ShapeA className="five">div five</ShapeA>
        {/*  */}
      </Grid>
      <Grid item xs={5}>
        <ShapeA className="six">div six</ShapeA>
        {/*  */}
      </Grid>
    </Square>
  );
};

export const LayoutC6 = () => {
  return (
    <Square container justifyContent="space-around" alignItems="center">
      <Grid item xs={11}>
        <ShapeA className="one">div one</ShapeA>
      </Grid>
      <Grid item xs={5}>
        <ShapeA className="two">div two</ShapeA>
      </Grid>
      <Grid item xs={5}>
        <ShapeA className="three">div three</ShapeA>
      </Grid>
      <Grid item xs={8}>
        <ShapeA className="four">div four</ShapeA>
      </Grid>
      <Grid item xs={8}>
        <ShapeA className="five">div five</ShapeA>
      </Grid>
      <Grid item xs={8}>
        <ShapeA className="six">div six</ShapeA>
      </Grid>
    </Square>
  );
};

export const LayoutD6 = () => {
  return (
    <Square container justifyContent="space-around" alignItems="center">
      <Grid item xs={11}>
        <ShapeA className="one">div one</ShapeA>
      </Grid>
      <Grid item xs={11}>
        <ShapeA className="two">div two</ShapeA>
      </Grid>
      <Grid item xs={11}>
        <ShapeA className="three">div three</ShapeA>
      </Grid>
      <Grid item xs={11}>
        <ShapeA className="four">div four</ShapeA>
      </Grid>
      <Grid item xs={11}>
        <ShapeA className="five">div five</ShapeA>
      </Grid>
      <Grid item xs={11}>
        <ShapeA className="six">div six</ShapeA>
      </Grid>
    </Square>
  );
};

const Square = styled(Grid)`
  width: 200px !important;
  height: 225px !important;
  background-color: #171717;
`;

const ShapeA = styled.div`
  height: auto;
  width: 100%;
  border: 1px solid #00ccff;
  color: #eee;
  font-weight: 600;
  font-size: 16px;

  &.one {
    background-color: #492000;
  }
  &.two {
    background-color: #16004b;
  }
  &.three {
    background-color: #2f0037;
  }
  &.four {
    background-color: #640000;
  }
  &.five {
    background-color: #195c00;
  }
  &.six {
    background-color: #c44500;
  }
`;
