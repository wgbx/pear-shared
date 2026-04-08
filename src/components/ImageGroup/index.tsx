import { Stack, styled, type BoxProps, type StackProps } from '@mui/material';
import type { Theme } from '@mui/material/styles';
import { useCreation } from 'ahooks';
import type { ImgHTMLAttributes } from 'react';

import { MaybeClickable } from '../MaybeClickable';
import { ImageItem, type ImageGroupItem } from './ImageItem';

export interface ImageGroupProps {
  items: ImageGroupItem[];
  max?: number;
  overlap?: number;
  onClick?: () => void;
  itemKey?: string;
  onItemClick?: (item: ImageGroupItem) => void;
  slotSxProps?: {
    root?: any;
    item?: any;
    overflowItem?: any;
    img?: any;
  };
  slotProps?: {
    root?: StackProps;
    item?: BoxProps;
    overflowItem?: BoxProps;
    img?: ImgHTMLAttributes<HTMLImageElement>;
  };
}

const Root = styled(Stack, {
  name: 'ImageGroup',
  slot: 'root',
})(() => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
}));

export function ImageGroup(props: ImageGroupProps) {
  const {
    items,
    max = 4,
    overlap = 1,
    onClick,
    onItemClick,
    slotProps,
    itemKey = 'id',
  } = props;

  const visibleItems = useCreation(() => {
    return items.slice(0, max);
  }, [items, max]);

  const count = useCreation(() => {
    const num = Math.max(0, items.length - max);
    return num > 0 ? num : 0;
  }, [items, max]);

  return (
    <MaybeClickable
      component={Root}
      onClick={onClick}
      sx={{
        ...(overlap && {
          '& > *:not(:first-of-type)': {
            marginLeft: (theme: Theme) => `-${theme.spacing(overlap)}`,
          },
        }),
        ...slotProps?.root?.sx,
      }}
      {...slotProps?.root}
    >
      {visibleItems.map((item, index) => {
        const showCount = count > 0 && index === visibleItems.length - 1;
        return (
          <ImageItem
            key={item[itemKey]}
            item={item}
            showCount={showCount}
            count={count}
            onItemClick={onItemClick}
            slotProps={slotProps}
          />
        );
      })}
    </MaybeClickable>
  );
}
