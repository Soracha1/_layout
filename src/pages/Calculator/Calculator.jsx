import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [currentInput, setCurrentInput] = useState('0');
  const [operator, setOperator] = useState(null);
  const [previousInput, setPreviousInput] = useState(null);
  const [lastInput, setLastInput] = useState(null);
  const [lastOperator, setLastOperator] = useState(null);
  const [clearStatus, setClearStatus] = useState(false);

  // อัปเดตการแสดงผล
  const updateDisplay = () => currentInput;

  // ล้างค่าบนจอ
  const clearDisplay = () => {
    if (!clearStatus) {
      setCurrentInput('0');
      setClearStatus(true);
    } else {
      setCurrentInput('0');
      setPreviousInput(null);
      setOperator(null);
      setLastInput(null);
      setLastOperator(null);
      setClearStatus(false);
    }
  };

  // ป้อนตัวเลข
  const inputNumber = (num) => {
    if (currentInput === '0') {
      setCurrentInput(num.toString());
    } else {
      setCurrentInput(currentInput + num.toString());
    }
    setClearStatus(false);
  };

  // ป้อนเครื่องหมาย
  const inputOperator = (op) => {
    if (operator !== null) {
      calculateResult();
    }
    setOperator(op);
    setPreviousInput(currentInput);
    setCurrentInput('0');
    setClearStatus(false);
  };

  // คำนวณผลลัพธ์
  const calculateResult = () => {
    let prev = parseFloat(previousInput);
    let current = parseFloat(currentInput);

    if (operator !== null) {
      switch (operator) {
        case '+':
          setCurrentInput((prev + current).toString());
          break;
        case '-':
          setCurrentInput((prev - current).toString());
          break;
        case '*':
          setCurrentInput((prev * current).toString());
          break;
        case '/':
          setCurrentInput((prev / current).toString());
          break;
        default:
          break;
      }
      setLastInput(current);
      setLastOperator(operator);
    } else if (lastOperator !== null && lastInput !== null) {
      prev = parseFloat(currentInput);
      switch (lastOperator) {
        case '+':
          setCurrentInput((prev + lastInput).toString());
          break;
        case '-':
          setCurrentInput((prev - lastInput).toString());
          break;
        case '*':
          setCurrentInput((prev * lastInput).toString());
          break;
        case '/':
          setCurrentInput((prev / lastInput).toString());
          break;
        default:
          break;
      }
    }

    setOperator(null);
    setPreviousInput(null);
  };

  // จุดทศนิยม
  const addDecimal = () => {
    if (!currentInput.includes('.')) {
      setCurrentInput(currentInput + '.');
    }
  };

  // เปอร์เซ็นต์
  const addPercentage = () => {
    if (operator && previousInput !== null) {
      let prev = parseFloat(previousInput);
      let current = parseFloat(currentInput);
      setCurrentInput((prev * (current / 100)).toString());
    } else {
      setCurrentInput((parseFloat(currentInput) / 100).toString());
    }
  };

  return (
    <div className="calculator-container">
        <div className="calculator">
        <div className="display">
          <div id="calc-display">{updateDisplay()}</div>
        </div>
          <div className="buttons">
        <button className="btn-calculator ad" id="clear-btn" onClick={clearDisplay}>{clearStatus ? 'AC' : 'C'}</button>
        <button className="btn-calculator ad" onClick={() => inputNumber('±')}>±</button>
        <button className="btn-calculator ad" onClick={addPercentage}>%</button>
        <button className="btn-calculator operator" onClick={() => inputOperator('/')}>÷</button>

        <button className="btn-calculator" onClick={() => inputNumber(7)}>7</button>
        <button className="btn-calculator" onClick={() => inputNumber(8)}>8</button>
        <button className="btn-calculator" onClick={() => inputNumber(9)}>9</button>
        <button className="btn-calculator operator" onClick={() => inputOperator('*')}>×</button>

        <button className="btn-calculator" onClick={() => inputNumber(4)}>4</button>
        <button className="btn-calculator" onClick={() => inputNumber(5)}>5</button>
        <button className="btn-calculator" onClick={() => inputNumber(6)}>6</button>
        <button className="btn-calculator operator" onClick={() => inputOperator('-')}>−</button>

        <button className="btn-calculator" onClick={() => inputNumber(1)}>1</button>
        <button className="btn-calculator" onClick={() => inputNumber(2)}>2</button>
        <button className="btn-calculator" onClick={() => inputNumber(3)}>3</button>
        <button className="btn-calculator operator" onClick={() => inputOperator('+')}>+</button>

        <button className="btn-calculator double-width" onClick={() => inputNumber(0)}>0</button>
        <button className="btn-calculator" onClick={addDecimal}>.</button>
        <button className="btn-calculator operator" onClick={calculateResult}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
