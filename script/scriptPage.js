console.clear();

// selectionne l'élement qui a pour id app
const elApp = document.querySelector("#app");

// What we need...
// Mouse position
// Currently hovered item


// eccoute la page sur l'élément body sur l'évenemnt bouger la sourie
document.body.addEventListener("mousemove", (event) => {
  console.log({
    x: event.clientX,
    y: event.clientY
  });

  elApp.style.setProperty("--x", event.clientX);
  elApp.style.setProperty("--y", event.clientY);
});

