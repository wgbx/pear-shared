import {
  Component,
  type ComponentClass,
  type ErrorInfo,
  type ReactNode,
} from 'react';

export interface ErrorBoundaryProps {
  children: ReactNode;
  fallbackComponent?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  info: ErrorInfo | null;
}

class ErrorBoundaryImpl extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = {
    hasError: false,
    error: null,
    info: null,
  };

  static getDerivedStateFromError(): Partial<ErrorBoundaryState> {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    this.setState({ error, info });
  }

  render() {
    const { hasError } = this.state;
    const { children, fallbackComponent } = this.props;

    if (hasError) {
      return fallbackComponent ?? null;
    }

    return children;
  }
}

/** Typed as ComponentClass so consumers don't hit dual-@types/react JSX errors. */
export const ErrorBoundary: ComponentClass<ErrorBoundaryProps> =
  ErrorBoundaryImpl;
