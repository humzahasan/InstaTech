import React, {useState} from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(['']);

  const sndMsg = (event) => {
    event.preventDefault();
    setMessages([...messages, input]);
    setInput('');
  };

  return (
    <div className='App'>
      <h1>Let's Go!</h1>
      <form>
        <input
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
        <button onClick={sndMsg}>Send Message</button>
      </form>
      {messages.map((message) => (
        <p>{message}</p>
      ))}
    </div>
  );
}

export default App;
