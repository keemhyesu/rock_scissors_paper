import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);

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
    setUserSelect(choice[userChoice], computerSelect);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice); // 컴퓨터도 랜덤한 이미지 출력 완
  };

  const randomChoice = (user, computer) => {
    let itemArray = Object.keys(choice); // choice 객체의 key값 가져옴
    console.log("배열은?", itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length); // 가위바위보의 인덱스 번호(0,1,2)에 math.random(0.xxx) 곱해서 2.xxx 이런식으로 나오게끔 => 앞의숫자만 따오면 됨
    console.log("랜덤밸류는", randomItem);
    let final = itemArray[randomItem]; // 인덱스번호를 가위바위보(아이템 이름)로 가져옴
    console.log("파이널?", final);
    return choice[final]; // randomchoice()의 값이 computerChoice로 할당됨
  };

  return (
    <div>
      <div className="outer">
        <Box title="You" item={userSelect} />
        <Box title="Computer" item={computerSelect} />
      </div>
      <div className="buttons">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
