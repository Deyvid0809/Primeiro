function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a img
  if (html.classList.contains("light")) {
    //se tiver com light mode adicionar a img
    img.setAttribute('src', "./assets/avatar.png")
    img.setAttribute("alt", "Foto de Diego Mendes, em um local de Dia")
  } else {
    //se tiver sem light mode manter
    img.setAttribute("src", "./assets/diego01.png")
    img.setAttribute("alt", "Foto de Diego Mendes, em um local de Noite")
  }

}
