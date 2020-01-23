import { useState } from 'react';
import { TileItemTypes, TileActionProps } from "../Tile/types";
import { TilesProps } from "./types";

export const useTiles = () => {
  const [tiles, setTiles] = useState<Array<Array<TileItemTypes>>>([]);
  const [column, setColumn] = useState<number>(0);
  const [row, setRow] = useState<number>(0);

  const createTitles = (values: TilesProps) => {
    const { column, row } = values;
    const possibilities: Array<TileItemTypes> = ['weapon', 'shield'];
    setColumn(column);
    setRow(row);

    let newTiles: [TileItemTypes[]] = [[]];
    for (let i = 0; i < row; i++) {
      newTiles[i] = [];
      for (let j = 0; j < column; j++) {
        newTiles[i][j] = possibilities[Math.floor(Math.random() * possibilities.length)];
      }
    }
    newTiles[Math.floor(Math.random() * row)][ Math.floor(Math.random() * column)] = 'exit';

    setTiles(newTiles);
  };

  const setTitle = (position: TileActionProps) => {
    const newTiles = tiles.map((rowTiles, xIndex) => {
      if (xIndex === position.x) {
        return rowTiles.map((tile, yIndex) => {
          if (yIndex === position.y) {

          }
        });
      }
      return rowTiles;
    })
  };

  return { tiles, createTitles };
};
