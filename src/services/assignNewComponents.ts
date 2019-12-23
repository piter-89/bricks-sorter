import { BricsTriangle } from "../components/bricks/bricks-triangle";
import { BricksSquare } from "../components/bricks/bricks-square"
import { BricksCircle } from "../components/bricks/bricks-circle"
import { BricksTrapezoid } from "../components/bricks/bricks-trapezoid"
import { Generator } from "../components/controls/generator"
import { Placeholder } from "../components/controls/placeholder";
import { Applause } from "../components/controls/applause";


export const assignNewComponents = () => {
  window.customElements.define('bricks-triangle', BricsTriangle);
  window.customElements.define('bricks-circle', BricksCircle);
  window.customElements.define('bricks-square', BricksSquare);
  window.customElements.define('bricks-trapezoid', BricksTrapezoid);
  window.customElements.define('bricks-generator', Generator);
  window.customElements.define('bricks-placeholder', Placeholder);
  window.customElements.define('bricks-applause', Applause);
}