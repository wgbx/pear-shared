import type { createStore } from 'jotai';
import type { ReactNode } from 'react';

export type JotaiStore = ReturnType<typeof createStore>;

export interface JotaiProviderProps {
  children?: ReactNode;
  /**
   * Optional external store (SSR hydration / testing).
   * When omitted, an isolated store is created for this module instance.
   */
  store?: JotaiStore;
}
