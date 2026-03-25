let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  actualizarCarrito();
}

function actualizarCarrito() {
  const lista = document.getElementById("carrito-lista");
  const total = document.getElementById("total");

  lista.innerHTML = "";
  let suma = 0;

  carrito.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item.nombre + " - $" + item.precio;

    const btn = document.createElement("button");
    btn.textContent = "❌";
    btn.onclick = () => eliminarProducto(index);

    li.appendChild(btn);
    lista.appendChild(li);

    suma += item.precio;
  });

  total.textContent = "Total: $" + suma;

  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function eliminarProducto(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}

function comprar() {
  if (carrito.length === 0) {
    alert("El carrito está vacío");
    return;
  }

  let mensaje = "Hola, quiero comprar:\n";
  carrito.forEach(item => {
    mensaje += "- " + item.nombre + " $" + item.precio + "\n";
  });

  const url = "https://wa.me/5492216193015?text=" + encodeURIComponent(mensaje);
  window.open(url, "_blank");
}

// Cargar carrito al iniciar
actualizarCarrito();
