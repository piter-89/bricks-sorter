const template: HTMLTemplateElement = document.createElement('template');

template.innerHTML = `
  <style></style>

  <div class="triangle-right"></div>
`;

export class BricsTriangle extends HTMLElement {
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

const makeStyles = (backgroundColor: string = "#00adff"): string => `
    .triangle-right {
      width: 0;
      height: 0;
      border-top: 23px solid transparent;
      border-left: 45px solid ${backgroundColor};
      border-bottom: 23px solid transparent;
    }
  `;