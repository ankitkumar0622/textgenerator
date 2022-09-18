//import logo from './logo.svg';
import React , { useState } from "react";
import './App.css';

const App = () => {
  const [quotes, setQuotes] = useState("");

 // const textRef = useRef();
  //let colors = ["#ffff00", "#90ee90" , "#ffa500", "#ff68ff", "#a9a9e7"];


  const getQuote = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) =>res.json())
    .then((data) => {
      let randomNum = Math.floor(Math.random() * data.length);
      setQuotes(data[randomNum]);
    });
  };


//   useEffect( () => {
//   textRef.current.style.color =
//   colors[Math.floor(Math.random() * colors.length)];
//  }, [quotes]);



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


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
