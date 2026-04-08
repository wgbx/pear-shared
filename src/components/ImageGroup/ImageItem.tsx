import {
  Box,
  Stack,
  styled,
  type BoxProps,
  type StackProps,
} from '@mui/material';
import { useMemoizedFn } from 'ahooks';
import type { ImgHTMLAttributes } from 'react';

export interface ImageGroupItem {
  src: string;
  alt?: string;
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

const Img = styled('img', {
  name: 'ImageGroup',
  slot: 'img',
})(() => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
}));

export interface ImageItemProps {
  item: ImageGroupItem;
  onItemClick?: (item: ImageGroupItem) => void;
  showCount: boolean;
  count: number;
  slotProps?: {
    item?: BoxProps;
    img?: ImgHTMLAttributes<HTMLImageElement> & { sx?: BoxProps['sx'] };
    count?: StackProps;
  };
}

export function ImageItem(props: ImageItemProps) {
  const { item, onItemClick, showCount, count, slotProps } = props;

  const handleClick = useMemoizedFn(() => {
    onItemClick?.(item);
  });

  return (
    <Item onClick={handleClick} {...slotProps?.item}>
      <Img src={item.src} alt={item.alt ?? ''} {...slotProps?.img} />

      {showCount && (
        <OverflowOverlay {...slotProps?.count}>{`${count}+`}</OverflowOverlay>
      )}
    </Item>
  );
}
