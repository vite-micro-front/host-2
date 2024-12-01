import { createBrowserRouter } from "react-router-dom";
import { App } from "./app";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: async () => {
      await import("board/eager" as any);
      return {};
    },
    children: [
      {
        index: true,
        lazy: async () => await import("../pages/home"),
      },
      {
        path: "boards/:id",
        lazy: async () => await import("board/page" as any),
      },
    ],
  },
]);
