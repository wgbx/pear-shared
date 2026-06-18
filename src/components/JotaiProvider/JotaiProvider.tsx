import { createStore, Provider } from 'jotai';
import type { ReactElement } from 'react';
import { useState } from 'react';

import type { JotaiProviderProps } from './type';

/**
 * Creates an isolated Jotai store scope for a business module.
 * Wrap a module root so internal components share state via atoms
 * without props drilling. Each mount gets its own store by default.
 */
export function JotaiProvider({
  children,
  store,
}: JotaiProviderProps): ReactElement {
  const [internalStore] = useState(createStore);

  return <Provider store={store ?? internalStore}>{children}</Provider>;
}
