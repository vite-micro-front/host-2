import { GlobalContext } from "@vite-micro-front/contracts/context";

declare module "board/page" {
  export const Component: () => JSX.Element;
}

declare module "board/eager" {}
