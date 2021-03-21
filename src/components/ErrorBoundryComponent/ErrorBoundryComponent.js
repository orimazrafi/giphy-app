import { ErrorBoundary } from "react-error-boundary";

const ErrorFallback = ({ error }) => {
  return <h2>something went wrong!{error.message}</h2>;
};

const ErrorBoundryComponent = (InnerComp) => (props) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <InnerComp {...props} />
    </ErrorBoundary>
  );
};

export default ErrorBoundryComponent;
