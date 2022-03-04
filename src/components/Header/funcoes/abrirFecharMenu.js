function abrirFecharMenu() {
  const headerNav = document.querySelector(".header__nav");

  const headerNavEstaOculto =
    headerNav.style.left === "" || headerNav.style.left === "-330px";

  if (headerNavEstaOculto) {
    headerNav.style.left = "0px";
  } else {
    headerNav.style.left = "-330px";
  }
}

export default abrirFecharMenu;
