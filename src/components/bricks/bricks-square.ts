const template: HTMLTemplateElement = document.createElement('template');

template.innerHTML = `
  <style></style>

  <div class="square"></div>
`;

export class BricksSquare extends HTMLElement {
  shadow: ShadowRoot;

  static get observedAttributes() {
    return ['background'];
  }
  
  constructor () {
    super();

    const styles: string = makeStyles(this.getAttribute('background') || undefined);
    
    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.appendChild(template.content.cloneNode(true));
    this.shadow.querySelector("style").textContent = styles;
  }

  attributeChangedCallback (name: string, oldValue: string, newValue: string) {
    if(name === "background") {
      const styles: string = makeStyles(this.getAttribute('background') || undefined);
      this.shadow.querySelector("style").textContent = styles;
    }
  }

}

const makeStyles = (backgroundColor: string = "#a200d7"): string => `
    .square {
      width: 40px;
      height: 40px;
      background: ${backgroundColor};
    }
  `;