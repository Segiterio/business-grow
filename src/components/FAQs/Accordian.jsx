import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { Answer, Question,QuestionContainer } from "./Accordian-style";
const Accordian = (props) => {
  const [answer, showAnswer] = useState(false);

  return (
    <div onClick={() => showAnswer(!answer)} style={{borderBottom:` 2px solid ${answer ? "#A6CF98"  : "#9896F1"}`, cursor:"pointer" }}>
      <QuestionContainer >
        <div >
          {answer ? <FaMinus /> : <FaPlus />}
        </div>
        <Question>{props.question}</Question>
      </QuestionContainer>
      {answer && <Answer >{props.answer}</Answer>}
    </div>
  );
};

export default Accordian;
