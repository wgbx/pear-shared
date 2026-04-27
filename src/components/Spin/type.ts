import { type ReactNode } from 'react';

export interface SpinProps {
  readonly children?: ReactNode;
  readonly loading?: boolean;
  readonly size?: number;
  readonly indicator?: ReactNode;
  readonly tip?: ReactNode;
  readonly fullscreen?: boolean;
}
