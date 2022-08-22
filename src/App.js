import { useState } from "react";
import "./App.css";
import Box from "./component/Box";
import { FaRegHandRock } from "react-icons/fa";
import { FaRegHandScissors } from "react-icons/fa";
import { FaRegHandPaper } from "react-icons/fa";

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");
  const [computerResult, setComputerResult] = useState("");

  const choice = {
    rock: {
      name: "Rock",
      img: "https://lh3.googleusercontent.com/qkVrT5AEoLRntKS_preFmH44T9GeOIv-lYT5RxwRI859U4Al3JKS3rwFEAAjHEw2gttpxRopcqcxn2BG0XcQy2lxao5gCFKWr0x1tKU=w600",
    },
    scissors: {
      name: "Scissors",
      img: "https://www.mouser.kr/images/marketingid/2020/img/177933245.png?v=031022.1142",
    },
    paper: {
      name: "Paper",
      img: "https://completesupplies.com.mt/wp-content/uploads/2020/10/46064.jpg",
    },
  };

  const play = (userChoice) => {
    console.log("클릭", userChoice);
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
    setComputerResult(judgement(computerChoice, choice[userChoice]));
  };

  const judgement = (user, computer) => {
    if (user.name == computer.name) {
      return "TIE";
    } else if (user.name == "Rock")
      return computer.name == "Scissors" ? "WIN" : "LOSE";
    else if (user.name == "Scissors")
      return computer.name == "Paper" ? "WIN" : "LOSE";
    else if (user.name == "Paper")
      return computer.name == "Rock" ? "WIN" : "LOSE";
  };

  const randomChoice = () => {
    console.log("선택");
    let itemArray = Object.keys(choice);
    console.log("아이템어레이", itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    console.log("랜덤아이템", randomItem);
    let final = itemArray[randomItem];
    console.log("파이널", final);
    return choice[final];
  };

  return (
    <div>
      <div className="outer">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={computerResult} />
      </div>
      <div className="buttons">
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
    </div>
  );
}

export default App;
