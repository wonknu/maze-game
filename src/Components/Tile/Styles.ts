import styled from 'styled-components';

interface StyledTileProps {
  canMove?: boolean;
}

const background = '#FF0000';

export const StyledTile = styled.div`
  border: 2px solid #c1c1c1;
  background: ${background};
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  &:hover {
    background: ${(props: StyledTileProps) => props.canMove ? '#0000FF' : background};
    cursor: ${(props: StyledTileProps) => props.canMove ? 'pointer' : 'auto'};
  }
`;
