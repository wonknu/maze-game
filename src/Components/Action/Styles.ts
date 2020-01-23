import styled from 'styled-components';

interface StyledActionProps {
  size?: number;
  x?: number;
  y?: number;
}

export const StyledAction = styled.div`
  background: purple;
  width: ${(props: StyledActionProps) => `${props.size ? props.size : 10}px`};
  height: ${(props: StyledActionProps) => `${props.size ? props.size : 10}px`};
  left: ${(props: StyledActionProps) => `${props.size && props.x ? props.size * props.x : 0}px`};
  top: ${(props: StyledActionProps) => `${props.size && props.y ? props.size * props.y : 0}px`};
  position: absolute;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;
