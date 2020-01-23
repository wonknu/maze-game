import React, { useEffect } from "react";
import { ActionProps } from './types.d';

import { StyledAction } from './Styles';

import { TileActionProps } from "../Tile/types";

const Action: React.FC<ActionProps> = ({
  size,
  Xposition,
  Yposition,
  // // item,
  // onAction,
}) => {

  const action = (newPosition: TileActionProps) => {
    // if (onAction) onAction(newPosition);
  };

  return (
    <StyledAction
      x={Xposition}
      y={Yposition}
      size={size}
      // onClick={action}
        >
      Action
    </StyledAction>
  )
};

export default Action;