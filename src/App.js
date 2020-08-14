import React, {useState} from 'react';
import './App.css';
import {Button, FormControl, InputLabel, Input} from '@material-ui/core';
import Message from './Message';
//import SendIcon from '@material-ui/icons/Send';

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
        <FormControl>
          <InputLabel>Send Message</InputLabel>
          <Input
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
            }}
          />
        </FormControl>
        <Button
          variant='contained'
          type='submit'
          color='secondary'
          disabled={!input}
          onClick={sndMsg}
        >
          Send Message
        </Button>
      </form>
      {messages.map((message) => (
        <Message text={message}/>
      ))}
    </div>
  );
}

export default App;
