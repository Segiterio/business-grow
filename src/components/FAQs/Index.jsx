import React, { useState } from "react";
import FAQData from "../../Data/faq.json";
import { Question, Box, QuestionsContainer, AnswerContainer,SelectedAnswer,SelectedQuestion } from "./Style";
const FAQs = () => {
  const [answer, setAnswer] = useState(FAQData[0]);
  return (
    <div>
      <div className="container">
        <h2 className="Heading">Frequently asked questions</h2>
        <Box>
          <QuestionsContainer>
            {FAQData.map((faq) => (
              <Question
                key={faq.id}
                className={answer.id === faq.id ? "faq" : ""}
                onClick={() => {
                  setAnswer(faq);
                }}
              >
                {faq.question}
              </Question>
            ))}
          </QuestionsContainer>

          <AnswerContainer>
            <SelectedQuestion>{answer.question}</SelectedQuestion>
            <SelectedAnswer>{answer.answer}</SelectedAnswer>
          </AnswerContainer>
        </Box>
      </div>
    </div>
  );
};

export default FAQs;
