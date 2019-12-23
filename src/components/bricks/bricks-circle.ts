import { BricksSquare } from "./bricks-square";

const style: HTMLStyleElement = document.createElement('style');
style.id = "circle-styles";

export class BricksCircle extends BricksSquare {
  static get observedAttributes() {
    return ['background'];
  }

  constructor () {
    super();
    
    const styles: string = makeStyles(this.getAttribute('background') || undefined);

    this.shadow.querySelector(".square").classList.add("bricks-circle");
    this.shadow.appendChild(style.cloneNode(true));
    this.shadow.querySelector("#circle-styles").textContent = styles;
  }

  attributeChangedCallback (name: string, oldValue: string, newValue: string) {
    if(name === "background") {
      const styles: string = makeStyles(this.getAttribute('background') || undefined);
      this.shadow.querySelector("#circle-styles").textContent = styles;
    }
  }

}

const makeStyles = (backgroundColor: string = "#f28600"): string => `
  .square {
    border-radius: 50%;
    background: ${backgroundColor};
  }
`;