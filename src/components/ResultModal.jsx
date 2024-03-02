import {forwardRef, useImperativeHandle, useRef} from 'react'
import {createPortal} from 'react-dom';

const ResultModal = forwardRef (({result, targetTime, timeRemaining , onReset} , ref) => {
    const dialog=useRef();
    const userLost=timeRemaining <=0;
    const formmaterdRemainingTime=(timeRemaining /1000).toFixed(2);
    const score = Math.round(( 1- timeRemaining/ (targetTime *1000) ) * 100);

    useImperativeHandle(ref, ()=>{
        return{
            open(){
                dialog.current.showModal();
            }
        }
    })

  return createPortal(
    <dialog ref={dialog}     className='result-modal' onClose={onReset}>
        {userLost && <h2> {result}</h2>}
        {!userLost && <h2>{score}점 입니다.</h2>}

        <p>목표 시간은 <strong>{targetTime} 초 였습니다.</strong></p>
        {timeRemaining >1 && <p> <strong>{formmaterdRemainingTime} 초   남았는데 타이머를 멈췄습니다. </strong></p> }

        <form method='dialog' onSubmit={onReset}>
            <button>닫기</button>
        </form>
    </dialog>,
    
    document.getElementById("modal")
  );
  
})

export default ResultModal