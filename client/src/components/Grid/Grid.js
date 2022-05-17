import React, { useState } from "react";
import GridRow from "../GridRow/GridRow";
import "./Grid.css";

function Grid(props) {
  const GridWords = props.words
  return GridWords.map((word,index) => {
    return <GridRow key={index} word={word} row={index}/>
  });
}

export default Grid;
