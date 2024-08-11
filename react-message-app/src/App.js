import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [displayedMessage, setDisplayedMessage] = useState('Hello World');

  const displayMessage = () => {
    setDisplayedMessage(message);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>React Message App</h1>
      <input
        type="text"
        placeholder="Message to Display"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={displayMessage}>Display Message</button>
      <h2>{displayedMessage}</h2>
    </div>
  );
}

export default App;
