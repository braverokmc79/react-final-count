import { useRef, useState } from "react";

export default function Player() {
  const  playerName =useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState('');

  function handleClick(){
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value='';
  }


  return (
    <section id="player">
      <h2> {enteredPlayerName ?? enteredPlayerName+"님" } 환영합니다.</h2>
      <p>
        <input ref={playerName}  type="text" />
        <button onClick={handleClick}  >   이름 설정</button>
      </p>
    </section>
  );



}
