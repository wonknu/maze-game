import React from "react";
import { useHistory } from "react-router-dom";
import { Game as GameComp } from "../Components/Game";

const Game: React.FC = () => {
  let history = useHistory();
  return (
    <>
      <h2>Game:</h2>
      <GameComp />
    </>
  )
};

export default Game;