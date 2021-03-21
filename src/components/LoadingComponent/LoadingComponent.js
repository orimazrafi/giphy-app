import React, { useContext } from "react";
import { LoaderWrapper } from "../../elements";
import { ThemeContext } from "styled-components";
import Loader from "react-loader-spinner";

const LoadingComponent = () => {
  const globalTheme = useContext(ThemeContext);

  return (
    <LoaderWrapper>
      <Loader
        type="TailSpin"
        color={globalTheme.loaderColor}
        height={100}
        width={100}
      />
    </LoaderWrapper>
  );
};
export default LoadingComponent;
