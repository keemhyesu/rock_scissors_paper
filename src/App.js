import React, { useState } from "react";
import "./App.css";
import Box from "./component/Box";
import { FaRegHandScissors } from "react-icons/fa";
import { FaRegHandRock } from "react-icons/fa";
import { FaRegHandPaper } from "react-icons/fa";

const choice = {
  rock: {
    name: "Rock",
    img: "./images/바위이미지.jpg",
  },

  scissors: {
    name: "Scissors",
    img: "./images/가위이미지.png",
  },

  paper: {
    name: "Paper",
    img: "./images/보 이미지.jpg",
  },
};

const App = () => {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [userResult, setUserResult] = useState("");
  const [computerResult, setComputerResult] = useState("");

  const play = (userChoice) => {
    console.log("찍힘?", userChoice);
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setUserResult(judgement(choice[userChoice], computerChoice));
    setComputerResult(judgement(computerChoice, choice[userChoice]));
  };

  const judgement = (user, computer) => {
    if (user.name == computer.name) {
      return "Tie";
    } else if (user.name == "Scissors")
      return computer.name == "Paper" ? "Win" : "Lose";
    else if (user.name == "Rock")
      return computer.name == "Scissors" ? "Win" : "Lose";
    else if (user.name == "Paper")
      return computer.name == "Rock" ? "Win" : "Lose";
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    console.log("아이템어레이", itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    console.log("랜덤", randomItem);
    let final = itemArray[randomItem];
    console.log("보여줘!", final);
    return choice[final];
  };

  return (
    <>
      <div className="outer">
        <Box title="You" item={userSelect} result={userResult} />
        <Box title="Computer" item={computerSelect} result={computerResult} />
      </div>
      <div className="mainButtons">
        <button onClick={() => play("scissors")}>
          <FaRegHandScissors />
        </button>
        <button onClick={() => play("rock")}>
          <FaRegHandRock />
        </button>
        <button onClick={() => play("paper")}>
          <FaRegHandPaper />
        </button>
      </div>
    </>
  );
};

export default App;
