export interface HeroProps {
  size: number;
  Xposition: number;
  Yposition: number;
  // item: TileItemTypes;
  onAction?: (position: TileActionProps) => void;
}
