import React from "react";
import { LoaderWrapper } from "../../elements";
import Loader from "react-loader-spinner";
const LoadingComponent = () => {
  return (
    <LoaderWrapper>
      <Loader type="TailSpin" color="#00BFFF" height={100} width={100} />
    </LoaderWrapper>
  );
};
export default LoadingComponent;
