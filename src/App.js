import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

function App() {
  let counter = 0; //변수는 동기적으로 작동
  const [counter2, setCounter2] = useState(0);
  //useState도 함수임. 그리고 react hook 중에 하나가 useState. 괄호안은 매개변수로 초기값을 넣어줌
  const increase = () => {
    counter = counter + 1;
    setCounter2(counter2 + 1); //state는 비동기적으로 작동
    console.log("counter는", counter, "counter2 state는", counter2);
  };

  return (
    <>
      <div>{counter}</div>
      <div>state: {counter2}</div>
      <button onClick={increase}>클릭!</button>
    </>
  );
}
/* 1. 유저가 버튼을 클릭한다
  2. counter + 1 해서 1이 됨
  3. setState 함수 호출
  4. console.log 실행
  5. 변수값은 1로 보이고 state 값은 아직 안변했기 때문에 그 전의 값이 보인다.
  6. 함수 끝
  7. app 다시 re render
  8. let counter = 0을 거치면서 counter 값은 다시 0으로 초기화
  9. 업데이트 된 state값이 보인다.
  **변수는 re render 될때마다 초기화가 된다**
  */

export default App;
