import { createContext, useContext } from 'react';
import { DRAWER_STYLE_TYPE, type DrawerStyleType } from './type';

export const DrawerStyleTypeContext = createContext<DrawerStyleType>(
  DRAWER_STYLE_TYPE.DEFAULT,
);

export function useDrawerStyleType(
  styleType?: DrawerStyleType,
): DrawerStyleType {
  const contextStyleType = useContext(DrawerStyleTypeContext);
  return styleType ?? contextStyleType;
}
