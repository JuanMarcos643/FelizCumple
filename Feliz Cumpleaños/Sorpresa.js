// Carta
const regalo = document.querySelector(".regalo");
const regalos = document.querySelector(".regalos");
const modalCarta = document.getElementById("modalCarta");

regalo.addEventListener("click", () => {
  modalCarta.classList.add("activo");
});

regalos.addEventListener("click", () => {
  modalCarta.classList.add("activo");
});

modalCarta.addEventListener("click", () => {
  modalCarta.classList.remove("activo");
});

// Todo Oscuro + Soplido + Canción
const overlay = document.querySelector(".overlay");
const soplido = document.getElementById("soplido");
const cancion = document.getElementById("cancion");
const llama = document.querySelector(".llama");

function reproducir(audio) {
  audio.currentTime = 0;
  return audio.play().catch(() => undefined);
}

llama.addEventListener("click", () => {
  reproducir(soplido);

  setTimeout(() => {
    reproducir(cancion);
    overlay.classList.add("hidden");
  }, 1000);
});
