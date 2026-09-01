const menuModulos = document.getElementById("menuModulos");
const listaModulos = document.getElementById("listaModulos");
const botonTema = document.getElementById("botonTema");

/* ==========================================
   MOSTRAR LOS MÓDULOS ACTIVOS
========================================== */

const modulosActivos = modulos.filter(
  modulo => modulo.activo
);

/* Enlaces de la barra superior */

modulosActivos.forEach(modulo => {
  const enlace = document.createElement("a");

  enlace.href = `${modulo.carpeta}/index.html`;
  enlace.textContent = modulo.siglas;
  enlace.title = modulo.nombre;

  menuModulos.appendChild(enlace);
});

/* Tarjetas de la página principal */

modulosActivos.forEach(modulo => {
  const tarjeta = document.createElement("article");

  tarjeta.className = "tarjeta-modulo";

  tarjeta.innerHTML = `
    <div class="tarjeta-cabecera ${modulo.claseColor}">
      <h3>${modulo.tituloTarjeta}</h3>
    </div>

    <div class="tarjeta-contenido">
      <p>
        Módulo ${modulo.codigo} · ${modulo.curso}
      </p>

      <a
        class="enlace-modulo"
        href="${modulo.carpeta}/index.html"
      >
        Ir a la sección
        <span aria-hidden="true">→</span>
      </a>
    </div>
  `;

  listaModulos.appendChild(tarjeta);
});

/* ==========================================
   MODO CLARO Y OSCURO
========================================== */

const temaGuardado = localStorage.getItem("tema");

if (temaGuardado === "oscuro") {
  document.body.classList.add("modo-oscuro");
  botonTema.textContent = "🌙";
}

botonTema.addEventListener("click", () => {
  document.body.classList.toggle("modo-oscuro");

  const estaOscuro =
    document.body.classList.contains("modo-oscuro");

  botonTema.textContent =
    estaOscuro ? "🌙" : "☀️";

  localStorage.setItem(
    "tema",
    estaOscuro ? "oscuro" : "claro"
  );
});
