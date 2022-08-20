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
    img: "https://townsquare.media/site/723/files/2015/04/Pet-Rock-11-300x200.jpg",
  },
  scissors: {
    name: "Scissors",
    img: "https://www.joinusonline.net/pub/media/catalog/product/cache/c9a86b5d6ed7765664725105f8d84377/s/m/small_scissor_green.jpg",
  },
  paper: {
    name: "Paper",
    img: "https://m.media-amazon.com/images/I/61OorFhm6SL._AC_SX466_.jpg",
  },
};

function App() {
  //onClick부분에서 play 함수가 바로 실행되기 때문에 콜백함수 형태로 넘겨줘야됨
  const play = (userChoice) => {
    console.log("선택!", userChoice);
  };
  return (
    <>
      <div className="outer">
        <Box title="YOU" />
        <Box title="COMPUTER" />
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
