interface UseCopyToClipboardWithAlertOptions {
    successMessage: string;
    errorMessage: string;
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
export declare function useCopyToClipboard(): {
    copyToClipboard: (this: unknown, text: string | null | undefined, options?: UseCopyToClipboardWithAlertOptions | undefined) => Promise<void>;
};
export {};
