import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter as Router } from "react-router-dom";
import { CLIENT_ID, APP_DOMAIN } from "./constants";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import NavbarWrapper from "./components/NavbarWrapper/NavbarWrapper";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./themes";
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <Auth0Provider
          domain={APP_DOMAIN}
          clientId={CLIENT_ID}
          redirectUri={window.location.origin + "/home-page"}
        >
          <NavbarWrapper>
            <ThemeProvider theme={lightTheme}>
              <App />
            </ThemeProvider>
          </NavbarWrapper>
        </Auth0Provider>
      </React.StrictMode>
    </Router>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
