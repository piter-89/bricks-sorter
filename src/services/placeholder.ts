import waterSound from '../assets/water-sound.mp3';

export const dropzoneSettings = (shadowDOM: ShadowRoot) => {
  const audioWater: HTMLAudioElement = new Audio(waterSound);
  const applauseEl: HTMLElement = document.createElement("bricks-applause");

  audioWater.loop = true;
  
  return {
    // Require a 75% element overlap for a drop to be possible
    overlap: 0.5,
  
    // listen for drop related events:
  
    ondropactivate: function (event: Interact.DragEvent) {
      audioWater.play();
    },
    ondragenter: function (event: Interact.DragEvent) {
      console.log("ondragenter");
      var draggableElement = event.relatedTarget
      var dropzoneElement = event.target
  
      dropzoneElement.classList.add('drop-target')
      dropzoneElement.setAttribute("background", "#5fb632");
      
      setTimeout(() => {
        shadowDOM.appendChild(applauseEl);
        draggableElement.remove();
        dropzoneElement.setAttribute("background", "white");
        dropzoneElement.classList.remove('drop-target')
        setTimeout(() => {
          shadowDOM.removeChild(applauseEl);
        }, 6000);
      }, 2000);
    },
    ondropdeactivate: function (event: Interact.DragEvent) {
      audioWater.pause();
    }
  }
};