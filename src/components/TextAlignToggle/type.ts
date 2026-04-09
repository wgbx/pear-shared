import { AlignLeftLine } from '@mingcute/react';

export  interface TextAlignOption {
  value: TextAlign;
  Icon: typeof AlignLeftLine;
  label: string;
}

export enum TextAlign {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
}
