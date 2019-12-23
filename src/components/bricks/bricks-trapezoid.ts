const template: HTMLTemplateElement = document.createElement('template');

template.innerHTML = `
  <style></style>

  <div class="trapezoid"></div>
`;

export class BricksTrapezoid extends HTMLElement {
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

const makeStyles = (backgroundColor: string = "#2bb1be"): string => `
    .trapezoid {
      border-bottom: 30px solid ${backgroundColor};
      border-left: 14px solid transparent;
      border-right: 14px solid transparent;
      height: 0;
      width: 30px;
    }
  `;