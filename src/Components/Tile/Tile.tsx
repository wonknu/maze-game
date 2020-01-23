import React from "react";
import { TileProps } from './types.d';

import { StyledTile } from './Styles';

const Tile: React.FC<TileProps> = ({
  size,
  Xposition,
  Yposition,
  item,
  onAction,
  canMove = false,
}) => {

  const action = (e: React.MouseEvent) => {
    if (onAction && canMove) onAction({x: Xposition, y: Yposition, item});
  };

  return (
    <StyledTile onClick={action} canMove={canMove}>
      {item}
      <br/>
      {`(${Xposition}/${Yposition})`}
    </StyledTile>
  )
};

export default Tile;