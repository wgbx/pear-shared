import {
  AlignCenterLine,
  AlignLeftLine,
  AlignRightLine,
} from '@mingcute/react';
import { useMemo, type ReactElement } from 'react';

import { IconToggle, type IconToggleProps } from '../IconToggle';

import { TextAlign, type TextAlignOption } from './type';

export interface TextAlignToggleProps
  extends Omit<IconToggleProps<TextAlign>, 'options'> {
  /**
   * The text alignment options to display.
   * If not provided, all default options (LEFT, CENTER, RIGHT) will be displayed.
   */
  options?: (TextAlign | `${TextAlign}`)[];
}

export const ALIGN_OPTIONS: TextAlignOption[] = [
  { value: TextAlign.LEFT, icon: AlignLeftLine, label: 'Align left' },
  { value: TextAlign.CENTER, icon: AlignCenterLine, label: 'Align center' },
  { value: TextAlign.RIGHT, icon: AlignRightLine, label: 'Align right' },
];

export function TextAlignToggle({
  defaultValue = TextAlign.LEFT,
  options,
  ...props
}: TextAlignToggleProps): ReactElement {
  const displayOptions = useMemo(() => {
    if (!options || options.length === 0) return ALIGN_OPTIONS;
    return ALIGN_OPTIONS.filter((item) => options.includes(item.value));
  }, [options]);

  return (
    <IconToggle<TextAlign>
      options={displayOptions}
      defaultValue={defaultValue}
      {...props}
    />
  );
}

export { TextAlign };
