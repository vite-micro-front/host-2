import React, { Suspense, useEffect } from "react";
import { HomePage } from "../pages/home";

const Board = React.lazy(() =>
  import("board/page").then((m) => ({ default: m.Component }))
);

function App() {
  useEffect(() => {
    import("board/page").then(console.log);
  }, []);

  return (
    <>
      <HomePage />
      <Suspense fallback={<div>Loading</div>}>
        <Board />
      </Suspense>
    </>
  );
}

export default App;
