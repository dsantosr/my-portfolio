let body = document.querySelectorAll('*');
let root = document.querySelector(':root');

// Função para a estilização da barra de scroll do header
document.addEventListener('scroll', function() {
  //Calcula a distância máxima de rolagem
  const maxScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  //Posição atual de rolagem
  const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  //Calcula a porcentagem de rolagem
  const scrollPercent = (currentScroll / maxScroll) * 100;
  //Define a largura da barra de progresso
  document.querySelector('.header__bottomBar__progressBar').style.width = `${scrollPercent}%`;
});

// Função para o plugin VLibras
document.addEventListener('DOMContentLoaded', function(){
  var script = document.createElement('script');
  script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
  script.onload = function() {
    new window.VLibras.Widget('https://vlibras.gov.br/app');
  };
  document.body.appendChild(script);
});

// Função para o a mudança de tema
document.addEventListener('DOMContentLoaded', function() {
  theme.addEventListener('click', function() {
      body.forEach(element => {
          element.classList.toggle('light');
      });
  });
});


// Função para manipulação da logo para interação com mouse
document.addEventListener('DOMContentLoaded', function() {
  let icon = document.querySelector('#mouse__icon');
  let elements = document.querySelectorAll('#mouse__icon *');
  let html = document.querySelector('html');
  html.addEventListener('mousedown', () => {
    icon.style.setProperty("filter", "unset");
    elements[0].style.setProperty("fill", "var(--highlight-color");
    elements[1].style.setProperty("fill", "var(--icon-color");
    elements[2].style.setProperty("fill", "var(--icon-color");
    html.addEventListener('mouseup', () =>{
      elements[0].style.setProperty("fill", "var(--icon-color");
      elements[1].style.setProperty("fill", "var(--icon-color");
      elements[2].style.setProperty("fill", "var(--icon-color");
      icon.style.setProperty("filter", "var(--icon-filter)");
    });
  });
});