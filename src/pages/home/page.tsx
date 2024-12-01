import { useState } from "react";
import { Link } from "react-router-dom";

type Board = {
  id: string;
  title: string;
};

export function HomePage() {
  const [boards, setBoards] = useState<Board[]>([
    {
      id: "1",
      title: "Board 1",
    },
  ]);
  return (
    <div>
      <h1>Home</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const title = formData.get("title") as string;
          setBoards([...boards, { id: crypto.randomUUID(), title }]);
        }}
      >
        <input name="title" type="text" />
        <button type="submit">Create Board</button>
      </form>

      <div>
        {boards.map((board) => (
          <Link to={`/boards/${board.id}`} key={board.id}>
            {board.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
