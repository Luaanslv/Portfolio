const toggle = document.getElementById('menu-bar');
const conteudo = document.querySelector('.barra-nav');
const icon = document.querySelector("i");

toggle.addEventListener("click", () => {
  conteudo.classList.toggle("active");

  // Troca o ícone
  if (conteudo.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});