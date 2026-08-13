import { Children, isValidElement, type ReactNode } from 'react';

import { isString } from '@utils/function';

function getComponentName(type: unknown): string | undefined {
  if (!type || isString(type)) {
    return undefined;
  }

  const named = type as {
    displayName?: string;
    name?: string;
    render?: { displayName?: string; name?: string };
    type?: unknown;
  };

  return (
    named.displayName ||
    named.name ||
    named.render?.displayName ||
    named.render?.name ||
    getComponentName(named.type) ||
    undefined
  );
}

export function getIconAriaLabel(children: ReactNode): string | undefined {
  const child = Children.toArray(children).find(isValidElement);
  if (!child) {
    return undefined;
  }

  return getComponentName(child.type);
}
