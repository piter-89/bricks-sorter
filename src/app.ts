import { assignNewComponents } from "./services/assignNewComponents";
import { runInteract } from "./services/runInteract";
import './styles/style.css';

const bricksGeneratorEl: HTMLElement = document.createElement("bricks-generator");
const placeHolderEl: HTMLElement = document.createElement("bricks-placeholder");
const newElementsEl: HTMLDivElement = document.createElement("div");
const wrapper: HTMLDivElement = document.createElement("div");

assignNewComponents();
runInteract();

bricksGeneratorEl.addEventListener('create-brick', (ev: CustomEvent) => {
  const { detail: brickName } = ev;
  const newEl = document.createElement(brickName);

  newEl.classList.add("draggable-source");
  newElementsEl.appendChild(newEl);
});

wrapper.classList.add("wrapper");
wrapper.appendChild(bricksGeneratorEl);
wrapper.appendChild(newElementsEl);
wrapper.appendChild(placeHolderEl);

document.querySelector("body").appendChild(wrapper);
