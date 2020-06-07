import React, { useState } from 'react';
import './App.css';
import CalButton from './components/CalButton';

enum Operators {
  Plus = '+',
  Minus = '-',
  Divide = '/',
  Multiply = '*',
  Percentage = '%',
  Backspace = '<'
}

export default function App() {

  const [numA, setNumA] = useState(0);
  const [numB, setNumB] = useState(0);
  const [result, setResult] = useState(0);
  const [disp, setDisp] = useState("");
  const [op, setOp] = useState<Operators>();

  function numPressed(num: number) {
    if (op === undefined) {
      setNumA(prevNumA => prevNumA * 10 + num); // state ta ager state er valuer upor nirvor korche tai function pass korchi
      setDisp(`${numA}`);
    } else {
      setNumB(prevNumB => prevNumB * 10 + num);
      setDisp(`${numA} ${op} ${numB}`);
    }
  };

  function backSpace() {
    if (op === Operators.Backspace) {
      let arrayOfDigits = Array.from(String(`${numA} ${numB}`), Number);
      for (let i = 0; i <= arrayOfDigits.length; i++) {
        arrayOfDigits.pop();

      }
    }
  }


  function operatorPressed(operator: Operators) { // bhul type, ei gulo jate aar na hoi
    if (operator === Operators.Divide) {
      setOp(operator);
      setDisp((prevDisp: string) => `${prevDisp} ${operator}`); // thik krar kaje aache tor
    } else if (operator === Operators.Multiply) {
      setOp(operator);
      setDisp((prevDisp: string) => `${prevDisp} ${operator}`);

    } else if (operator === Operators.Plus) {
      setOp(operator);
      setDisp((prevDisp: string) => `${prevDisp} ${operator}`);

    } else if (operator === Operators.Minus) {
      setOp(operator);
      setDisp((prevDisp: string) => `${prevDisp} ${operator}`);

    } else if (operator === Operators.Percentage) {
      setOp(operator);
      setDisp((prevDisp: string) => `${prevDisp} ${operator}`);

    }
  };

  function solution() {
    switch (op) {
      case Operators.Plus:
        setResult(numA + numB);
        setDisp(`${result}`);
        break;
      case Operators.Minus:
        setResult(numA - numB);
        setDisp(`${result}`)
        break;
      case Operators.Multiply:
        setResult(numA * numB);
        setDisp(`${result}`)
        break;
      case Operators.Divide:
        setResult(numA / numB);
        setDisp(`${result}`)
        break;
      case Operators.Percentage:
        setResult(numA % numB);
        setDisp(`${result}`)
    }
  }


  return (
    <div className="App">
      <div className="container">
        <input type="text" className="inputNum" value={disp} />
        <table>
          <tr>
            <td><CalButton text='C' onClick={() => {
              setNumA(0);
              setNumB(0);
              setOp(undefined) // setOperator krish ni
              setDisp("");
            }} /></td>
            <td><CalButton text='<' onClick={() => backSpace()} /></td>
            <td><CalButton text='%' onClick={() => operatorPressed(Operators.Percentage)} /></td>
            <td><CalButton text='/' onClick={() => operatorPressed(Operators.Divide)} /></td>
          </tr>
          <tr>
            <td><CalButton text='7' onClick={() => numPressed(7)} /></td>
            <td><CalButton text="8" onClick={() => numPressed(8)} /></td>
            <td><CalButton text='9' onClick={() => numPressed(9)} /></td>
            <td><CalButton text='x' onClick={() => operatorPressed(Operators.Multiply)} /></td>
          </tr>
          <tr>
            <td><CalButton text='4' onClick={() => numPressed(4)} /></td>
            <td><CalButton text='5' onClick={() => numPressed(5)} /></td>
            <td><CalButton text='6' onClick={() => numPressed(6)} /></td>
            <td><CalButton text='-' onClick={() => operatorPressed(Operators.Minus)} /></td>
          </tr>
          <tr>
            <td><CalButton text='1' onClick={() => numPressed(1)} /></td>
            <td><CalButton text='2' onClick={() => numPressed(2)} /></td>
            <td><CalButton text='3' onClick={() => numPressed(3)} /></td>
            <td><CalButton text='+' onClick={() => operatorPressed(Operators.Plus)} /></td>
          </tr>
          <tr>
            <td><CalButton text='' onClick={() => setNumA(0)} /></td>
            <td><CalButton text='0' onClick={() => numPressed(0)} /></td>
            <td><CalButton text='.' onClick={() => setNumA(0)} /></td>
            <td><CalButton text='=' onClick={() => solution()} /></td>
          </tr>
        </table>
      </div>
    </div>
  );
}
