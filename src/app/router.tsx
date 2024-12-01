import { createBrowserRouter, Link } from "react-router-dom";
import { App } from "./app";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: async () => {
      try {
        await import("board/eager" as any).catch();
      } catch (e) {
        return {};
      }

      return {};
    },
    children: [
      {
        index: true,
        lazy: async () => await import("../pages/home"),
      },
      {
        ErrorBoundary() {
          return (
            <div>
              <h1>Service board грустит</h1>
              <Link to="/">Home</Link>
            </div>
          );
        },
        children: [
          {
            path: "boards/:id",
            lazy: async () => await import("board/page" as any),
          },
        ],
      },
    ],
  },
]);
