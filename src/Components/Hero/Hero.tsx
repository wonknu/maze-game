import React, { useEffect } from "react";
import { HeroProps } from './types.d';

import { StyledHero } from './Styles';

import { useKeyPress } from "../../utils/useKeyPress";
import { TileActionProps } from "../Tile/types";

const Hero: React.FC<HeroProps> = ({
  size,
  Xposition,
  Yposition,
  // item,
  onAction,
}) => {
  const arrowUp = useKeyPress('ArrowUp');
  const arrowDown = useKeyPress('ArrowDown');
  const arrowLeft = useKeyPress('ArrowLeft');
  const arrowRight = useKeyPress('ArrowRight');

  const action = (newPosition: TileActionProps) => {
    if (onAction) onAction(newPosition);
  };

  useEffect(() => {
    if (arrowUp) action({x: Xposition, y: Yposition - 1});
    if (arrowDown) action({x: Xposition, y: Yposition + 1});
    if (arrowLeft) action({x: Xposition - 1, y: Yposition});
    if (arrowRight) action({x: Xposition + 1, y: Yposition});
    return () => {};
  }, [arrowUp, arrowDown, arrowRight, arrowLeft]);

  return (
    <StyledHero
      x={Xposition}
      y={Yposition}
      size={size}
      // onClick={action}
        >
      Hero
    </StyledHero>
  )
};

export default Hero;