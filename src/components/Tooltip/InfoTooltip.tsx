'use client';

import { styled } from '@mui/material';
import { InformationLine } from '@mingcute/react';
import type { ReactElement } from 'react';

import { Tooltip } from './Tooltip';
import type { InfoTooltipProps } from './type';
import { isString } from '@/utils/function';

const StyledInformationLine = styled(InformationLine)({
  cursor: 'pointer',
  width: '1em',
  height: '1em',
  flexShrink: 0,
});

export function InfoTooltip({
  description,
  placement = 'top',
  sx,
  ...tooltipProps
}: InfoTooltipProps): ReactElement {
  return (
    <Tooltip description={description} placement={placement} {...tooltipProps}>
      <StyledInformationLine
        aria-label={isString(description) ? description : 'More information'}
        sx={{ color: 'shades.600', fontSize: '1rem', ...sx }}
      />
    </Tooltip>
  );
}
