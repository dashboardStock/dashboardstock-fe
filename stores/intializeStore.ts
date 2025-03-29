import { createStore } from "./stockStore";

let store: ReturnType<typeof createStore> | undefined;

export function initializeStore(): ReturnType<typeof createStore> {
  //서버
  if (typeof window === "undefined") return createStore();
  //클라이언트
  if (!store) store = createStore();

  return store;
}
