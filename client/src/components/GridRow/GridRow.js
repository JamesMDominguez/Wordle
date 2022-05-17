import React from "react";
import GridBox from "../GridBox/GridBox";
import './GridRow.css';


function GridRow(props){
    const solution = "react"
    const GridRow = props.word

    return GridRow.map((string,index)=>{
      let status = "#e3e1e1"  //gray
      if(solution.charAt(index)===string){ 
        status="#51853e" //green
      }
      for (let i = 0; i < solution.length; i++) {
        if(solution.charAt(i)===string && solution.charAt(index)!==string){
          status="#d0d188" //yellow
        }
      }
      return(<GridBox Letter={string} key={index} Status={status} row={props.row}/>)
    })
  }
  export default GridRow