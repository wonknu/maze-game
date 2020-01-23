export type TileItemTypes = 'exit' | 'weapon' | 'shield' | null;

export interface TileActionProps {
  x: number;
  y: number;
  item?: TileItemTypes;
}

export interface TileProps {
  size: number;
  Xposition: number;
  Yposition: number;
  item: TileItemTypes;
  canMove?: boolean;
  onAction?: (position: TileActionProps) => void;
}
