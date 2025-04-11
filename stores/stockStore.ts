import { SetDataAction, StoreState } from "@/types/global";
import { makeAutoObservable } from "mobx";

export function createStore() {
  const state: StoreState = {
    data: "",
  };

  const setData: SetDataAction = (data) => {
    state.data = data;
  };

  makeAutoObservable({ state, setData });

  return { state, setData };
}
