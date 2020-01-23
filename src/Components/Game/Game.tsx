import React from "react";
import { Tiles } from "../Tiles";
import { TileActionProps } from '../Tile/types.d';

const Game: React.FC = () => {
  return (
    <>
      <h2>You're playing</h2>
      <br/>
      <Tiles
        column={4}
        row={4} />
    </>
  )
};

export default Game;