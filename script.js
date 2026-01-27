function toggleMenu() {
  const menu = document.getElementById("sideMenu");
  if(menu.style.left === "0px") {
    menu.style.left = "-220px";
  } else {
    menu.style.left = "0px";
  }
}
