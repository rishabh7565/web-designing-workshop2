import React, { useState } from 'react';
import './App.css';

function App() {
  // Input tracking states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Separate states to snapshot the data for display only after clicking Register
  const [submittedData, setSubmittedData] = useState({ name: '', email: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && password) {
      // Save the details to display them
      setSubmittedData({ name: name, email: email });
      setIsSubmitted(true);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Registration Form</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input 
              type="text" 
              placeholder="Enter Name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required
            />
          </div>
          
          <div className="input-group">
            <input 
              type="email" 
              placeholder="Enter Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required
            />
          </div>
          
          <div className="input-group">
            <input 
              type="password" 
              placeholder="Enter Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required
            />
          </div>
          
          <button type="submit" className="btn-register">Register</button>
        </form>

        {isSubmitted && (
          <div className="submission-result">
            <p className="msg-success">Registration Successful!</p>
            
            {/* Displaying the user data output */}
            <div className="display-data-box">
              <h3 className="display-title">Registered User Details</h3>
              <p><strong>Name:</strong> {submittedData.name}</p>
              <p><strong>Email:</strong> {submittedData.email}</p>
            </div>
          </div>
        )}

        {/* Student details footer */}
        <div className="student-details">
          <p>Name: <strong>RISHABH PAL</strong></p>
          <p>Roll No: <strong>2503201000920</strong></p>
        </div>
      </div>
    </div>
  );
}

export default App;