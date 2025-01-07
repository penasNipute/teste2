// Função para atualizar o ano atual no HTML

  const currentYear = new Date().getFullYear(); // Obtem o ano atual
  console.log('currentYear', currentYear);
  const yearElement = document.getElementById('current-year'); // Seleciona o elemento HTML

  yearElement.textContent = currentYear; // Atualiza o conteúdo do elemento HTML