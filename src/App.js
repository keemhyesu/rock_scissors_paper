import { useState, useTransition } from "react";
import "./App.css";
import Box from "./component/Box";

// 1. 박스 2개(타이틀,사진,결과값)
// 2. 가위 바위 보 버튼이 있다
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
// 5. 3~4 결과를 가지고 누가 이겼는지 승패를 따진다.
// 6. 승패에 따라 테두리 색이 바뀐다(이기면 초록/ 지면 빨강/ 비기면 검정)

// 사진과 이름을 가지고 있는 객체
const choice = {
  rock: {
    name: "Rock",
    img: "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-640x514.jpg",
  },
  scissors: {
    name: "Scissors",
    img: "https://cdn.images.fecom-media.com/FE00015871/images/HE1815179_1426638-GLS-STA-P01.jpg?width=578&height=578&scale=UpscaleCanvas&anchor=MiddleCenter",
  },
  paper: {
    name: "Paper",
    img: "https://m.media-amazon.com/images/I/61OorFhm6SL._AC_SX466_.jpg",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");
  const [computerResult, setComputerResult] = useState("");

  //onClick부분에서 play 함수가 바로 실행되기 때문에 콜백함수 형태로 넘겨줘야됨
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
    setComputerResult(judgement(computerChoice, choice[userChoice]));
  };

  const judgement = (user, computer) => {
    if (user.name == computer.name) {
      return "tie";
    } else if (user.name == "Rock")
      return computer.name == "Scissors" ? "win" : "lose";
    else if (user.name == "Paper")
      return computer.name == "Rock" ? "win" : "lose";
    else if (user.name == "Scissors")
      return computer.name == "Paper" ? "win" : "lose";
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice); // 객체의 키값만 뽑아서 array로 만들어주는 함수.

    let randomItem = Math.floor(Math.random() * itemArray.length);

    let final = itemArray[randomItem];

    return choice[final]; // 종료되면서 play 함수안에 computerChoice 실행
  };

  return (
    <>
      <div className="outer">
        <Box title="YOU" item={userSelect} result={result} />
        <Box title="COMPUTER" item={computerSelect} result={computerResult} />
      </div>
      <div className="mainBtn">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </>
  );
}

export default App;
