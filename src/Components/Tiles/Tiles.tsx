import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { TilesProps } from './types.d';
import { Tile } from "../Tile";
import { TileActionProps } from "../Tile/types";
import { StyledTiles, StyledTile } from './Styles';
import { useTiles } from './useTiles';

import { Hero } from "../Hero";
import { useHero } from "../Hero/useHero";

import { Vilain } from "../Vilain";
import { useVilain } from "../Vilain/useVilain";

import { Action } from "../Action";
import { useAction } from "../Action/useAction";

const Tiles: React.FC<TilesProps> = ({
  column,
  row
}) => {
  const { tiles, createTitles } = useTiles();
  let history = useHistory();
  const { x, y, move } = useHero({x: row, y: column});
  const { xVilains, yVilains, moves, createVilains } = useVilain({x: row, y: column});
  const { checkActions } = useAction();

  useEffect(() => {
    createTitles({column, row});
    const startX: number = Math.floor(Math.random() * row);
    const startY: number = Math.floor(Math.random() * column);
    move({x: startX, y: startY});
    createVilains({x: startX, y: startY}, 2);
    return () => {};
  }, []);

  useEffect(() => {
    const positionVilains: TileActionProps[] = xVilains.map((xVilain, index) => ({x: xVilain, y: yVilains[index]}));
    checkActions(tiles, positionVilains, {x, y});
    return () => {};
  }, [tiles, xVilains, yVilains, x, y]);

  const tilesSize = 400;
  const tileSize = (1/row) * tilesSize;

  const action = (newPosition: TileActionProps) => {
    const xDirection = newPosition.x - x;
    const yDirection = newPosition.y - y;
    move({x: newPosition.x, y: newPosition.y});
    moves({x: xDirection, y: yDirection});
  };

  return (
    <>
      <button onClick={history.goBack}>leave</button>
      <StyledTiles size={tilesSize}>
        {tiles.map((tile, rowIndex) => 
          tile.map((columnValue, columnIndex) => {
            const canMove = 
                            (rowIndex === y && (columnIndex === x - 1 || columnIndex === x + 1)) ||
                            (columnIndex === x && (rowIndex === y - 1 || rowIndex === y + 1));
            return (
              <StyledTile key={`${rowIndex}_${columnIndex}`} size={tileSize}>
                <Tile
                  size={tileSize}
                  Xposition={columnIndex}
                  Yposition={rowIndex}
                  item={columnValue}
                  canMove={canMove}
                  onAction={action} />
              </StyledTile>
            )
          })
        )}
        {xVilains.map((xVilain, index) => (
          <Vilain
            key={`${xVilain}_${yVilains[index]}_${index}`}
            size={tileSize}
            Xposition={xVilain}
            Yposition={yVilains[index]}
            index={index}
            // item={columnValue}
            onAction={({x, y, item}: TileActionProps) => {
              console.log(x, y, item && item)
            }} />
        ))}
        <Hero
          size={tileSize}
          Xposition={x}
          Yposition={y}
          // item={columnValue}
          onAction={action} />
        {/* <Action
          size={tileSize}
          Xposition={x}
          Yposition={y}
          /> */}
      </StyledTiles>
    </>
  )
};

export default Tiles;
