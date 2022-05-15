import React, { useContext } from "react";
import {UserContext} from "/Users/admin/Desktop/Wordle/client/src/App.js"
import './GridBox.css';

function GridBox(props){
   const user = useContext(UserContext);
    return(
      <div className="GridBox" style={{backgroundColor: user.submited&&props.row<=user.Word-1?props.Status:"white"}}>
        <p style={{margin:"auto"}}>{props.Letter}</p>
      </div>
    )
  }
export default GridBox