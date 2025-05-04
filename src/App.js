import useCustomState from "./hooks/useCustomState.js";
import useCustomRef from "./hooks/useCustomRef.js";

const $app = document.querySelector("#app");

function render() {
  const [count, setCount] = useCustomState(0);
  const ref = useCustomRef(0);
  const [items, setItems] = useCustomState([]);

  function reRender() {
    $app.innerHTML = `
      <h1>SPA with Vanila Javascript</h1>
      <div>Let's start</div>
      <div>Count: ${count.value}</div>
      <button id="state-button">useState Button</button>
      <div>Count: ${ref.current}</div>
      <button id="ref-button">useRef Button</button>
      <div>
        ${items.value.length === 0 ? "empty" : items.value}
      </div>
      <button id="add-item-button">Add Item</button>
    `;

    const $stateButton = document.querySelector("#state-button");
    $stateButton.addEventListener("click", () => {
      setCount(count.value + 1);
      console.log(count.value);
      reRender();
    });

    const $refButton = document.querySelector("#ref-button");
    $refButton.addEventListener("click", () => {
      ref.current = ref.current + 1;
      console.log(ref.current);
    });

    const $addItemButton = document.querySelector("#add-item-button");
    $addItemButton.addEventListener("click", () => {
      setItems([...items.value, `Item ${items.value.length + 1}`]);
      reRender();
    });
  }

  // Initial Rendering
  reRender();
}

render();
