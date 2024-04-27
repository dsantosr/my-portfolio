let body = document.querySelectorAll('*');
let root = document.querySelector(':root');
//root.style.setProperty("nome da variável", "valor");
//root.style.getPropertyValue("variavel"); 

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

let color = root.style.getPropertyValue("--shadow-color"); 

let icon = document.querySelector('#mouse1__icon');
let html = document.querySelector('html');
html.addEventListener('mousedown', () => {
    icon.style.setProperty("fill", "#000000")
    html.addEventListener('mouseup', () =>{
        icon.style.setProperty("fill", "#555555")
    })
})