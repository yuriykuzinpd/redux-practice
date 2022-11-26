import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { asyncIncrement, decrement, increment } from "./redux/actions";
import { rootReducer } from "./redux/rootReducer";
import { DECREMENT, INCREMENT } from "./redux/types";
import "./styles.css";

const counter = document.getElementById("counter");
const addButton = document.getElementById("add");
const subButton = document.getElementById("sub");
const asyncButton = document.getElementById("async");
const themeButton = document.getElementById("theme");

const store = createStore(rootReducer, 0, applyMiddleware(thunk));
store.subscribe(() => {
  const state = store.getState();
  counter.textContent = state;
});

store.dispatch({ type: "INIT_APP" });

addButton.addEventListener("click", () => {
  store.dispatch(increment());
});
subButton.addEventListener("click", () => {
  store.dispatch(decrement());
});
asyncButton.addEventListener("click", () => {
  store.dispatch(asyncIncrement());
});
themeButton.addEventListener("click", () => {});
