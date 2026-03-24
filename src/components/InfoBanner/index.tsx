import { Stack, Typography, type TypographyProps, type StackProps, styled } from '@mui/material'
import { type ReactNode, type ComponentType, type SVGProps } from 'react'

import { ReactComponent as BookmarkSquareIcon } from '@svg/bookmark-square.svg'

const BannerContainer = styled(Stack, {
  name: 'InfoBanner',
  slot: 'root'
})(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette?.shades?.a5,
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1.5)
}))

const InfoBannerDescription = styled(Typography, {
  name: 'InfoBanner',
  slot: 'description'
})(({ theme }) => ({
  color: theme.palette?.shades?.[900],
  fontSize: '0.75rem',
  fontWeight: 500,
  lineHeight: 1.4
}))

interface InfoBannerProps {
  children?: ReactNode
  description?: ReactNode
  icon?: ComponentType<SVGProps<SVGSVGElement>>
  slotProps?: {
    root?: StackProps
    description?: TypographyProps
    icon?: SVGProps<SVGSVGElement>
  }
}

export function InfoBanner({ children, description, icon: IconComponent = BookmarkSquareIcon, slotProps }: InfoBannerProps) {
  return (
    <BannerContainer {...slotProps?.root}>
      <Stack sx={{ position: 'absolute', top: 0, right: 12 }}>
        <IconComponent {...slotProps?.icon} width={slotProps?.icon?.width ?? 12} height={slotProps?.icon?.height ?? 12} />
      </Stack>

      {description ? <InfoBannerDescription {...slotProps?.description}>{description}</InfoBannerDescription> : children}
    </BannerContainer>
  )
}
