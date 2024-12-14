const bookList = document.getElementById('bookList');
const popup = document.getElementById('popup');
const addBookBtn = document.getElementById('addBookBtn');
const closePopupBtn = document.getElementById('closePopupBtn');
const saveBookBtn = document.getElementById('saveBookBtn');
const popupTitle = document.getElementById('popupTitle');
const bookTitle = document.getElementById('bookTitle');
const bookAuthor = document.getElementById('bookAuthor');
const bookISBN = document.getElementById('bookISBN');
const bookYear = document.getElementById('bookYear');
const bookImage = document.getElementById('bookImage');

let books = [];
let editingIndex = null;

function openPopup(editing = false, index = null) {
  popup.style.display = 'flex';
  if (editing) {
    const book = books[index];
    popupTitle.textContent = 'Editar Livro';
    bookTitle.value = book.title;
    bookAuthor.value = book.author;
    bookISBN.value = book.isbn;
    bookYear.value = book.year;
    bookImage.value = book.image;
    editingIndex = index;
  } else {
    popupTitle.textContent = 'Adicionar Livro';
    bookTitle.value = '';
    bookAuthor.value = '';
    bookISBN.value = '';
    bookYear.value = '';
    bookImage.value = '';
    editingIndex = null;
  }
}

function closePopup() {
  popup.style.display = 'none';
}

function renderBooks() {
  bookList.innerHTML = '';
  books.forEach((book, index) => {
    const bookItem = document.createElement('div');
    bookItem.className = 'book-item';
    bookItem.innerHTML = `
      <img src="${book.image}" alt="${book.title}" />
      <h3>${book.title}</h3>
      <p>${book.author}</p>
      <p>ISBN: ${book.isbn}</p>
      <p>Ano: ${book.year}</p>
      <button class="edit-btn" onclick="editBook(${index})">Editar</button>
      <button class="delete-btn" onclick="deleteBook(${index})">Excluir</button>
    `;
    bookList.appendChild(bookItem);
  });
}

function saveBook() {
  const book = {
    title: bookTitle.value,
    author: bookAuthor.value,
    isbn: bookISBN.value,
    year: bookYear.value,
    image: bookImage.value,
  };

  if (editingIndex !== null) {
    books[editingIndex] = book;
  } else {
    books.push(book);
  }

  closePopup();
  renderBooks();
}

function editBook(index) {
  openPopup(true, index);
}

function deleteBook(index) {
  books.splice(index, 1);
  renderBooks();
}

addBookBtn.addEventListener('click', () => openPopup());
closePopupBtn.addEventListener('click', closePopup);
saveBookBtn.addEventListener('click', saveBook);

// Initial render
renderBooks();
