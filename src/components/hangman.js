import React, { useState, useEffect } from "react";
import hanger from "../images/hanger.jpg";
import five from "../images/1.jpg";
import four from "../images/2.jpg";
import three from "../images/3.jpg";
import two from "../images/4.jpg";
import one from "../images/5.jpg";
import zero from "../images/6.jpg";
import "../App.css";
import { randomWord } from "../words.js";
import Button from "./button";

const Hangman = () => {
  
  const guessWord = () => answer.map((letter) => isDisabled.includes(letter) ? `${letter} ` : "_ ");

  const printAnswer = () => answer.map((letter) => `${letter }`);

  const wordCompleted = () => answer.every(letter => isDisabled.includes(letter));

  const [guessCount, setGuessCount] = useState(6);
  const [isDisabled, setDisable] = useState([]);
  const [answer, setAnswer] = useState(randomWord().split(""));
  const alfabet = "abcdefghijklmnopqrstuvwxyzåäö";

  const onDisable = (e) => {
    const tempArray = [e.target.innerText];
    const finalArray = isDisabled.concat(tempArray);

    if(!answer.includes(e.target.innerText)){
      setGuessCount(guessCount -1);
    }

    setDisable(finalArray);
  };

  const generateButtons = () =>{
    return alfabet.split("").map((elem) => (
    <Button
      key={elem}
      className="buttons"
      onClick={(e) => onDisable(e)}
      text={elem}
      disabled={isDisabled.includes(elem)}
    />
  ))
    }

  useEffect(() => {
    setDisable(isDisabled);
  }, [isDisabled]);

  const onReset = () => {
    setDisable([]);
    setAnswer(randomWord().split(""));
    setGuessCount(6);
  };

  const switchImage = () => {
    switch(guessCount){
      case 0: return zero;
      case 1: return one;
      case 2: return two;
      case 3: return three;
      case 4: return four;
      case 5: return five;
      default: return hanger;
    }
  }

  return (
    <div>
      <h1>Hänga gubbe</h1>
      <p>Spelet går ut på att gissa ord som datorn valt ut slumpmässigt</p>
      <img src={switchImage()} alt="" className="App-logo"></img>
      <p id="lines">{guessCount > 0 ? guessWord() : printAnswer()}</p>
      <p>Antal gissningar kvar: {guessCount}</p>
      {guessCount === 0 && <div><p>Du har förlorat</p><Button onClick={onReset} text="Starta om" className="buttons" /></div>}
      {(guessCount > 0 && wordCompleted()) && <div><p>Grattis! Du har gissat korrekt!</p><Button onClick={onReset} text="Starta om" className="buttons" /></div>}
      <div>
        {generateButtons()}
      </div>
      <Button onClick={onReset} text="Återställ" className="buttons" />
    </div>
  );
};

export default Hangman;
