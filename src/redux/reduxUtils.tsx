import { bindActionCreators } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { reduxStore } from "./store";


export function NewSlice<X, Y>(slice) {
  const state = (): X => useSelector((state: any) => state[slice.name])
  const actions: Y = bindActionCreators(slice.actions, reduxStore.dispatch)
  return { state, actions };
}

// OLD

// export function NewSlice<T>(Slice) {
//   type StateType = typeof Slice.getInitialState;
//   const state = (): StateType => useSelector((state: any) => state[Slice.name]);
//   const actions = bindActionCreators(Slice.actions, reduxStore.dispatch)
//   return { actions, state };
// }

// export function NewSlice2<T extends Slice>(Slice: T) {
//   type ActionsType = typeof Slice.actions;
//   type StateType = typeof Slice.getInitialState;
//   const actions: ActionsType = bindActionCreators(Slice.actions, reduxStore.dispatch)
//   const state: StateType = reduxStore.getState()[Slice.name];
//   return { actions, state };
// }

