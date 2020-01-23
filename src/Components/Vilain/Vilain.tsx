import React, { useEffect } from "react";
import { VilainProps } from './types.d';

import { StyledVilain } from './Styles';

const Vilain: React.FC<VilainProps> = ({
  size,
  Xposition,
  Yposition,
  // item,
  onAction,
  index
}) => {
  const action = (e: React.MouseEvent) => {
    // if (onAction) onAction({x: Xposition, y: Yposition, item});
  };

  return (
    <StyledVilain
      x={Xposition}
      y={Yposition}
      size={size}
      onClick={action} >
      Vilain
      <br/>
      ({index})
    </StyledVilain>
  )
};

export default Vilain;