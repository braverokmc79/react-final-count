import React, { useEffect, useRef, useState } from 'react'
import ResultModal from './ResultModal';

const TimerChallenge = ({title, targetTime}) => {
    const timer =useRef();
    const dialog=useRef();

    const [timeRemaining, setTimeRemaining] = useState(targetTime*1000);
    const timerIsActive =timeRemaining > 0 && timeRemaining < targetTime*1000;
    
  
    useEffect(()=>{
        if(timeRemaining <= 0 ) {
            clearInterval(timer.current);         
            dialog.current.open();       
        }    
    }, [timeRemaining]);
    
    function handleReset(){
        setTimeRemaining(targetTime*1000);
    }
    
  function handleStart(){
    timer.current=setInterval(() =>{
        setTimeRemaining(prevTimeRemaining => prevTimeRemaining-10);
    }, 10);
  }

  function handleStop(){
    dialog.current.open();
    clearInterval(timer.current);    
  }



  return (
    <>
        <ResultModal ref={dialog}  targetTime={targetTime}  timeRemaining={timeRemaining} result ="YOU LOST"
            onReset={handleReset}
        />

        <section className='challenge'>
            <h2>{title}</h2>
            {/* {timerExpired && <p>You lost! </p>} */}

            <p className='challenge-time'>
                {targetTime} 초 {targetTime >1 ? '' :''}            
            </p>
            <p>
                <button onClick={timerIsActive ?handleStop :handleStart}>
                {timerIsActive ? '멈추기' : '시작하기'}
                </button>
            </p>
            <p className={timerIsActive ? 'active' : undefined}>
            {timerIsActive   ?     '타이머 작동중...'  : '타이머 비활성' }
            </p>
        </section>
    </>
  )
}

export default TimerChallenge