import { useMemoizedFn } from 'ahooks';

import { useAlert } from '../../components/Alert';

interface UseCopyToClipboardWithAlertOptions {
  successMessage: string;
  errorMessage: string;
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
}

const DEFAULT_SUCCESS_MESSAGE = 'Copied to clipboard';
const DEFAULT_ERROR_MESSAGE = 'Failed to copy to clipboard';

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
      options: UseCopyToClipboardWithAlertOptions = {
        successMessage: DEFAULT_SUCCESS_MESSAGE,
        errorMessage: DEFAULT_ERROR_MESSAGE,
      },
    ) => {
      if (text) {
        const { successMessage, errorMessage, onSuccess, onError } = options;

        try {
          await navigator.clipboard.writeText(text);
          if (successMessage) {
            success(successMessage);
          }
          onSuccess?.();
        } catch (err) {
          if (errorMessage) {
            error(errorMessage);
          }
          onError?.(err);
        }
      }
    },
  );

  return {
    copyToClipboard,
  };
}
