import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/main';
import Nav from './components/common/nav';
import GameStart from './components/game/start';
import GameChoose from './components/game/choose';
import GameFood from './components/game/foodItem';
import GameFlag from './components/game/flag';
import GameContinue from './components/game/continue';
import GamePeople from './components/game/people';
import Signin from './components/auth/signin';


function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/game/choose' element={<GameChoose/>} />
        <Route path="/game/start" element={<GameStart/>} />
        <Route path='/game/food' element={<GameFood/>} />
        <Route path='/game/flag' element={<GameFlag/>} />
        <Route path='/game/continue' element={<GameContinue/>} />
        <Route path='/game/people' element={<GamePeople/>} />
      </Routes>
    </Router>
  );
}

export default App;
