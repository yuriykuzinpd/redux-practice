import { createStore } from "./createStore";
import { rootReducer } from "./redux/rootReducer";
import "./styles.css";

const counter = document.getElementById("counter");
const addButton = document.getElementById("add");
const subButton = document.getElementById("sub");
const asyncButton = document.getElementById("async");
const themeButton = document.getElementById("theme");

const store = createStore(rootReducer, 0);
store.subscribe(() => {
    const state = store.getState();
    counter.textContent = state;
});

store.dispatch({type:'INIT_APP'});

addButton.addEventListener("click", () => {
    store.dispatch({type: 'INCREMENT'});
});
subButton.addEventListener("click", () => {
    store.dispatch({type: 'DECREMENT'});
});
asyncButton.addEventListener("click", () => {});
themeButton.addEventListener("click", () => {});
