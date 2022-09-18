//import logo from './logo.svg';x`
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
    <h1>Random Text Generator</h1>
    <h2> {quotes.id}  {quotes.title}</h2>
      <p> {quotes.body}</p>
     <button className="btn" onClick={getQuote}>Get Quote</button>
    <div className="footer">&#169; Copyright Ankit Kumar</div>
  </div>
  </div>
);
};




export default App;
