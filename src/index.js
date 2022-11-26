import "./styles.css";

const counter = document.getElementById("counter");
const addButton = document.getElementById("add");
const subButton = document.getElementById("sub");
const asyncButton = document.getElementById("async");
const themeButton = document.getElementById("theme");

let state = 0;

addButton.addEventListener("click", () => {
  state++;
  render();
});
subButton.addEventListener("click", () => {
  state--;
  render();
});
asyncButton.addEventListener("click", () => {
  setTimeout(() => {
    state = 0;
    render();
  }, 2000);
  render();
});
themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
function render() {
  counter.textContent = state.toString();
  render();
}

render();
