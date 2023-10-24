// Recuerda todas las propiedades que tiene el objeto event !

function drawCross(x, y) {
  // Creamos un elemento div para la primera línea
  const line1 = document.createElement("div");
  line1.style.position = "absolute";
  line1.style.backgroundColor = "green";
  line1.style.width = "2px";
  line1.style.height = "20px";
  line1.style.left = x + "px";
  line1.style.top = y - 10 + "px";
  document.body.appendChild(line1);

  // Creamos un elemento div para la segunda línea
  const line2 = document.createElement("div");
  line2.style.position = "absolute";
  line2.style.backgroundColor = "green";
  line2.style.width = "20px";
  line2.style.height = "2px";
  line2.style.left = x - 10 + "px";
  line2.style.top = y + "px";
  document.body.appendChild(line2);
}
