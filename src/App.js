//import logo from './logo.svg';
import React , { useState } from "react";
import './App.css';

const App = () => {
  const [quotes, setQuotes] = useState("");


  const getQuote = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) =>res.json())
    .then((data) => {
      let randomNum = Math.floor(Math.random() * data.length);
      setQuotes(data[randomNum]);
    });
  };



return(
  <div className="App">
    <div className="quote">
    <h2>ID: {quotes.id}</h2>
    <p>Body: {quotes.body}</p>
     <button className="btn" onClick={getQuote}>Get Quote</button>
  </div>
  </div>
);
};




export default App;
