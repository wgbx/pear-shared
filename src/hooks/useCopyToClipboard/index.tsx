import { useMemoizedFn } from 'ahooks';

import { useAlert } from '@/components/Alert';
import {
  COPY_TO_CLIPBOARD_DEFAULT_ERROR_MESSAGE,
  COPY_TO_CLIPBOARD_DEFAULT_SUCCESS_MESSAGE,
} from '@/constants';

export interface UseCopyToClipboardWithAlertOptions {
  showMessage?: boolean;
  successMessage?: string;
  errorMessage?: string;
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
}

/**
 * Hook for copying text to clipboard with alert support
 *
 * @returns An object containing the `copyToClipboard` function
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { copyToClipboard } = useCopyToClipboard();
 *
 *   const handleCopy = () => {
 *     copyToClipboard('Text to copy');
 *   };
 *
 *   return <button onClick={handleCopy}>Copy</button>;
 * }
 * ```
 *
 * @example
 * ```tsx
 * // Custom messages
 * function MyComponent() {
 *   const t = useTranslation();
 *   const { copyToClipboard } = useCopyToClipboard();
 *
 *   return (
 *     <button
 *       onClick={() =>
 *         copyToClipboard('Text', {
 *           successMessage: t('CustomSuccessMessage'),
 *           errorMessage: t('CustomErrorMessage'),
 *         })
 *       }
 *     >
 *       Copy
 *     </button>
 *   );
 * }
 * ```
 */
export function useCopyToClipboard() {
  const { success, error } = useAlert();

  const copyToClipboard = useMemoizedFn(
    async (
      text: string | null | undefined,
      options: UseCopyToClipboardWithAlertOptions = {},
    ) => {
      if (!text) {
        return;
      }

      const {
        showMessage = true,
        successMessage = COPY_TO_CLIPBOARD_DEFAULT_SUCCESS_MESSAGE,
        errorMessage = COPY_TO_CLIPBOARD_DEFAULT_ERROR_MESSAGE,
        onSuccess,
        onError,
      } = options;

      try {
        await navigator.clipboard.writeText(text);
        if (showMessage && successMessage) {
          success(successMessage);
        }
        onSuccess?.();
      } catch (err) {
        if (showMessage && errorMessage) {
          error(errorMessage);
        }
        onError?.(err);
      }
    },
  );

  return {
    copyToClipboard,
  };
}
