import * as Srv from '../../services/generator';
import css from '../../styles/generator.component.css'

const template: HTMLTemplateElement = document.createElement('template');

template.innerHTML = `
  <style>${css}</style>

  <div class="generator">
    <div id="landing"></div>
    <button id="generate" class="btn-add">+</button>
  </div>
`;

export class Generator extends HTMLElement {
  shadow: ShadowRoot;

  constructor () {
    super();

    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.appendChild(template.content.cloneNode(true));
  }

  connectedCallback () {
    const btn = this.shadow.querySelector("#generate");
    const landing = this.shadow.querySelector("#landing");

    btn.addEventListener('click', (e) => {
      e.preventDefault;
      const event: Event = new CustomEvent('create-brick', { detail: Srv.getRandomBrickElName()})

      this.dispatchEvent(event);
      
    });

  }

}