import {
  Stack,
  styled,
  Typography,
  type StackProps,
  type SvgIconProps,
  type TypographyProps,
} from '@mui/material';
import { BookmarkSquareIcon } from '@svg/index';
import { type ComponentType, type ReactNode } from 'react';

const BannerContainer = styled(Stack, {
  name: 'InfoBanner',
  slot: 'root',
})(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette?.shades?.a5,
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1.5),
}));

const InfoBannerDescription = styled(Typography, {
  name: 'InfoBanner',
  slot: 'description',
})(({ theme }) => ({
  color: theme.palette?.shades?.[900],
  fontSize: '0.75rem',
  fontWeight: 500,
  lineHeight: 1.4,
}));

export interface InfoBannerProps {
  children?: ReactNode;
  description?: ReactNode;
  icon?: ComponentType<SvgIconProps>;
  slotProps?: {
    root?: StackProps;
    description?: TypographyProps;
    icon?: SvgIconProps;
  };
}

export function InfoBanner({
  children,
  description,
  icon: IconComponent = BookmarkSquareIcon,
  slotProps,
}: InfoBannerProps) {
  return (
    <BannerContainer {...slotProps?.root}>
      <Stack sx={{ position: 'absolute', top: 0, right: 12 }}>
        <IconComponent sx={{ fontSize: 12 }} {...slotProps?.icon} />
      </Stack>

      {description ? (
        <InfoBannerDescription {...slotProps?.description}>
          {description}
        </InfoBannerDescription>
      ) : (
        children
      )}
    </BannerContainer>
  );
}
