import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import questions from './data';
const Question = ({question}) => {
  const [showAnswer,setShowAnswer] = useState(false)
  const {id,title,info} = question


  
  return <article className='question'>
    <header>
      <h4>{title}</h4>
<button className='btn' onClick={() => setShowAnswer(!showAnswer)}>{!showAnswer ? <AiOutlinePlus/>:<AiOutlineMinus/>}</button>
    </header>

{!showAnswer || <p className='correct-answers'>{info}</p>}
    </article>;
};

export default Question;
