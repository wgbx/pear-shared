import { useMemoizedFn } from 'ahooks';

import {
  WEB_SHARE_LINK_DEFAULT_ERROR_MESSAGE,
  WEB_SHARE_LINK_DEFAULT_SUCCESS_MESSAGE,
} from '@constants';
import { useAlert } from '../../components/Alert';
import { useCopyToClipboard } from '../useCopyToClipboard';

interface UseWebShareLinkOptions {
  url: string;
  title?: string;
  text?: string;
  successMessage?: string;
  errorMessage?: string;
  onShareStart?: () => void | Promise<void>;
  onShareSuccess?: () => void;
  onShareCancel?: () => void;
  onShareFail?: (error: Error) => void;
}

interface UseWebShareLinkReturn {
  handleShare: () => Promise<void>;
}

export function useWebShareLink(
  options: UseWebShareLinkOptions,
): UseWebShareLinkReturn {
  const {
    url,
    title,
    text,
    successMessage = WEB_SHARE_LINK_DEFAULT_SUCCESS_MESSAGE,
    errorMessage = WEB_SHARE_LINK_DEFAULT_ERROR_MESSAGE,
    onShareStart,
    onShareSuccess,
    onShareCancel,
    onShareFail,
  } = options;

  const { success, error } = useAlert();
  const { copyToClipboard } = useCopyToClipboard();

  const handleShare = useMemoizedFn(async () => {
    await onShareStart?.();

    let hasShared = true;
    let hasCopied = true;

    await copyToClipboard(url, {
      showMessage: false,
      onError: () => {
        hasCopied = false;
      },
    });

    try {
      await navigator.share({ title, text, url });
      onShareSuccess?.();
    } catch (err) {
      const shareError = err as Error;
      hasShared = false;
      if (shareError.name === 'AbortError') {
        onShareCancel?.();
      } else {
        onShareFail?.(err as Error);
      }
    }

    if (!hasShared && !hasCopied) {
      error(errorMessage);
    } else {
      success(successMessage);
    }
  });

  return {
    handleShare,
  };
}
