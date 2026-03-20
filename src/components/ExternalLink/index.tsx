import { Link, type LinkProps, styled } from '@mui/material';
import type { ReactNode } from 'react';
import React from 'react';

const StyledExternalLink = styled(Link, {
  name: 'ExternalLink',
  slot: 'root',
})(() => ({
  fontSize: 'inherit',
  fontWeight: 'inherit',
  color: 'inherit',
}));

interface ExternalLinkProps extends LinkProps {
  children: ReactNode;
  href: string;
}

export function ExternalLink({
  children,
  href,
  target = '_blank',
  rel = 'noopener noreferrer',
  ...restProps
}: ExternalLinkProps) {
  return (
    <StyledExternalLink
      component="a"
      href={href}
      target={target}
      rel={rel}
      {...restProps}
    >
      {children}
    </StyledExternalLink>
  );
}
