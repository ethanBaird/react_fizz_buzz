import { useEffect, useState } from 'react';
import './App.css';

function App() {
  
  const [inputNumber, setInputNumber] = useState(1);
  const [answer, setAnswer] = useState(1);
  const [otherNumber, setOtherNumber] = useState(4);
  const [userInput, setUserInput] = useState('');
  const [dispResult, setDispResult] = useState('');

  useEffect(() => {
    console.log('working');
    if (inputNumber % 3 === 0 && inputNumber % 5 === 0) {
      setAnswer("fizzbuzz")
    } else if (inputNumber % 3 === 0) {
      setAnswer("fizz")
    } else if (inputNumber % 5 === 0) {
      setAnswer("buzz")
    } else {
      setAnswer(inputNumber);
    }
  }, [inputNumber])

  const handleInc = () => {
    setInputNumber(inputNumber + 1);
  };

  const handleUserInput = (event) => {
    let input = event.target.value
    setUserInput(input.toLowerCase());
  }

  const verifyAnswer = () =>{
    if(userInput == answer){
        setDispResult("correct")
    } else {
      setDispResult("wrong")
    }
  }

  useEffect(() =>{
    verifyAnswer()
  },[userInput, answer]);
  

  
  return (
    <div className="App">
      <h1>input number {inputNumber}</h1>
      <h1 className={dispResult}>{dispResult}</h1>
      <h1>unchanging number: {otherNumber}</h1>
      <button value={inputNumber} onClick={handleInc}>+</button>
      
        <input type='text' value={userInput} onChange={handleUserInput}></input>
    </div>
  );
}

export default App;
