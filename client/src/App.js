import React, { useState, createContext } from "react";
import './App.css';
import Grid from "./components/Grid/Grid.js"
export const UserContext = createContext();

function App() {
  const [Word,setWord] = useState(0)
  const [WordLetter,setWordLetter] = useState(0) 
  const [submited,setSubmited] = useState(false) 
  const values = {submited,Word}
  const [Words,setWords] = useState([ ["","","","",""],
                                      ["","","","",""],
                                      ["","","","",""],
                                      ["","","","",""],
                                      ["","","","",""],
                                      ["","","","",""]]) 
  const abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "←", "k", "l", "m", "n", "o", "p", "q", "r", "s", "Enter" ,"t", "u", "v", "w", "x", "y", "z","j"]

  function keyBoard(){
    return abc.map((Letter)=>{
      return(
        <div className="GridBox" onClick={()=>{
          if(Letter === "←"){
            setWords((prev)=>{
              prev[Word][WordLetter-1] = ""
              return prev
            })
            setWordLetter((prev)=> prev - 1)
          }    
          else if(WordLetter<5 && Letter != "Enter"){ 
            setWordLetter((prev)=>prev+1)
            setWords((prev)=>{
              prev[Word][WordLetter] = Letter
              return prev
            })
          }
          else if(Letter === "Enter" && WordLetter === 5){
            setWord((prev)=>prev+1)
            setWordLetter(0)
            setSubmited(true)
          }
        }}>
        <p style={{margin:"auto"}}>{Letter}</p>
       </div>        
      )
    })
  }


  return (
    <UserContext.Provider value={values}>
    <div className="App">
      <header>
        <h1 style={{textAlign:"center",fontSize:"80px",margin:"5px"}}>Wordle</h1>
      <div className="GridRow">
          <Grid words={Words}/>
      </div>

      <div className="KeyGrid">
      {keyBoard()}
      </div>

      </header>
    </div>
    </UserContext.Provider>
  );
}

export default App;
