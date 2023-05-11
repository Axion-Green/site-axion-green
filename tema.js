const themeButton = document.getElementById("theme-button");
const htmlElement = document.documentElement;

const storedTheme = localStorage.getItem("theme");
if (storedTheme) {
  htmlElement.classList.add(storedTheme);
}

themeButton.addEventListener("click", function(){
    /* document.documentElement.classList.toggle("dark-mode") */
    // Alterna a classe 'dark-mode' na raiz do documento HTML
  htmlElement.classList.toggle("dark-mode");

  // Salva a escolha do usuário em localStorage
  if (htmlElement.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark-mode");
  } else {
    localStorage.removeItem("theme");
  }
});
$(document).ready(function(){
  var typed = new Typed(".typing-3", {
  strings: [" o Meio ambiente", "a Vida", "o Futuro", "a Sustentabilidade", "a Inovação"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });
  
 
});
