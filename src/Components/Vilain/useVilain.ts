import { useState } from 'react';
import { TileItemTypes, TileActionProps } from "../Tile/types";
import { TilesProps } from '../Tiles/types';

export const useVilain = (max: TileActionProps) => {
  const [xVilains, setX] = useState<Array<number>>([]);
  const [yVilains, setY] = useState<Array<number>>([]);
  const [maxX, setMaxX] = useState<number>(max.x);
  const [maxY, setMaxY] = useState<number>(max.y);

  const createPosition = (max: number): number => Math.floor(Math.random() * max);

  const getPosition = (unAuthorizedPosition: TileActionProps[]): TileActionProps => {
    let authorizedPosition = false;
    let startX: number = createPosition(maxX);
    let startY: number = createPosition(maxY);
    while (!authorizedPosition) {
      for (let i = 0; i < unAuthorizedPosition.length; i++) {
        while (startX === unAuthorizedPosition[i].x && startY === unAuthorizedPosition[i].y) {
          startX = createPosition(maxX);
          startY = createPosition(maxY);
        }
      }
      authorizedPosition = true;
    }
    return {
      x: startX,
      y: startY
    }
  };

  const createVilains = (heroPosition: TileActionProps, numberOfVilains: number) => {
    let newX: number[] = [];
    let newY: number[] = [];
    let unAuthorizedPosition: TileActionProps[] = [heroPosition];
    
    for (let i = 0; i < numberOfVilains; i++) {
      const vilainPosition: TileActionProps = getPosition(unAuthorizedPosition);
      unAuthorizedPosition.push(vilainPosition);
      newX.push(vilainPosition.x);
      newY.push(vilainPosition.y);
    }

    setX(newX);
    setY(newY);
  };

  const move = (currentPosition: number, direction: number, max: number): number => {
    const newPosition = currentPosition + direction;
    if (direction === 0 || newPosition >= max || newPosition < 0) return currentPosition;
    return newPosition;
  };

  const moves = (position: TileActionProps) => {
    setX(xVilains.map(posX => {
      const movement = move(posX, position.x, maxX);
      // console.log('X: ', movement)
      return movement;
    }));
    setY(yVilains.map(posY => {
      const movement = move(posY, position.y, maxY);
      // console.log('Y: ', movement)
      return movement;
    }));
  };

  return { xVilains, yVilains, moves, createVilains };
};
