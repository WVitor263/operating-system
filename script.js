//movimento do mouse
let startY = 0;
let distancia = 0;
let arrastando = false;

const tela = document.querySelector(".tela-bloqueio");
const telaInicial = document.querySelector(".tela-inicial");

tela.addEventListener("pointerdown", function (e) {
  startY = e.clientY;
  arrastando = true;
});

tela.addEventListener("pointermove", function (e) {
  if (!arrastando) {
    return;
  }
  distancia = startY - e.clientY;
});

tela.addEventListener("pointerup", function (e) {
  if (!arrastando) {
    return;
  }
  distancia = startY - e.clientY;
  arrastando = false;
  if (distancia >= 100) {
    tela.style.display = "none";
    telaInicial.style.display = "block";
  }
  startY = 0;
  distancia = 0;
});
