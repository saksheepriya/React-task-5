import React, { useState } from 'react';
import './App.css';

function App() {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (birthdate) {
      const birthYear = new Date(birthdate).getFullYear();
      const currentYear = new Date().getFullYear();
      const calculatedAge = currentYear - birthYear;
      setAge(calculatedAge);
    }
  };

  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <label>
        Enter your birthdate:
        <input
          type="date"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
      </label>
      <button onClick={calculateAge}>Calculate Age</button>
      {age !== null && <p>Your age is: {age} years</p>}
    </div>
  );
}

export default App;
