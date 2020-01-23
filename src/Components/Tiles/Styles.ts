import styled from 'styled-components';

interface StyledTileProps {
  size?: number;
}

export const StyledTile = styled.div`
  width: ${(props: StyledTileProps) => `${props.size ? props.size : 10}px`};
  height: ${(props: StyledTileProps) => `${props.size ? props.size : 10}px`};
`;

export const StyledTiles = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: ${(props: StyledTileProps) => `${props.size ? props.size : 10}px`};
`;
