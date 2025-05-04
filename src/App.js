import useCustomRef from "./hooks/useCustomRef.js";
import useCustomState from "./hooks/useCustomState.js";

import Header from "./components/Header.js";
import Navigation from "./components/Navigation.js";

const $app = document.querySelector("#app");

function render() {
  const [count, setCount] = useCustomState(0);
  const ref = useCustomRef(0);

  function reRender() {
    $app.innerHTML = `
      ${Header()}
      ${Navigation()}
      <h1>SPA with Vanila Javascript</h1>
      <div>Count: ${count.value}</div>
      <button id="state-button">useState Button</button>
      <div>Count: ${ref.current}</div>
      <button id="ref-button">useRef Button</button>
    `;

    const $refButton = document.querySelector("#ref-button");
    $refButton.addEventListener("click", () => {
      ref.current = ref.current + 1;
      console.log(ref.current);
    });

    const $stateButton = document.querySelector("#state-button");
    $stateButton.addEventListener("click", () => {
      setCount(count.value + 1);
      console.log(count.value);
      reRender();
    });
  }

  // Initial Rendering
  reRender();
}

render();
