import React, { useState } from 'react';
import './App.css';
function App() {
 const [input, setInput] = useState(''); // State to store input
 // Function to handle button click
 const handleClick = (value) => {
 setInput(input + value); // Append clicked value to input
 };
 // Function to clear input
 const handleClear = () => {
 setInput('');
 };
 // Function to evaluate the result
 const handleEqual = () => {
 try {
 setInput(eval(input).toString()); // Evaluate expression and convert result to string
 } catch (error) {
 setInput('Error'); // Show 'Error' if the expression is invalid
 }
 };
 return (
 <div className="App">
  <h1>Simple Calculator</h1>
 <div className="calculator">
 <input type="text" value={input} readOnly />
 <div className="buttons">
 {/* Calculator buttons */}
 <button onClick={() => handleClick('1')}>1</button>
 <button onClick={() => handleClick('2')}>2</button>
 <button onClick={() => handleClick('3')}>3</button>
 <button onClick={() => handleClick('+')}>+</button>
 <button onClick={() => handleClick('4')}>4</button>
 <button onClick={() => handleClick('5')}>5</button>
 <button onClick={() => handleClick('6')}>6</button>
 <button onClick={() => handleClick('-')}>-</button>
 <button onClick={() => handleClick('7')}>7</button>
 <button onClick={() => handleClick('8')}>8</button>
 <button onClick={() => handleClick('9')}>9</button>
 <button onClick={() => handleClick('*')}>*</button>
 <button onClick={() => handleClick('0')}>0</button>
 <button onClick={handleClear}>C</button>
 <button onClick={handleEqual}>=</button>
 <button onClick={() => handleClick('/')}>/</button>
 </div>
 </div>
 </div>
 );
}
export default App;
