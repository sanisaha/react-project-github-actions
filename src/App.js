import { useState } from 'react';
import './App.css';
import PropTest from './PropTest';

function App() {
  const [name, setname] = useState('John')
  return (
    <div className="App">
      <h1>Hello</h1>
      <PropTest name={name} setname={setname}></PropTest>
    </div>
  );
}

export default App;
