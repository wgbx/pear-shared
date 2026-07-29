import { useMemoizedFn } from 'ahooks';
import { useState } from 'react';

import { type SelectDropdownOption } from '../../components/SelectDropdown/type';
import { useAnchorEl, type UseAnchorElReturn } from '../useAnchorEl';

export interface UseSelectDropdownOptions<T = string | number> {
  value?: T;
  defaultValue?: T;
  onChange?: (option: SelectDropdownOption<T>) => void;
}

export interface UseSelectDropdownReturn<
  T = string | number,
  E extends HTMLElement = HTMLElement,
> extends UseAnchorElReturn<E> {
  value: T | undefined;
  onChange: (option: SelectDropdownOption<T>) => void;
}

/**
 * Combines {@link useAnchorEl} with selected-value state for `SelectDropdown`.
 *
 * @example
 * ```tsx
 * const { onClick, value, ...selectProps } = useSelectDropdown({
 *   defaultValue: 'inter',
 * });
 *
 * return (
 *   <>
 *     <Button onClick={onClick}>{value}</Button>
 *     <SelectDropdown {...selectProps} options={options} />
 *   </>
 * );
 * ```
 */
export function useSelectDropdown<
  T = string | number,
  E extends HTMLElement = HTMLElement,
>(options: UseSelectDropdownOptions<T> = {}): UseSelectDropdownReturn<T, E> {
  const { value: controlledValue, defaultValue, onChange } = options;
  const anchor = useAnchorEl<E>();
  const [internalValue, setInternalValue] = useState<T | undefined>(
    defaultValue,
  );

  const value = controlledValue ?? internalValue;

  const handleChange = useMemoizedFn((option: SelectDropdownOption<T>) => {
    setInternalValue(option.value);
    onChange?.(option);
  });

  return {
    ...anchor,
    value,
    onChange: handleChange,
  };
}
