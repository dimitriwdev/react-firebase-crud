import firebase from '../utils/firebaseConfig';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  create: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '20px',
    backgroundColor: 'rgb(70, 70, 70)',
    color: '#fff',
  },
  form: {
    width: '30%',
    display: 'flex',
    justifyContent: 'flex-start',
    padding: '20px',
    marginTop: '20px',
    backgroundColor: '#6BA1B9',
  },
  inputAuthor: {
    padding: '10px',
    marginRight: '15px',
    height: '40px',
  },
  inputText: {
    display: 'flex',
    height: '40px',
    padding: '10px',
    marginRight: '15px',
    verticalAlign: 'middle',
  },
  createBtn: {
    padding: '10px 20px',
    backgroundColor: '#000',
    color: '#fff',
    fontWeight: 'bold',
    border: 'none',
    cursor: 'pointer',
    transition: '0.3s',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#000',
    },
  },
}))

const Create = () => {
  const classes = useStyles();
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');

  const createQuote = () => {
    const quotesDB = firebase.database().ref('quotesDB');
    const quote = {
      author,
      text,
    };

    quotesDB.push(quote);
    setAuthor('');
    setText('');
  }

  return (
    <div className={classes.create}>
      <h4>Add a quote</h4>
      <div className={classes.form}>
        <input
          className={classes.inputAuthor}
          type='text'
          placeholder='Author'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <textarea
          className={classes.inputText}
          placeholder='quote'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className={classes.createBtn} onClick={createQuote}>Create</button>
      </div>
    </div>
  );
};

export default Create;