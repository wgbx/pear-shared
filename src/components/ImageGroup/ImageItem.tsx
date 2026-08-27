import {
  Box,
  Stack,
  styled,
  type BoxProps,
  type StackProps,
} from '@mui/material';
import { useMemoizedFn } from 'ahooks';

import { Image } from '@/components/Image';
import type { ImageProps } from '@/components/Image/type';
import { MaybeClickable } from '@/components/MaybeClickable';

const DEFAULT_ITEM_SIZE = 24;

export interface ImageGroupItem {
  src: string;
  alt?: string;
  [key: string]: string | undefined;
}

const Item = styled(Box, {
  name: 'ImageGroup',
  slot: 'item',
})(({ theme }) => ({
  width: 24,
  height: 24,
  borderRadius: 4,
  overflow: 'hidden',
  position: 'relative',
  border: '1px solid',
  borderColor: theme.palette?.common?.white,
}));

const OverflowOverlay = styled(Stack, {
  name: 'ImageGroup',
  slot: 'overflowItem',
})(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette?.common?.white,
  fontWeight: 700,
  fontSize: '0.625rem',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
}));

export type ImageGroupImgSlotProps = Omit<ImageProps, 'src' | 'alt'> & {
  src?: string;
  alt?: string;
  sx?: BoxProps['sx'];
};

export interface ImageItemProps {
  item: ImageGroupItem;
  onItemClick?: (item: ImageGroupItem) => void;
  showCount: boolean;
  count: number;
  slotProps?: {
    item?: BoxProps;
    img?: ImageGroupImgSlotProps;
    count?: StackProps;
  };
}

export function ImageItem(props: ImageItemProps) {
  const { item, onItemClick, showCount, count, slotProps } = props;
  const {
    sx,
    width = DEFAULT_ITEM_SIZE,
    height = DEFAULT_ITEM_SIZE,
    slotProps: imageSlotProps,
    ...imgProps
  } = slotProps?.img ?? {};

  const handleClick = useMemoizedFn(() => {
    onItemClick?.(item);
  });

  return (
    <MaybeClickable
      component={Item}
      onClick={handleClick}
      enabled={Boolean(onItemClick)}
      {...slotProps?.item}
    >
      <Image
        src={item.src}
        alt={item.alt ?? ''}
        fill
        width={width}
        height={height}
        {...imgProps}
        slotProps={{
          ...imageSlotProps,
          root: {
            ...imageSlotProps?.root,
            sx,
          },
        }}
      />

      {showCount && (
        <OverflowOverlay {...slotProps?.count}>{`${count}+`}</OverflowOverlay>
      )}
    </MaybeClickable>
  );
}
