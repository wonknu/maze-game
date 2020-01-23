import { useState, useEffect, useRef } from 'react';
import { TileItemTypes, TileActionProps } from "../Tile/types";

const usePrevious = <T extends {}>(value: T) => {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const hasDifferentPosition = (prevPosition: TileActionProps, nextPosition: TileActionProps) => {
  return prevPosition.x !== nextPosition.x || prevPosition.y !== nextPosition.y;
};

export const useAction = () => {
  const [tiles, setTiles] = useState<Array<Array<TileItemTypes>>>();
  const prevTiles = usePrevious({tiles, setTiles});

  const [vilains, setVilains] = useState<Array<TileActionProps>>();
  const prevVilains = usePrevious({vilains, setVilains});
  
  const [hero, setHero] = useState<TileActionProps>();
  const prevHero = usePrevious({hero, setHero});

  useEffect(() => {
    if (hero && vilains) {
      if (prevHero && prevHero.hero && prevVilains && prevVilains.vilains) {
        vilains.map((vilain, index) => {
          const prevVilain: TileActionProps | null = prevVilains.vilains && prevVilains.vilains[index] ? prevVilains.vilains[index] : null;
          const samePosition: boolean = !hasDifferentPosition(vilain, hero);
          if (prevVilain && prevHero.hero && samePosition) {
            if (hasDifferentPosition(prevVilain, vilain)) {
              console.log(`vilain ${index} moved to hero`);
            }
            if (hasDifferentPosition(prevHero.hero, hero)) {
              console.log(`hero moved to vilain ${index}`);
            }
          }
        })
      }
    }
    return () => {};
  }, [tiles, vilains, hero]);

  const checkActions = (tiles: TileItemTypes[][], vilains: TileActionProps[], hero: TileActionProps) => {
    setTiles(tiles);
    setVilains(vilains);
    setHero(hero);
  };

  return { checkActions };
};
