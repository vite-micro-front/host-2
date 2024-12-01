import { createBrowserRouter } from "react-router-dom";
import { App } from "./app";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        lazy: async () => await import("../pages/home"),
      },
      {
        path: "boards/:id",
        lazy: async () => await import("board/page"),
      },
    ],
  },
]);
