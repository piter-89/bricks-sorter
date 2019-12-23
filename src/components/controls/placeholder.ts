import interact from 'interactjs'
import * as Srv from '../../services/placeholder';
import { elementsEnum } from "../../services/_shared";

const css = require('../../styles/placeholder.component.css');

const template: HTMLTemplateElement = document.createElement('template');

template.innerHTML = `
  
  <style>${css.toString()}</style>

  <div>
    <div class="placeholders">
      <bricks-triangle class="figure" background="white"></bricks-triangle>
      <bricks-circle class="figure" background="white"></bricks-circle>
      <bricks-square class="figure" background="white"></bricks-square>
      <bricks-trapezoid class="figure" background="white"></bricks-trapezoid>
    </div>
  </div>

`;

export class Placeholder extends HTMLElement {
  shadow: ShadowRoot;

  constructor () {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.appendChild(template.content.cloneNode(true));
  }

  connectedCallback () {
    elementsEnum.forEach((el) => {
      const settings = Srv.dropzoneSettings(this.shadow);
      interact(this.shadow.querySelector(el)).dropzone({
        ...settings,
        accept: el
      });
    });
    
  }
}