// Script.js
let carrito = [];

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  actualizar();
}

function actualizar() {
  const lista = document.getElementById("carrito");
  const total = document.getElementById("total");

  lista.innerHTML = "";
  let suma = 0;

  carrito.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item.nombre + " - $" + item.precio;

    const btn = document.createElement("button");
    btn.textContent = "❌";
    btn.className = "delete";
    btn.onclick = () => eliminar(index);

    li.appendChild(btn);
    lista.appendChild(li);

    suma += item.precio;
  });

  total.textContent = "Total: $" + suma;
}

function eliminar(index) {
  carrito.splice(index, 1);
  actualizar();
}

function comprar() {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío 😢");
    return;
  }

  let mensaje = "Hola! Quiero comprar:\n";

  carrito.forEach(item => {
    mensaje += `- ${item.nombre} $${item.precio}\n`;
  });

  window.open("https://wa.me/5492216193015?text=" + encodeURIComponent(mensaje));
}
