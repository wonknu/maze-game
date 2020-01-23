import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      <h2>Play the game</h2>
      <br/>
      <Link to="/game">Play game</Link>
      <br/>
      <Link to="/settings">Settings</Link>
    </>
  )
};

export default Home;