import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";

import { store } from "../store/store";

export function App() {
  return (
    <>
      <Provider store={store}>
        <Outlet />
      </Provider>
    </>
  );
}
