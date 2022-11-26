import { combineReducers } from "redux";
import { ASYNC_INCREMENT, CHANGE_THEME, DECREMENT, INCREMENT } from "./types";

function counterReducer(state = 0, action) {
  if (action.type === INCREMENT) {
    return state + 1;
  }

  if (action.type === DECREMENT) {
    return state - 1;
  }

  if (action.type === ASYNC_INCREMENT) {
    return state + 1;
  }
  return state;
}

const initialThemeState = {
  value: "light",
};
function themeReducer(state = initialThemeState, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return { ...state, value: state.value === "dark" ? "light" : "dark" };
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
});
