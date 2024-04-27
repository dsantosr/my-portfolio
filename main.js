// Função para a estilização da barra de scroll do header
document.addEventListener('scroll', function() {
  //Calcula a distância máxima de rolagem
  const maxScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  //Posição atual de rolagem
  const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  //Calcula a porcentagem de rolagem
  const scrollPercent = (currentScroll / maxScroll) * 100;
  //Define a largura da barra de progresso
  document.querySelector('.header__progressBar').style.width = `${scrollPercent}%`;
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
  const themeButton = document.querySelector('.header__menu__themeButton');

  themeButton.addEventListener('change', function() {
      if (this.checked) {
          document.documentElement.style.setProperty('--background-color', 'rgb(226, 226, 226)');
      } else {
          document.documentElement.style.setProperty('--background-color', 'rgb(26, 27, 28)');
      }
  });
});