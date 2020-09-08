let library = [];
const libContainer = document.getElementById('library');

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  }
}

function addToLibrary(title, author, pages, read) {
  read ? read = "Read" : read = "Not Read"
  const book = new Book(title, author, pages, read);
  library.push(book);
  renderLibrary(library);
}

function renderLibrary(array) {
  let i = 0;
  while(libContainer.firstChild) {
    libContainer.removeChild(libContainer.lastChild);
  }
  array.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = item.info() + '<button id="delete">Delete</button>';
    card.id = i;
    libContainer.appendChild(card);
    i++;
  });
}

function handleAddBtn() {
  const addCard = document.getElementById('addCard');
  const addBook = document.getElementById('addBook');
  addCard.addEventListener('click', () => {
    addCard.style.cssText = "display: none";
    addBook.style.cssText = "display: flex";
  });
}

function handleFormSubmit() {
  const addCard = document.getElementById('addCard');
  const addBook = document.getElementById('addBook');
  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  const pages = document.querySelector('#pages');
  const checkBox = document.querySelector('#read');
  document.getElementById('addBook').addEventListener('submit', () => {
    addToLibrary(title.value, author.value, pages.value, checkBox.checked);
    addCard.style.cssText = "display: flex";
    addBook.style.cssText = "display: none";
  });
}

function handleCancelBtn() {
  const addCard = document.getElementById('addCard');
  const addBook = document.getElementById('addBook');
  document.getElementById('cancel').addEventListener('click', () => {
    addCard.style.cssText = "display: flex";
    addBook.style.cssText = "display: none";
  });
}

function deleteBook(index) {
  library = library.slice(index, index + 1);
  renderLibrary(library);
}

function handleDeleteBtn() {
  document.querySelectorAll('delete').forEach((btn) => {
    btn.addEventListener('click', () => {
      deleteBook(this.parentElement.id);
      console.log(btn);
    });
  });
}

handleAddBtn();
handleFormSubmit();
handleCancelBtn();
addToLibrary("The Gunslinger", "Stephen King", "600", false);
handleDeleteBtn();