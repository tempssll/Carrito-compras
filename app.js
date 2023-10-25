const header = document.querySelector("#header");
const contenedor = document.querySelector("#contenedor");
const body = document.querySelector("body");
window.addEventListener("scroll", function () {
  if (contenedor.getBoundingClientRect().top < 10) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});

// Obtén una referencia al contenedor del carrito y la lista de productos en el carrito
const carritoContainer = document.getElementById("carrito");
const carritoList = document.getElementById("carrito-list");

// Inicializa un arreglo para mantener los productos seleccionados
const productosSeleccionados = [];

// Obtén todos los botones "Comprar"
const botonesComprar = document.querySelectorAll(".comprar");

botonesComprar.forEach((boton) => {
  boton.addEventListener("click", () => {
    const producto = boton.parentElement.querySelector("p").textContent;
    const precio = boton.parentElement.querySelector(".precio").textContent;

    // Agrega el producto seleccionado al arreglo
    productosSeleccionados.push({ producto, precio });

    // Actualiza la interfaz de usuario
    const itemCarrito = document.createElement("li");
    itemCarrito.textContent = `${producto} - ${precio}`;
    carritoList.appendChild(itemCarrito);
  });
});

/* ?=========================== */
// Agrega un evento de clic al botón "Descargar Pedido"
const btnDescargarPedido = document.getElementById("descargarPedido");

btnDescargarPedido.addEventListener("click", () => {
  // Define el contenido del pedido como texto
  const contenidoCarrito = productosSeleccionados
    .map((producto) => `${producto.producto} - ${producto.precio}`)
    .join("\n");

  // Crea un elemento 'a' para el enlace de descarga
  const enlaceDescarga = document.createElement("a");
  enlaceDescarga.href = `data:text/plain;charset=utf-8,${encodeURIComponent(
    contenidoCarrito
  )}`;
  enlaceDescarga.download = "pedido.txt";
  enlaceDescarga.style.display = "none";

  // Agrega el enlace al cuerpo del documento
  document.body.appendChild(enlaceDescarga);

  // Simula un clic en el enlace para iniciar la descarga
  enlaceDescarga.click();

  // Elimina el enlace después de la descarga
  document.body.removeChild(enlaceDescarga);
});

/* Compartir a whaapp */

document
  .getElementById("compartirWhatsapp")
  .addEventListener("click", function () {
    // Reemplaza "tu_link_de_descarga" con la URL de descarga de tu archivo de pedido
    var linkDeDescarga = "";

    // Verifica si el usuario tiene WhatsApp instalado
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      // Abre WhatsApp con el enlace de descarga
      window.location.href = "whatsapp://send?text=" + linkDeDescarga;
    } else {
      // Si el usuario está en una computadora, proporciona un mensaje para compartir manualmente
      alert(
        "Da click en el boton de enviar pedido, y  busca el archivo descargado en tu dispositivo y envia tu pedido." +
          linkDeDescarga
      );
    }
  });
