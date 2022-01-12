import React from 'react';
import { render } from "react-dom";
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home';
import Pokemon from './components/Pokemon';
import Header from './components/Header';
import Error from './components/Error'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";

// ReactDOM.render(
//   <React.StrictMode>
//     {/* <App /> */}
//     < Header />
//     < Pokemon />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const rootElement = document.getElementById("root");
render(
  <React.StrictMode>
  <BrowserRouter>
    <Header />
      <Routes>
        {/* <Route exact path="/Home" element={ <Home /> } /> */}
      </Routes>
    <Error />
  </BrowserRouter>
  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
