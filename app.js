document.addEventListener("DOMContentLoaded", () => {
  const relojEl = document.getElementById("reloj");
  const estadoEl = document.getElementById("estado");
  const contadorEl = document.getElementById("contador");
  const btnContador = document.getElementById("btn-contador");
  const btnTema = document.getElementById("btn-tema");

  let clics = 0;

  // Confirmar ejecución de JS
  estadoEl.textContent = "Activo";

  // Actualizar reloj cada segundo
  const actualizarReloj = () => {
    relojEl.textContent = new Date().toLocaleTimeString("es-ES");
  };
  actualizarReloj();
  setInterval(actualizarReloj, 1000);

  // Contador interactivo
  btnContador.addEventListener("click", () => {
    clics++;
    contadorEl.textContent = clics;
  });

  // Alternar modo claro/oscuro
  btnTema.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
});