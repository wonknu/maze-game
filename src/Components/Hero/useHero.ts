import { useState } from 'react';
import { TileItemTypes, TileActionProps } from "../Tile/types";

export const useHero = (max: TileActionProps) => {
  const [maxX, setMaxX] = useState<number>(max.x);
  const [maxY, setMaxY] = useState<number>(max.y);
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);

  const move = (position: TileActionProps) => {
    if (position.x >= 0 && position.x < maxX) setX(position.x);
    if (position.y >= 0 && position.y < maxY) setY(position.y);
  };

  return { x, y, move };
};
