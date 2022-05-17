import React, { useState, createContext } from "react";
import './App.css';
import Grid from "./components/Grid/Grid.js"
export const UserContext = createContext();

function App() {
  const [Word,setWord] = useState(0)
  const [WordLetter,setWordLetter] = useState(0) 
  const [submited,setSubmited] = useState(false) 
  const contex = {submited,Word}
  const [Words,setWords] = useState([ ["","","","",""],
                                      ["","","","",""],
                                      ["","","","",""],
                                      ["","","","",""],
                                      ["","","","",""],
                                      ["","","","",""]])                                     
  const abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "←", "k", "l", "m", "n", "o", "p", "q", "r", "s", "Enter" ,"t", "u", "v", "w", "x", "y", "z","j"]
  function backspace(){
    setWords((prev)=>{  //updates "Words" matrix to delete the last letter from input
      prev[Word][WordLetter-1] = ""
      return prev
    })
    setWordLetter((prev)=> prev - 1) //update current pos of word letter
  }

  function enterLetter(letter){
    setWordLetter((prev)=>prev+1)  //update current pos of word letter
    setWords((prev)=>{  //updates "Words" matrix to add new letter from keyboard
      prev[Word][WordLetter] = letter
      return prev
    })
  }

  function enterWord(){
    setWord((prev)=>prev+1) //updates pos word for a new guess
    setWordLetter(0) //moves letter pos to beginning 
    setSubmited(true) //reveals colors in row 
  }

  function keyBoard(){
    return abc.map((Letter)=>{
      return(
        <div className="GridBox" key={Letter} onClick={()=>{
          if(Letter === "←"){
            backspace()
          }    
          else if(WordLetter<5 && Letter != "Enter"){ 
            enterLetter(Letter)
          }
          else if(Letter === "Enter" && WordLetter === 5){
            enterWord()
          }
        }}>
        <p style={{margin:"auto"}}>{Letter}</p>
       </div>        
      )
    })
  }


  return (
    <UserContext.Provider value={contex}> {/* gives Gridbox contex on the current row and submission status */}
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
