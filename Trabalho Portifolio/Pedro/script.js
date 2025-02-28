// Função para ajustar a classe com base no tamanho da tela
function adjustLayout() {
    const width = window.innerWidth; // Obtém a largura da tela
    const body = document.body;
  
    // Remover as classes de layout anteriores
    body.classList.remove("mobile-first", "desktop-first");
  
    // Aplicar a classe baseada no tamanho da tela
    if (width <= 768) {
      body.classList.add("mobile-first"); // Mobile-first para telas pequenas
    } else {
      body.classList.add("desktop-first"); // Desktop-first para telas maiores
    }
  }
  
  // Chama a função quando a página carrega e também quando a tela for redimensionada
  window.addEventListener("load", adjustLayout);
  window.addEventListener("resize", adjustLayout);