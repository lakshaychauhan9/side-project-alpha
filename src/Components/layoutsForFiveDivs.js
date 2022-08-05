import React from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";

export const LayoutA5 = () => {
  return (
    <Square container justifyContent="space-around" alignItems="center">
      <Grid item xs={11}>
        <ShapeA style={{ backgroundColor: "green" }}>ONE</ShapeA>
      </Grid>
      <Grid item xs={5.5}>
        <ShapeA style={{ backgroundColor: "#150699" }}>TWO</ShapeA>
      </Grid>
      <Grid item xs={5.5}>
        <ShapeA style={{ backgroundColor: "#d1c51a" }}>THREE</ShapeA>
      </Grid>
      <Grid item xs={5.5}>
        <ShapeA style={{ backgroundColor: "#e24dbd" }}>FOUR</ShapeA>
      </Grid>
      <Grid item xs={5.5}>
        <ShapeA style={{ backgroundColor: "#cf7272" }}>FIVE</ShapeA>
      </Grid>
    </Square>
  );
};

export const LayoutB5 = () => {
  return (
    <Square container justifyContent="space-around" alignItems="center">
      <Grid item xs={11}>
        <ShapeA style={{ backgroundColor: "green" }}>ONE</ShapeA>
      </Grid>
      <Grid item xs={3}>
        <ShapeA style={{ backgroundColor: "#150699" }}>TWO</ShapeA>
      </Grid>
      <Grid item xs={3}>
        <ShapeA style={{ backgroundColor: "#d1c51a" }}>THREE</ShapeA>
      </Grid>
      <Grid item xs={3}>
        <ShapeA style={{ backgroundColor: "#e24dbd" }}>FOUR</ShapeA>
      </Grid>
      <Grid item xs={8}>
        <ShapeA style={{ backgroundColor: "#cf7272" }}>FIVE</ShapeA>
      </Grid>
    </Square>
  );
};

export const LayoutC5 = () => {
  return (
    <Square container justifyContent="space-around" alignItems="center">
      <Grid item xs={11}>
        <ShapeA style={{ backgroundColor: "green" }}>ONE</ShapeA>
      </Grid>
      <Grid item xs={5}>
        <ShapeA style={{ backgroundColor: "#150699" }}>TWO</ShapeA>
      </Grid>
      <Grid item xs={5}>
        <ShapeA style={{ backgroundColor: "#d1c51a" }}>THREE</ShapeA>
      </Grid>
      <Grid item xs={8}>
        <ShapeA style={{ backgroundColor: "#e24dbd" }}>FOUR</ShapeA>
      </Grid>
      <Grid item xs={8}>
        <ShapeA style={{ backgroundColor: "#cf7272" }}>FIVE</ShapeA>
      </Grid>
    </Square>
  );
};

export const LayoutD5 = () => {
  return (
    <Square container justifyContent="space-around" alignItems="center">
      <Grid item xs={11}>
        <ShapeA style={{ backgroundColor: "green" }}>ONE</ShapeA>
      </Grid>
      <Grid item xs={11}>
        <ShapeA style={{ backgroundColor: "#150699" }}>TWO</ShapeA>
      </Grid>
      <Grid item xs={11}>
        <ShapeA style={{ backgroundColor: "#d1c51a" }}>THREE</ShapeA>
      </Grid>
      <Grid item xs={11}>
        <ShapeA style={{ backgroundColor: "#e24dbd" }}>FOUR</ShapeA>
      </Grid>
      <Grid item xs={11}>
        <ShapeA style={{ backgroundColor: "#cf7272" }}>FIVE</ShapeA>
      </Grid>
    </Square>
  );
};

const Square = styled(Grid)`
  width: 200px !important;
  height: 180px !important;
  background-color: #171717;
`;

const ShapeA = styled.div`
  height: 25px;
  width: 100%;
  border: 1px solid #00ccff;
`;
