import React, {useState, useEffect} from 'react';
import './App.css';
import {FormControl, Input} from '@material-ui/core';
import Message from './Message';
import firebase from 'firebase';
import db from './firebase';
import SendIcon from '@material-ui/icons/Send';
import {IconButton} from '@material-ui/core';
import FlipMove from 'react-flip-move';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({id: doc.id, message: doc.data()}))
        );
      });
  }, []);

  useEffect(() => {
    setUsername(prompt('Please enter your username!'));
  }, []);

  const sndMsg = (event) => {
    event.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput('');
  };

  return (
    <>
    <div className='App'>
      <h1>
        InstaTech Community!
        <span role='img' aria-label='rocket'>
          🚀
        </span>
      </h1>
      <h3>
        Welcome {username}!
        <span role='img' aria-label='hi'>
          👋
        </span>
      </h3>
      <h5>
        Drop in some positivity for the community!
        <span role='img' aria-label='computer'>
          👩‍💻👨‍💻
        </span>
      </h5>
      <form className='app_form'>
        <FormControl className='app_formcontrol'>
          <Input
            className='app_input'
            value={input}
            placeholder='Enter a message.....'
            onChange={(event) => {
              setInput(event.target.value);
            }}
          />

          <IconButton
            className='app_iconbutton'
            variant='contained'
            type='submit'
            color='secondary'
            disabled={!input}
            onClick={sndMsg}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({id, message}) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
    </>
  );
}

export default App;
