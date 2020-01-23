export interface VilainProps {
  size: number;
  Xposition: number;
  Yposition: number;
  index: number;
  // item: TileItemTypes;
  onAction?: (position: TileActionProps) => void;
}
