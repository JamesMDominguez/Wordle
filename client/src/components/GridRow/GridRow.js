import React, { useState } from "react";
import GridBox from "../GridBox/GridBox";
import './GridRow.css';


function GridRow(props){
    const solution = "react"

    const GridRow = props.word
    return GridRow.map((string,index)=>{
      let status = "#e3e1e1"
      if(solution.charAt(index)===string){
        status="#51853e"
      }
      for (let i = 0; i < solution.length; i++) {
        if(solution.charAt(i)===string && solution.charAt(index)!==string){
          status="#d0d188"
        }
      }
      return(<GridBox Letter={string} Status={status} row={props.row}/>)
    })
  }
  export default GridRow