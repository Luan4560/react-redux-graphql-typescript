import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "./App";
import { store } from "./hooks/store";
import { apolloClient } from "./schemas";
import { ApolloProvider } from "@apollo/client";
import { GlobalStyle } from "./styles/GlobalStyle";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <App />
        <GlobalStyle />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
);
