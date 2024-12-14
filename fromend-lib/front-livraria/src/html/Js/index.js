// Seleciona elementos do DOM
const searchInput = document.querySelector('.search input');
const bookItems = document.querySelectorAll('.book-item');
const categoryLinks = document.querySelectorAll('.categories .category');

// Função de busca
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();

  bookItems.forEach((item) => {
    const title = item.querySelector('.book-title').textContent.toLowerCase();
    if (title.includes(query)) {
      item.style.display = ''; // Mostra o livro
    } else {
      item.style.display = 'none'; // Esconde o livro
    }
  });
});


