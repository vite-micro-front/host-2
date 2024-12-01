import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { rootReducer, store } from "../store/store";
import { GlobalContext } from "@vite-micro-front/contracts/context";

declare global {
  interface Window {
    context: GlobalContext;
  }
}

window.context = {
  store: store,
  rootReducer: rootReducer,
  routes: {
    home: "/",
    board: (id: string) => `/board/${id}`,
  },
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
