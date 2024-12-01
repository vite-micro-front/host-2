import { Link } from "react-router-dom";
import {
  BoardAddedEvent,
  BoardDeletedEvent,
} from "@vite-micro-front/contracts/events";

import { Board, BoardId } from "@vite-micro-front/contracts/kernel";
import { useDispatch, useSelector } from "react-redux";
import { createSlice } from "@reduxjs/toolkit";
import { rootReducer } from "../../store/store";

const boardsSlice = createSlice({
  name: "host/board",
  reducers: {},
  initialState: {
    list: [] as Board[],
  },
  selectors: {
    getBoards: (state) => {
      return state.list;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(
      "board/deleted/v1" satisfies BoardDeletedEvent["type"],
      (state, action: BoardDeletedEvent) => {
        state.list.filter((board) => board.id !== action.payload.boardId);
      }
    );
    builder.addCase(
      "board/added/v1" satisfies BoardAddedEvent["type"],
      (state, action: BoardAddedEvent) => {
        state.list.push(action.payload);
      }
    );
  },
}).injectInto(rootReducer);

export function HomePage() {
  const boards = useSelector(boardsSlice.selectors.getBoards);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Home</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const title = formData.get("title") as string;
          dispatch({
            type: "board/added/v1",
            payload: {
              title,
              id: crypto.randomUUID() as BoardId,
            },
          } satisfies BoardAddedEvent);
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
