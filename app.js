//1. Asociamos el evento clic a .map

let map = document.querySelector(".map");

map.addEventListener("click", function (event) {
  const mapRect = map.getBoundingClientRect();
  const x = event.clientX - mapRect.left;
  const y = event.clientY - mapRect.top;

  // Invocamos la función drawCross, y le pasamos el valor de las variables anteriores
  drawCross(x, y, map);
});

function drawCross(x, y, container) {
  // Creamos un elemento div para la primera línea
  const line1 = document.createElement("div");
  line1.style.position = "absolute";
  line1.style.backgroundColor = "green";
  line1.style.width = "2px";
  line1.style.height = "20px";
  line1.style.left = x + "px";
  line1.style.top = y - 10 + "px";
  container.appendChild(line1);

  // Creamos un elemento div para la segunda línea
  const line2 = document.createElement("div");
  line2.style.position = "absolute";
  line2.style.backgroundColor = "green";
  line2.style.width = "20px";
  line2.style.height = "2px";
  line2.style.left = x - 10 + "px";
  line2.style.top = y + "px";
  container.appendChild(line2);
}
