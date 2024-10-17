import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@scss/index.scss";
import reportWebVitals from "../reportWebVitals";
import { lazy } from "react";
import { Suspense } from "react";
import { Spinner } from "evergreen-ui";

const LazyApp = lazy(() => import("./App"));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Suspense fallback={<Spinner size={20} />}>
      <LazyApp />
    </Suspense>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
