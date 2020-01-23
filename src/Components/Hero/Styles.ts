import styled from 'styled-components';

interface StyledHeroProps {
  size?: number;
  x?: number;
  y?: number;
}

export const StyledHero = styled.div`
  background: #00FF00;
  width: ${(props: StyledHeroProps) => `${props.size ? props.size : 10}px`};
  height: ${(props: StyledHeroProps) => `${props.size ? props.size : 10}px`};
  left: ${(props: StyledHeroProps) => `${props.size && props.x ? props.size * props.x : 0}px`};
  top: ${(props: StyledHeroProps) => `${props.size && props.y ? props.size * props.y : 0}px`};
  position: absolute;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;
