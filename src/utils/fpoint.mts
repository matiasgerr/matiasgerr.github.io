 document.addEventListener("DOMContentLoaded", () => {
      const fpoint = document.querySelector("#fpoint") as HTMLElement;
      if (fpoint) {
        fpoint.addEventListener("mousemove", (e) => {
          const mouseEvent = e as MouseEvent;
          const x = mouseEvent.offsetX;
          const y = mouseEvent.offsetY;
          fpoint.style.background = `
            radial-gradient(circle at ${x}px ${y}px, 
              rgba(255,255,255,0.5) 100px, 
              transparent 150px),
            #59159d9f
          `;
        });
        fpoint.addEventListener("mouseleave", () => {
          fpoint.style.background = "#59159d9f";
        });
      }
    });