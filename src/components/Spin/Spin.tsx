import { Backdrop, Box, styled } from '@mui/material';
import { type ReactElement } from 'react';
import { CircularProgressIcon } from './CircularProgressIcon';
import { type SpinProps } from './type';

const StyledLoadingOuter = styled(Box, {
  name: 'Spin',
  slot: 'loadingOuter',
})(({ theme }) => ({
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(5),
}));

const StyledLoadingContainer = styled(Box, {
  name: 'Spin',
  slot: 'loadingContainer',
})(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1),
  marginTop: theme.spacing(2),
}));

const StyledWrapper = styled(Box, {
  name: 'Spin',
  slot: 'wrapper',
})({
  position: 'relative',
  display: 'inline-block',
  width: '100%',
});

const StyledLoadingMask = styled(Box, {
  name: 'Spin',
  slot: 'loadingMask',
})(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(255, 255, 255, 0.65)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 10,
  flexDirection: 'column',
}));

const StyledBlurContent = styled('div', {
  name: 'Spin',
  slot: 'blurContent',
})({
  filter: 'blur(2px)',
  userSelect: 'none',
  pointerEvents: 'none',
});

const StyledTip = styled(Box, {
  name: 'Spin',
  slot: 'tip',
})(({ theme }) => ({
  fontSize: '0.875rem',
  color: theme.palette.shades[900],
  marginTop: theme.spacing(1),
}));

const StyledFullscreenBackdrop = styled(Backdrop, {
  name: 'Spin',
  slot: 'fullscreenBackdrop',
})(({ theme }) => ({
  zIndex: 1201,
  color: theme.palette.primary.main,
  flexDirection: 'column',
}));

export function Spin({
  children,
  loading = true,
  size,
  indicator,
  tip,
  fullscreen = false,
}: SpinProps): ReactElement {
  const spinnerElement = indicator || <CircularProgressIcon size={size} />;
  if (fullscreen) {
    if (!loading) {
      return <></>;
    }
    return (
      <StyledFullscreenBackdrop open>
        {spinnerElement}
        {tip ? <StyledTip>{tip}</StyledTip> : null}
      </StyledFullscreenBackdrop>
    );
  }

  if (!loading) {
    return <>{children}</>;
  }

  if (!children) {
    return (
      <StyledLoadingOuter>
        <StyledLoadingContainer>
          {spinnerElement}
          {tip ? <StyledTip>{tip}</StyledTip> : null}
        </StyledLoadingContainer>
      </StyledLoadingOuter>
    );
  }

  return (
    <StyledWrapper>
      <StyledBlurContent>{children}</StyledBlurContent>
      <StyledLoadingMask>
        {spinnerElement}
        {tip ? <StyledTip>{tip}</StyledTip> : null}
      </StyledLoadingMask>
    </StyledWrapper>
  );
}

Spin.displayName = 'Spin';
