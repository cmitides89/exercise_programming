import React,{ useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // used to make an api call
  useEffect(() => {
    fetch('/').then(response => 
      response.json().then(data => {
        console.log(data);
      })
    );
  },[])
  return (
    <div className="App">
      
    </div>
  );
}


export default App;
