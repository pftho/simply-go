import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ConfigProvider } from "antd";
import React from "react";
import ReactDOM from "react-dom";
import GoogleFontLoader from "react-google-font-loader";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { AuthProviderWrapper } from "./context/auth.context";
import queryClient from "./reactQuery";
import "./reset.css";
import "./styles.scss";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AuthProviderWrapper>
            <GoogleFontLoader fonts={[{ font: "Lato" }, { font: "Lobster" }]} />{" "}
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#f0b237",
                  fontFamily: "Lato",
                },
              }}
            >
              <Router />
            </ConfigProvider>
          </AuthProviderWrapper>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
