import applauseImg from "../../assets/applause.gif";
import aplauseSound from '../../assets/applause.mp3';
import css from '../../styles/applause.component.css';

const template: HTMLTemplateElement = document.createElement('template');
const audioApplause: HTMLAudioElement = new Audio(aplauseSound);

template.innerHTML = `
  <style>${css.toString()}</style>

  <div class="applause">
    <img src="${applauseImg}" alt="BRAWO!">
  </div>
`;

export class Applause extends HTMLElement {
  shadow: ShadowRoot;

  constructor () {
    super();

    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.appendChild(template.content.cloneNode(true));
  }

  connectedCallback () {
    audioApplause.loop = true;
    audioApplause.play();
  }

  disconnectedCallback () {
    audioApplause.pause();
  }
}