import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AppHeader from './components/app-header';
import Counter from './components/counter';
import CounterClass from './components/counter-class';

function App() {
  return (
    <div className="App">
      <nav className='top-menu'>
        <Link to="/">Header</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/header">HeaderCustom</Link>
        <Link to="/counterclass">Counter Class</Link>
      </nav>
      <Routes>
        <Route path="/" element={<AppHeader>My Header</AppHeader>} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/counterclass" element={<CounterClass />} />
        <Route path="/header" element={<AppHeader className="header"
          subTitle="AwesomeappHere">
          My Double Header App
        </AppHeader>} />
      </Routes>
    </div>
  );
}

export default App;
