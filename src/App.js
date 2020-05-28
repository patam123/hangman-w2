import React from "react";
import hanger from "./images/hanger.jpg";
import "./App.css";
import {randomWord} from "./words.js";

const word = (x) => {
  let lines = "";
  for (let i = 0; i < x.length; i++) {
    lines += "_ ";
  }
  return lines;
};


const alfabet = "abcdefghijklmnopqrstuvwxyzåäö";

let buttons = alfabet.split("").map((elem) => (
  <button
    key={elem}
    className="buttons"
    onClick={(e) => onDisable(e)}
  >
    {elem}
  </button>
));
console.log(buttons);
console.log("Hello");

const onDisable = (e) => {
  e.target.className = "clicked-btn";
  e.target.disabled = true;
}

const onReset = () => {
  let disabledButtons = document.getElementsByClassName("clicked-btn");
  while(disabledButtons.length > 0) {
    disabledButtons[0].disabled = false;
    disabledButtons[0].className = "buttons";
  }
  document.getElementById("lines").innerText =  word(randomWord());
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hänga gubbe</h1>
        <p>Spelet går ut på att gissa ord som datorn valt ut slumpmässigt</p>
        <img src={hanger} alt="" className="App-logo"></img>
        <p id="lines">{word(randomWord())}</p>
        <p>Antal gissningar: 0</p>
        <div className="button-container">{buttons}</div>
        <button onClick={onReset}>Återställ</button>
      </header>
    </div>
  );
}

export default App;
