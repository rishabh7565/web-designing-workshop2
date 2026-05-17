import React, { useState } from 'react';
import './App.css';

function App() {
  // 1. Define the state variable
  const [count, setCount] = useState(0);

  // 2. Define the logic functions
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  // 3. Render the UI
  return (
    <div className="container">
      <div className="card">
        <h1 className="title">React Counter Application</h1>
        <h2 className="counter-value">{count}</h2>
        
        <div className="button-group">
          <button className="btn btn-primary" onClick={increment}>Increment (+)</button>
          <button className="btn btn-primary" onClick={decrement}>Decrement (-)</button>
        </div>
        
        <div className="reset-container">
          <button className="btn btn-primary reset-btn" onClick={reset}>Reset</button>
        </div>

        {/* --- Student Details Section --- */}
        <div className="student-details">
          <p className="student-name">Name: <strong>RISHABH PAL</strong></p>
          <p className="student-roll">Roll No: <strong>2503201000920</strong></p>
        </div>
      </div>
    </div>
  );
}

export default App;