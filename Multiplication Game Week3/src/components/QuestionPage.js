import React from "react";
import { useState, useEffect } from "react";
import Answer1 from "../constants/icon/Answer1";
import Answer2 from "../constants/icon/Answer2";
import Answer3 from "../constants/icon/Answer3";
import Board from "../constants/icon/Board";
import "./questionpage.css";
import { Navigate } from "react-router-dom";

function QuestionPage() {
  const [numberList, setNumberList] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [numberone, setNumberone] = useState();
  const [numbertwo, setNumbertwo] = useState();
  const [numbers, setNumbers] = useState([]);
  const [result, setResult] = useState();
  const [numberOfquestions, setNumberOfQuestions] = useState(1);

  const [color, setColor] = useState("#2D2D2D");
  const [icon, setIcon] = useState(true);

  useEffect(() => {
    if (numberOfquestions < 11) {
      generateNumber();
    }
  }, [numberOfquestions]);

  // generating 2 numbers between 0-10
  function generateNumber() {
    const randomNum1 = Math.floor(Math.random() * 10) + 1;
    const randomNum2 = Math.floor(Math.random() * 10) + 1;
    const result = randomNum1 * randomNum2;
    setNumberone(randomNum1);
    setNumbertwo(randomNum2);
    setResult(result);
    setNumbers([randomNum1, randomNum2]);
    setColor("#2D2D2D");
  }

  //selecting one number from generated numbers
  function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
  }

  let index = getRandomNumber(0, 1);
  let randomNumber = numbers[index];
  let sendNumber1, sendNumber2;

  if (index === 0) {
    sendNumber1 = randomNumber;
    sendNumber2 = numbers[index + 1];
  } else {
    sendNumber1 = numbers[index - 1];
    sendNumber2 = randomNumber;
  }

  function changeStates(choice) {
    //when user select a choice, this function works
    if (choice === result) {
      calculatePoint(choice);
      setIcon(true);
      setNumberList([...numberList, [numberone, numbertwo, icon]]);
      setCorrectAnswer((x) => x + 1);
      setColor("#00BF63");
      setTimeout(() => {
      setNumberOfQuestions(numberOfquestions + 1);
      setColor("#2D2D2D");
      }, 3000);
    } else {
      setIcon(false);
      setNumberList([...numberList, [numberone, numbertwo, icon]]);
      setColor("#FA0000");
      setTimeout(() => {
        setNumberOfQuestions(numberOfquestions + 1);
        setColor("#2D2D2D");
      }, 3000);
    }
  }

  const [score, setScore] = useState(0);
  function calculatePoint(choice) {
    setScore((score) => (score += Math.ceil(Math.sqrt(choice))));
  }

  const holdScoreAnswer = [score, correctAnswer]; //holding tour score and number of correct answers
  sessionStorage.setItem("alldata", JSON.stringify(numberList));
  sessionStorage.setItem(
    "scoreCorrectAnswerList",
    JSON.stringify(holdScoreAnswer)
  );

  return (
    <div className="wrapper" style={{ backgroundColor: color }}>
      <div className="navbar">
        <ul>
          <li>Score:{score} </li>
          <li>Tour:{}</li>
          <li>Questions: {numberOfquestions} /10</li>
        </ul>
      </div>
      <div className="tahta">
        <Board
          color="#fffff"
          text="hello"
          number1={numberone}
          number2={numbertwo}
          random={randomNumber}
        />
      </div>
      <div className="answers">
        <Answer1
          number1={sendNumber1 - 1}
          number2={sendNumber2}
          onClick={changeStates}
          color="#fffff"
        ></Answer1>
        <Answer2
          number1={sendNumber1 + 1}
          number2={sendNumber2}
          onClick={changeStates}
        ></Answer2>
        <Answer3
          number1={numberone}
          number2={numbertwo}
          onClick={changeStates}
        ></Answer3>
      </div>

      {numberOfquestions === 11 && <Navigate replace to="/finalpage" />}
    </div>
  );
}

export default QuestionPage;
