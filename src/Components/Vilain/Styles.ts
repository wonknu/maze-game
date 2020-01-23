import styled from 'styled-components';

interface StyledVilainProps {
  size?: number;
  x?: number;
  y?: number;
}

export const StyledVilain = styled.div`
  background: #fffa00;
  width: ${(props: StyledVilainProps) => `${props.size ? props.size : 10}px`};
  height: ${(props: StyledVilainProps) => `${props.size ? props.size : 10}px`};
  left: ${(props: StyledVilainProps) => `${props.size && props.x ? props.size * props.x : 0}px`};
  top: ${(props: StyledVilainProps) => `${props.size && props.y ? props.size * props.y : 0}px`};
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;
